var express = require('express');
var shell = require('shelljs');

// CONSTANTES NECESSÁRIAS PARA O ACESSO DO DOJOT:

// TOKEN DOJOT - PC JOINER.
//const tokenJwt = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI4ZmNtOGd6WUxKVXJYbEpWenpGclQ5RDhjQXppVWZzaiIsImlhdCI6MTU4NjI5MDE2OSwiZXhwIjoxNTg2MjkwNTg5LCJuYW1lIjoiQWRtaW4gKHN1cGVydXNlcikiLCJlbWFpbCI6ImFkbWluQG5vZW1haWwuY29tIiwicHJvZmlsZSI6ImFkbWluIiwiZ3JvdXBzIjpbMV0sInVzZXJpZCI6MSwianRpIjoiYzUxM2Q2Yzc2ZWM1OWE3Y2IyYTdkNGI1N2VkM2U1ODEiLCJzZXJ2aWNlIjoiYWRtaW4iLCJ1c2VybmFtZSI6ImFkbWluIn0.IWl5HVMQnrtY3zSxQLwQ6FJ6djwtBYIHDuANZBvQfzs";

// TOKEN UBUNTU SERVER - LABEX.
const tokenJwt = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI4NlNmNkRtdXRPeDc2NzBWaWF2Uk1ObXRCbUNHcFl4eiIsImlhdCI6MTU4Njc0NzA0MywiZXhwIjoxNTg2NzQ3NDYzLCJuYW1lIjoiQWRtaW4gKHN1cGVydXNlcikiLCJlbWFpbCI6ImFkbWluQG5vZW1haWwuY29tIiwicHJvZmlsZSI6ImFkbWluIiwiZ3JvdXBzIjpbMV0sInVzZXJpZCI6MSwianRpIjoiNzJkZWQ4MmQxNGZjNmY0OGI4NDZiODFhMDIzOTAyMDUiLCJzZXJ2aWNlIjoiYWRtaW4iLCJ1c2VybmFtZSI6ImFkbWluIn0.UIgQ4jMyC3IGSNZ7CZzei7xOIX0dbRSXLBRJ2IsHRhw";
const baseUrl = "http://localhost:8000"; // Url do Dojot.
const deviceId = "4843f5"; // Identificador de um dispositivo.
const lastNumber = "1";    // Quantidade de registros obtidos do Dojot. 
const attr = "posicao";    // Atributo a ser obtido do dispositivo.
const comand = `curl -X GET \
		-H "Authorization: Bearer ${tokenJwt}" \
        "${baseUrl}/history/device/${deviceId}/history?lastN=${lastNumber}&attr=${attr}"`;
        
var app = express();

// MÉTODO QUE EXECUTA QUANDO UMA APLICAÇÃO FAZ UMA REQUISIÇÃO GET:

app.get('/', function(req, res){
    
    var data = JSON.parse(shell.exec(comand)); // Executa o comando no shell, traz dados do Dojot e salva em um JSON.
    
    res.send(data); // Retorna como resposta, dados do Dojot.

    console.log('\n\nServidor HTTP está escutando...');
});


// Inicia o servidor na porta especificada.
app.listen(8080);

console.log('Servidor HTTP está escutando...');
