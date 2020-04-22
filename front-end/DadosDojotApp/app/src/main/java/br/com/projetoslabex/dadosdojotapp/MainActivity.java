package br.com.projetoslabex.dadosdojotapp;

import androidx.appcompat.app.AppCompatActivity;

import android.app.ProgressDialog;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.ProgressBar;
import android.widget.TextView;

import com.android.volley.Request;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.JsonObjectRequest;
import com.android.volley.toolbox.StringRequest;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

/**
 * @author Joiner Sá
 */

public class MainActivity extends AppCompatActivity {

    private ProgressBar progressBar;
    private TextView tvDeviceId, tvAttr, tvTs, tvValue;
    private Button btnGet;
    private ProgressDialog progressDialog;
    private final String URL = "http://200.239.66.22:8080/";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        progressBar = findViewById(R.id.progressBar);
        progressBar.setVisibility(View.INVISIBLE);
        tvDeviceId = findViewById(R.id.tv_device_id);
        tvAttr = findViewById(R.id.tv_attr);
        tvTs = findViewById(R.id.tv_ts);
        tvValue = findViewById(R.id.tv_value);
        btnGet = findViewById(R.id.btn_get);

        // COMO É SINGLETON, CRIA APENAS UMA INSTANCIA DE QUEUE PARA TODA A APLICAÇÃO.
        RequestQueueSingleton.getInstance(this).getRequestQueue();

        //NOTA: PARA ADICIONAR UMA REQUISIÇÃO NA FILA, BASTA CHAMAR RequestQueueSingleton.getInstance(this).addToRequestQueue(request).


        btnGet.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                requestDojot();
            }
        });
    }

    private void requestDojot() {

        progressBar.setVisibility(View.VISIBLE);

        StringRequest stringRequest = new StringRequest(
                URL,
                new Response.Listener<String>() {
                    @Override
                    public void onResponse(String response) {
                        try {
                            // O SERVIDOR ENVIA UM ARRAY DE JSON, DESTA FORMA É NECESSÁRIO RECEBER UM JSONARRAY.
                            // ABAIXO É CONVERTIDA A STRING PARA JSONARRAY:
                            JSONArray jsonArray = new JSONArray(response);

                            // A PRIMEIRA POSIÇÃO DO ARRAY É O PRIMEIRO REGISTRO VINDO DO BANCO (APESAR DE VIR APENAS 1 REGISTRO).
                            JSONObject jsonObject = jsonArray.getJSONObject(0);

                            tvDeviceId.setText(jsonObject.getString("device_id"));
                            tvTs.setText(jsonObject.getString("ts"));
                            tvAttr.setText(jsonObject.getString("attr"));
                            tvValue.setText(jsonObject.getString("value"));

                            // TESTE:
                            Log.i("DADOS", response.toString());

                        } catch (JSONException e) {
                            e.printStackTrace();
                        }

                        progressBar.setVisibility(View.INVISIBLE);
                    }
                },
                new Response.ErrorListener() {
                    @Override
                    public void onErrorResponse(VolleyError error) {
                        Log.i("ERROr", error.toString());
                        progressBar.setVisibility(View.INVISIBLE);
                    }
                }
        );

        // ADICIONANDO REQUISIÇÃO NA FILA.
        RequestQueueSingleton.getInstance(this).addToRequestQueue(stringRequest);

    }

}