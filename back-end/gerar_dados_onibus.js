var mqtt = require('mqtt');

//var client  = mqtt.connect('mqtt://192.168.100.10'); // IP LOCAL PC JOINER.
var client  = mqtt.connect('mqtt://10.211.2.253'); // IP LOCAL SERVIDOR.

client.on('connect', function () {
	console.log('Conectou!');
	console.log('Salvando coordenadas...');
	
	client.subscribe('/admin/4843f5/attrs');

	console.log("Tamanho do Array: " + coordenadasOnbus.length);
	
	var i = 0;

	// EXECUTA A CADA 3 SEGUNDOS.
	setInterval(function() {

		var coordenada = coordenadasOnbus[i];

		console.log(i + ' - {"posicao": '+ coordenada.lat + ',' + coordenada.lng + '}');

		client.publish("/admin/4843f5/attrs", '{"posicao": "'+ coordenada.lat + ',' + coordenada.lng + '"}');

		i++;

		if (i == coordenadasOnbus.length) {
			i = 0;
		}

	}, 3000);

});


client.on('message', function (topic, message) {  
	console.log("msg recebida => " + message.toString());  
});


// COORDENADAS DA ROTA CIRCULAR-UFPA.

var coordenadasOnbus = [
{lat: '-1.473613', lng: '-48.458628'},
{lat: '-1.47370417', lng: '-48.45861517'},
{lat: '-1.47379535', lng: '-48.45860235'},
{lat: '-1.47388652', lng: '-48.45858952'},
{lat: '-1.47397770', lng: '-48.45857670'},
{lat: '-1.47406887', lng: '-48.45856387'},
{lat: '-1.47416004', lng: '-48.45855104'},
{lat: '-1.47425122', lng: '-48.45853822'},
{lat: '-1.47434239', lng: '-48.45852539'},
{lat: '-1.47443357', lng: '-48.45851257'},
{lat: '-1.47452474', lng: '-48.45849974'},
{lat: '-1.47461591', lng: '-48.45848691'},
{lat: '-1.47470709', lng: '-48.45847409'},
{lat: '-1.47479826', lng: '-48.45846126'},
{lat: '-1.47488943', lng: '-48.45844843'},
{lat: '-1.47498061', lng: '-48.45843561'},
{lat: '-1.47507178', lng: '-48.45842278'},
{lat: '-1.47516296', lng: '-48.45840996'},
{lat: '-1.47525413', lng: '-48.45839713'},
{lat: '-1.47534530', lng: '-48.45838430'},
{lat: '-1.47543648', lng: '-48.45837148'},
{lat: '-1.47552765', lng: '-48.45835865'},
{lat: '-1.47561883', lng: '-48.45834583'},
{lat: '-1.475710', lng: '-48.458333'},
{lat: '-1.475764', lng: '-48.458333'},
{lat: '-1.475844', lng: '-48.458338'},
{lat: '-1.475919', lng: '-48.458354'},
{lat: '-1.476000', lng: '-48.458376'},
{lat: '-1.476069', lng: '-48.458397'},
{lat: '-1.476139', lng: '-48.458413'},
{lat: '-1.476193', lng: '-48.458445'},
{lat: '-1.476236', lng: '-48.458472'},
{lat: '-1.476295', lng: '-48.458467'},
{lat: '-1.47636261', lng: '-48.45843900'},
{lat: '-1.47643022', lng: '-48.45841100'},
{lat: '-1.47649783', lng: '-48.45838300'},
{lat: '-1.47656544', lng: '-48.45835500'},
{lat: '-1.47663306', lng: '-48.45832700'},
{lat: '-1.47670067', lng: '-48.45829900'},
{lat: '-1.47676828', lng: '-48.45827100'},
{lat: '-1.47683589', lng: '-48.45824300'},
{lat: '-1.47690350', lng: '-48.45821500'},
{lat: '-1.47697111', lng: '-48.45818700'},
{lat: '-1.47703872', lng: '-48.45815900'},
{lat: '-1.47710633', lng: '-48.45813100'},
{lat: '-1.47717394', lng: '-48.45810300'},
{lat: '-1.47724156', lng: '-48.45807500'},
{lat: '-1.47730917', lng: '-48.45804700'},
{lat: '-1.47737678', lng: '-48.45801900'},
{lat: '-1.47744439', lng: '-48.45799100'},
{lat: '-1.477512', lng: '-48.457963'},
{lat: '-1.477566', lng: '-48.457928'},
{lat: '-1.477629', lng: '-48.457879'},
{lat: '-1.477695', lng: '-48.457824'},
{lat: '-1.477757', lng: '-48.457772'},
{lat: '-1.477806', lng: '-48.457720'},
{lat: '-1.477852', lng: '-48.457657'},
{lat: '-1.477876', lng: '-48.457592'},
{lat: '-1.477896', lng: '-48.457521'},
{lat: '-1.477903', lng: '-48.457433'},
{lat: '-1.477900', lng: '-48.457348'},
{lat: '-1.477892', lng: '-48.457245'},
{lat: '-1.477881', lng: '-48.457127'},
{lat: '-1.477863', lng: '-48.457026'},
{lat: '-1.477839', lng: '-48.456932'},
{lat: '-1.477820', lng: '-48.456856'},
{lat: '-1.477802', lng: '-48.456785'},
{lat: '-1.477781', lng: '-48.456725'},
{lat: '-1.477751', lng: '-48.456652'},
{lat: '-1.477731', lng: '-48.456594'},
{lat: '-1.477706', lng: '-48.456538'},
{lat: '-1.477671', lng: '-48.456480'},
{lat: '-1.477633', lng: '-48.456424'},
{lat: '-1.477592', lng: '-48.456361'},
{lat: '-1.477550', lng: '-48.456310'},
{lat: '-1.477514', lng: '-48.456258'},
{lat: '-1.477474', lng: '-48.456204'},
{lat: '-1.477435', lng: '-48.456151'},
{lat: '-1.477388', lng: '-48.456105'},
{lat: '-1.477337', lng: '-48.456043'},
{lat: '-1.477277', lng: '-48.455982'},
{lat: '-1.477226', lng: '-48.455936'},
{lat: '-1.477164', lng: '-48.455878'},
{lat: '-1.477116', lng: '-48.455817'},
{lat: '-1.477062', lng: '-48.455747'},
{lat: '-1.477019', lng: '-48.455701'},
{lat: '-1.476963', lng: '-48.455632'},
{lat: '-1.476923', lng: '-48.455571'},
{lat: '-1.476880', lng: '-48.455516'},
{lat: '-1.476841', lng: '-48.455453'},
{lat: '-1.476800', lng: '-48.455382'},
{lat: '-1.476753', lng: '-48.455307'},
{lat: '-1.476706', lng: '-48.455221'},
{lat: '-1.476665', lng: '-48.455142'},
{lat: '-1.476625', lng: '-48.455055'},
{lat: '-1.476585', lng: '-48.454964'},
{lat: '-1.476547', lng: '-48.454882'},
{lat: '-1.476497', lng: '-48.454800'},
{lat: '-1.47644875', lng: '-48.45473100'},
{lat: '-1.47640050', lng: '-48.45466200'},
{lat: '-1.47635225', lng: '-48.45459300'},
{lat: '-1.476304', lng: '-48.454524'},
{lat: '-1.47626240', lng: '-48.45446760'},
{lat: '-1.47622080', lng: '-48.45441120'},
{lat: '-1.47617920', lng: '-48.45435480'},
{lat: '-1.47613760', lng: '-48.45429840'},
{lat: '-1.476096', lng: '-48.454242'},
{lat: '-1.47604583', lng: '-48.45416650'},
{lat: '-1.47599567', lng: '-48.45409100'},
{lat: '-1.47594550', lng: '-48.45401550'},
{lat: '-1.47589533', lng: '-48.45394000'},
{lat: '-1.47584517', lng: '-48.45386450'},
{lat: '-1.475795', lng: '-48.453789'},
{lat: '-1.47573700', lng: '-48.45381969'},
{lat: '-1.47567900', lng: '-48.45385038'},
{lat: '-1.47562100', lng: '-48.45388106'},
{lat: '-1.47556300', lng: '-48.45391175'},
{lat: '-1.47550500', lng: '-48.45394244'},
{lat: '-1.47544700', lng: '-48.45397312'},
{lat: '-1.47538900', lng: '-48.45400381'},
{lat: '-1.47533100', lng: '-48.45403450'},
{lat: '-1.47527300', lng: '-48.45406519'},
{lat: '-1.47521500', lng: '-48.45409588'},
{lat: '-1.47515700', lng: '-48.45412656'},
{lat: '-1.47509900', lng: '-48.45415725'},
{lat: '-1.47504100', lng: '-48.45418794'},
{lat: '-1.47498300', lng: '-48.45421862'},
{lat: '-1.47492500', lng: '-48.45424931'},
{lat: '-1.474867', lng: '-48.454280'},
{lat: '-1.47481700', lng: '-48.45429853'},
{lat: '-1.47476700', lng: '-48.45431707'},
{lat: '-1.47471700', lng: '-48.45433560'},
{lat: '-1.47466700', lng: '-48.45435413'},
{lat: '-1.47461700', lng: '-48.45437267'},
{lat: '-1.47456700', lng: '-48.45439120'},
{lat: '-1.47451700', lng: '-48.45440973'},
{lat: '-1.47446700', lng: '-48.45442827'},
{lat: '-1.47441700', lng: '-48.45444680'},
{lat: '-1.47436700', lng: '-48.45446533'},
{lat: '-1.47431700', lng: '-48.45448387'},
{lat: '-1.47426700', lng: '-48.45450240'},
{lat: '-1.47421700', lng: '-48.45452093'},
{lat: '-1.47416700', lng: '-48.45453947'},
{lat: '-1.474117', lng: '-48.454558'},
{lat: '-1.474073', lng: '-48.454569'},
{lat: '-1.474022', lng: '-48.454584'},
{lat: '-1.473977', lng: '-48.454598'},
{lat: '-1.473923', lng: '-48.454610'},
{lat: '-1.473882', lng: '-48.454617'},
{lat: '-1.473831', lng: '-48.454626'},
{lat: '-1.473790', lng: '-48.454628'},
{lat: '-1.473743', lng: '-48.454624'},
{lat: '-1.473702', lng: '-48.454608'},
{lat: '-1.473669', lng: '-48.454589'},
{lat: '-1.473634', lng: '-48.454573'},
{lat: '-1.473609', lng: '-48.454552'},
{lat: '-1.473581', lng: '-48.454530'},
{lat: '-1.473554', lng: '-48.454506'},
{lat: '-1.473522', lng: '-48.454473'},
{lat: '-1.473495', lng: '-48.454435'},
{lat: '-1.473460', lng: '-48.454393'},
{lat: '-1.473429', lng: '-48.454344'},
{lat: '-1.473403', lng: '-48.454282'},
{lat: '-1.473385', lng: '-48.454214'},
{lat: '-1.473375', lng: '-48.454156'},
{lat: '-1.473367', lng: '-48.454098'},
{lat: '-1.473361', lng: '-48.454036'},
{lat: '-1.473352', lng: '-48.453974'},
{lat: '-1.473349', lng: '-48.453907'},
{lat: '-1.473347', lng: '-48.453839'},
{lat: '-1.473341', lng: '-48.453756'},
{lat: '-1.473339', lng: '-48.453671'},
{lat: '-1.473335', lng: '-48.453603'},
{lat: '-1.473324', lng: '-48.453504'},
{lat: '-1.473324', lng: '-48.453420'},
{lat: '-1.473330', lng: '-48.453337'},
{lat: '-1.473324', lng: '-48.453273'},
{lat: '-1.473330', lng: '-48.453174'},
{lat: '-1.473327', lng: '-48.453082'},
{lat: '-1.473330', lng: '-48.452983'},
{lat: '-1.473330', lng: '-48.452887'},
{lat: '-1.473319', lng: '-48.452817'},
{lat: '-1.473314', lng: '-48.452736'},
{lat: '-1.473290', lng: '-48.452661'},
{lat: '-1.47327650', lng: '-48.45260600'},
{lat: '-1.473263', lng: '-48.452551'},
{lat: '-1.473241', lng: '-48.452476'},
{lat: '-1.473220', lng: '-48.452412'},
{lat: '-1.473190', lng: '-48.452342'},
{lat: '-1.473164', lng: '-48.452285'},
{lat: '-1.473140', lng: '-48.452210'},
{lat: '-1.473120', lng: '-48.452144'},
{lat: '-1.473102', lng: '-48.452069'},
{lat: '-1.473078', lng: '-48.451987'},
{lat: '-1.473051', lng: '-48.451944'},
{lat: '-1.473032', lng: '-48.451878'},
{lat: '-1.473003', lng: '-48.451795'},
{lat: '-1.472971', lng: '-48.451733'},
{lat: '-1.472936', lng: '-48.451678'},
{lat: '-1.472914', lng: '-48.451634'},
{lat: '-1.472886', lng: '-48.451590'},
{lat: '-1.472861', lng: '-48.451538'},
{lat: '-1.472831', lng: '-48.451489'},
{lat: '-1.472792', lng: '-48.451422'},
{lat: '-1.472755', lng: '-48.451351'},
{lat: '-1.472711', lng: '-48.451295'},
{lat: '-1.472669', lng: '-48.451239'},
{lat: '-1.472633', lng: '-48.451176'},
{lat: '-1.472579', lng: '-48.451123'},
{lat: '-1.472534', lng: '-48.451076'},
{lat: '-1.472500', lng: '-48.451036'},
{lat: '-1.471791', lng: '-48.450486'},
{lat: '-1.471740', lng: '-48.450434'},
{lat: '-1.471697', lng: '-48.450380'},
{lat: '-1.471647', lng: '-48.450313'},
{lat: '-1.471626', lng: '-48.450260'},
{lat: '-1.471601', lng: '-48.450184'},
{lat: '-1.471576', lng: '-48.450091'},
{lat: '-1.471560', lng: '-48.449990'},
{lat: '-1.471559', lng: '-48.449896'},
{lat: '-1.471562', lng: '-48.449816'},
{lat: '-1.471571', lng: '-48.449723'},
{lat: '-1.471582', lng: '-48.449640'},
{lat: '-1.471599', lng: '-48.449577'},
{lat: '-1.471621', lng: '-48.449509'},
{lat: '-1.471647', lng: '-48.449456'},
{lat: '-1.471694', lng: '-48.449421'},
{lat: '-1.471743', lng: '-48.449373'},
{lat: '-1.471795', lng: '-48.449322'},
{lat: '-1.471843', lng: '-48.449278'},
{lat: '-1.471894', lng: '-48.449244'},
{lat: '-1.471946', lng: '-48.449200'},
{lat: '-1.472000', lng: '-48.449152'},
{lat: '-1.472060', lng: '-48.449113'},
{lat: '-1.472113', lng: '-48.449075'},
{lat: '-1.472177', lng: '-48.449041'},
{lat: '-1.472255', lng: '-48.448996'},
{lat: '-1.472323', lng: '-48.448953'},
{lat: '-1.472388', lng: '-48.448928'},
{lat: '-1.472460', lng: '-48.448908'},
{lat: '-1.472536', lng: '-48.448886'},
{lat: '-1.472602', lng: '-48.448865'},
{lat: '-1.472658', lng: '-48.448847'},
{lat: '-1.472719', lng: '-48.448834'},
{lat: '-1.472770', lng: '-48.448821'},
{lat: '-1.472809', lng: '-48.448807'},
{lat: '-1.472846', lng: '-48.448792'},
{lat: '-1.472912', lng: '-48.448778'},
{lat: '-1.472956', lng: '-48.448754'},
{lat: '-1.472999', lng: '-48.448716'},
{lat: '-1.473055', lng: '-48.448668'},
{lat: '-1.473083', lng: '-48.448623'},
{lat: '-1.473113', lng: '-48.448583'},
{lat: '-1.473141', lng: '-48.448523'},
{lat: '-1.473109', lng: '-48.448442'},
{lat: '-1.473079', lng: '-48.448383'},
{lat: '-1.473050', lng: '-48.448314'},
{lat: '-1.473028', lng: '-48.448255'},
{lat: '-1.473002', lng: '-48.448188'},
{lat: '-1.472967', lng: '-48.448115'},
{lat: '-1.472929', lng: '-48.448040'},
{lat: '-1.472894', lng: '-48.447970'},
{lat: '-1.472867', lng: '-48.447919'},
{lat: '-1.47279911', lng: '-48.44792644'},
{lat: '-1.47273122', lng: '-48.44793389'},
{lat: '-1.47266333', lng: '-48.44794133'},
{lat: '-1.47259544', lng: '-48.44794878'},
{lat: '-1.47252756', lng: '-48.44795622'},
{lat: '-1.47245967', lng: '-48.44796367'},
{lat: '-1.47239178', lng: '-48.44797111'},
{lat: '-1.47232389', lng: '-48.44797856'},
{lat: '-1.472256', lng: '-48.447986'},
{lat: '-1.47219111', lng: '-48.44798933'},
{lat: '-1.47212622', lng: '-48.44799267'},
{lat: '-1.47206133', lng: '-48.44799600'},
{lat: '-1.47199644', lng: '-48.44799933'},
{lat: '-1.47193156', lng: '-48.44800267'},
{lat: '-1.47186667', lng: '-48.44800600'},
{lat: '-1.47180178', lng: '-48.44800933'},
{lat: '-1.47173689', lng: '-48.44801267'},
{lat: '-1.471672', lng: '-48.448016'},
{lat: '-1.47160962', lng: '-48.44801263'},
{lat: '-1.47154725', lng: '-48.44800925'},
{lat: '-1.47148488', lng: '-48.44800587'},
{lat: '-1.47142250', lng: '-48.44800250'},
{lat: '-1.47136012', lng: '-48.44799913'},
{lat: '-1.47129775', lng: '-48.44799575'},
{lat: '-1.47123538', lng: '-48.44799237'},
{lat: '-1.471173', lng: '-48.447989'},
{lat: '-1.47109525', lng: '-48.44797525'},
{lat: '-1.47101750', lng: '-48.44796150'},
{lat: '-1.47093975', lng: '-48.44794775'},
{lat: '-1.47086200', lng: '-48.44793400'},
{lat: '-1.47078425', lng: '-48.44792025'},
{lat: '-1.47070650', lng: '-48.44790650'},
{lat: '-1.47062875', lng: '-48.44789275'},
{lat: '-1.470551', lng: '-48.447879'},
{lat: '-1.47049812', lng: '-48.44785975'},
{lat: '-1.47044525', lng: '-48.44784050'},
{lat: '-1.47039237', lng: '-48.44782125'},
{lat: '-1.47033950', lng: '-48.44780200'},
{lat: '-1.47028662', lng: '-48.44778275'},
{lat: '-1.47023375', lng: '-48.44776350'},
{lat: '-1.47018087', lng: '-48.44774425'},
{lat: '-1.470128', lng: '-48.447725'},
{lat: '-1.470139', lng: '-48.447682'},
{lat: '-1.470166', lng: '-48.447645'},
{lat: '-1.470179', lng: '-48.447620'},
{lat: '-1.470199', lng: '-48.447589'},
{lat: '-1.470217', lng: '-48.447549'},
{lat: '-1.470233', lng: '-48.447511'},
{lat: '-1.470250', lng: '-48.447484'},
{lat: '-1.470265', lng: '-48.447443'},
{lat: '-1.470279', lng: '-48.447400'},
{lat: '-1.470290', lng: '-48.447357'},
{lat: '-1.470296', lng: '-48.447305'},
{lat: '-1.470301', lng: '-48.447252'},
{lat: '-1.470292', lng: '-48.447200'},
{lat: '-1.470285', lng: '-48.447153'},
{lat: '-1.470266', lng: '-48.447113'},
{lat: '-1.470246', lng: '-48.447058'},
{lat: '-1.470228', lng: '-48.447012'},
{lat: '-1.470207', lng: '-48.446958'},
{lat: '-1.470190', lng: '-48.446910'},
{lat: '-1.470170', lng: '-48.446859'},
{lat: '-1.470144', lng: '-48.446814'},
{lat: '-1.470127', lng: '-48.446779'},
{lat: '-1.470111', lng: '-48.446747'},
{lat: '-1.470092', lng: '-48.446709'},
{lat: '-1.470080', lng: '-48.446690'},
{lat: '-1.470069', lng: '-48.446657'},
{lat: '-1.470048', lng: '-48.446607'},
{lat: '-1.470024', lng: '-48.446549'},
{lat: '-1.470007', lng: '-48.446495'},
{lat: '-1.469989', lng: '-48.446451'},
{lat: '-1.469971', lng: '-48.446401'},
{lat: '-1.469955', lng: '-48.446359'},
{lat: '-1.469943', lng: '-48.446314'},
{lat: '-1.469927', lng: '-48.446286'},
{lat: '-1.469867', lng: '-48.446303'},
{lat: '-1.469825', lng: '-48.446319'},
{lat: '-1.469790', lng: '-48.446334'},
{lat: '-1.469761', lng: '-48.446351'},
{lat: '-1.469725', lng: '-48.446376'},
{lat: '-1.469704', lng: '-48.446408'},
{lat: '-1.469691', lng: '-48.446454'},
{lat: '-1.469702', lng: '-48.446499'},
{lat: '-1.469718', lng: '-48.446541'},
{lat: '-1.469733', lng: '-48.446580'},
{lat: '-1.469749', lng: '-48.446613'},
{lat: '-1.469761', lng: '-48.446647'},
{lat: '-1.469783', lng: '-48.446689'},
{lat: '-1.469806', lng: '-48.446717'},
{lat: '-1.469833', lng: '-48.446739'},
{lat: '-1.469860', lng: '-48.446744'},
{lat: '-1.469902', lng: '-48.446737'},
{lat: '-1.469941', lng: '-48.446732'},
{lat: '-1.469987', lng: '-48.446715'},
{lat: '-1.470025', lng: '-48.446702'},
{lat: '-1.470067', lng: '-48.446694'},
{lat: '-1.470083', lng: '-48.446702'},
{lat: '-1.470177', lng: '-48.446885'},
{lat: '-1.470279', lng: '-48.447151'},
{lat: '-1.470297', lng: '-48.447253'},
{lat: '-1.470293', lng: '-48.447355'},
{lat: '-1.470266', lng: '-48.447438'},
{lat: '-1.470205', lng: '-48.447565'},
{lat: '-1.470140', lng: '-48.447674'},
{lat: '-1.470112', lng: '-48.447722'},
{lat: '-1.470091', lng: '-48.447741'},
{lat: '-1.469769', lng: '-48.448011'},
{lat: '-1.469719', lng: '-48.448030'},
{lat: '-1.469658', lng: '-48.448049'},
{lat: '-1.469599', lng: '-48.448066'},
{lat: '-1.469534', lng: '-48.448089'},
{lat: '-1.469461', lng: '-48.448101'},
{lat: '-1.469382', lng: '-48.448115'},
{lat: '-1.469316', lng: '-48.448124'},
{lat: '-1.46924860', lng: '-48.44813140'},
{lat: '-1.46918120', lng: '-48.44813880'},
{lat: '-1.46911380', lng: '-48.44814620'},
{lat: '-1.46904640', lng: '-48.44815360'},
{lat: '-1.46897900', lng: '-48.44816100'},
{lat: '-1.46891160', lng: '-48.44816840'},
{lat: '-1.46884420', lng: '-48.44817580'},
{lat: '-1.46877680', lng: '-48.44818320'},
{lat: '-1.46870940', lng: '-48.44819060'},
{lat: '-1.46864200', lng: '-48.44819800'},
{lat: '-1.46857460', lng: '-48.44820540'},
{lat: '-1.46850720', lng: '-48.44821280'},
{lat: '-1.46843980', lng: '-48.44822020'},
{lat: '-1.46837240', lng: '-48.44822760'},
{lat: '-1.468305', lng: '-48.448235'},
{lat: '-1.468243', lng: '-48.448229'},
{lat: '-1.468188', lng: '-48.448221'},
{lat: '-1.468137', lng: '-48.448215'},
{lat: '-1.468083', lng: '-48.448198'},
{lat: '-1.468011', lng: '-48.448175'},
{lat: '-1.467956', lng: '-48.448148'},
{lat: '-1.467896', lng: '-48.448116'},
{lat: '-1.467854', lng: '-48.448081'},
{lat: '-1.467806', lng: '-48.448040'},
{lat: '-1.467779', lng: '-48.447999'},
{lat: '-1.467753', lng: '-48.447965'},
{lat: '-1.467724', lng: '-48.447924'},
{lat: '-1.467697', lng: '-48.447885'},
{lat: '-1.467673', lng: '-48.447837'},
{lat: '-1.467654', lng: '-48.447792'},
{lat: '-1.467629', lng: '-48.447741'},
{lat: '-1.467606', lng: '-48.447696'},
{lat: '-1.467576', lng: '-48.447652'},
{lat: '-1.467532', lng: '-48.447608'},
{lat: '-1.467495', lng: '-48.447577'},
{lat: '-1.467448', lng: '-48.447560'},
{lat: '-1.467409', lng: '-48.447546'},
{lat: '-1.467379', lng: '-48.447541'},
{lat: '-1.467384', lng: '-48.447505'},
{lat: '-1.467383', lng: '-48.447470'},
{lat: '-1.467385', lng: '-48.447439'},
{lat: '-1.467383', lng: '-48.447401'},
{lat: '-1.467387', lng: '-48.447359'},
{lat: '-1.467385', lng: '-48.447332'},
{lat: '-1.467388', lng: '-48.447300'},
{lat: '-1.467385', lng: '-48.447276'},
{lat: '-1.467382', lng: '-48.447240'},
{lat: '-1.467379', lng: '-48.447216'},
{lat: '-1.467374', lng: '-48.447187'},
{lat: '-1.467370', lng: '-48.447163'},
{lat: '-1.467363', lng: '-48.447138'},
{lat: '-1.467355', lng: '-48.447115'},
{lat: '-1.467337', lng: '-48.447085'},
{lat: '-1.467320', lng: '-48.447053'},
{lat: '-1.467308', lng: '-48.447035'},
{lat: '-1.467286', lng: '-48.447007'},
{lat: '-1.467263', lng: '-48.446991'},
{lat: '-1.467236', lng: '-48.446976'},
{lat: '-1.467229', lng: '-48.446946'},
{lat: '-1.467218', lng: '-48.446912'},
{lat: '-1.467208', lng: '-48.446888'},
{lat: '-1.46719483', lng: '-48.44684894'},
{lat: '-1.46718167', lng: '-48.44680989'},
{lat: '-1.46716850', lng: '-48.44677083'},
{lat: '-1.46715533', lng: '-48.44673178'},
{lat: '-1.46714217', lng: '-48.44669272'},
{lat: '-1.46712900', lng: '-48.44665367'},
{lat: '-1.46711583', lng: '-48.44661461'},
{lat: '-1.46710267', lng: '-48.44657556'},
{lat: '-1.46708950', lng: '-48.44653650'},
{lat: '-1.46707633', lng: '-48.44649744'},
{lat: '-1.46706317', lng: '-48.44645839'},
{lat: '-1.46705000', lng: '-48.44641933'},
{lat: '-1.46703683', lng: '-48.44638028'},
{lat: '-1.46702367', lng: '-48.44634122'},
{lat: '-1.46701050', lng: '-48.44630217'},
{lat: '-1.46699733', lng: '-48.44626311'},
{lat: '-1.46698417', lng: '-48.44622406'},
{lat: '-1.466971', lng: '-48.446185'},
{lat: '-1.46695356', lng: '-48.44614389'},
{lat: '-1.46693611', lng: '-48.44610278'},
{lat: '-1.46691867', lng: '-48.44606167'},
{lat: '-1.46690122', lng: '-48.44602056'},
{lat: '-1.46688378', lng: '-48.44597944'},
{lat: '-1.46686633', lng: '-48.44593833'},
{lat: '-1.46684889', lng: '-48.44589722'},
{lat: '-1.46683144', lng: '-48.44585611'},
{lat: '-1.466814', lng: '-48.445815'},
{lat: '-1.46685274', lng: '-48.44577321'},
{lat: '-1.46689147', lng: '-48.44573142'},
{lat: '-1.46693021', lng: '-48.44568963'},
{lat: '-1.46696895', lng: '-48.44564784'},
{lat: '-1.46700768', lng: '-48.44560605'},
{lat: '-1.46704642', lng: '-48.44556426'},
{lat: '-1.46708516', lng: '-48.44552247'},
{lat: '-1.46712389', lng: '-48.44548068'},
{lat: '-1.46716263', lng: '-48.44543889'},
{lat: '-1.46720137', lng: '-48.44539711'},
{lat: '-1.46724011', lng: '-48.44535532'},
{lat: '-1.46727884', lng: '-48.44531353'},
{lat: '-1.46731758', lng: '-48.44527174'},
{lat: '-1.46735632', lng: '-48.44522995'},
{lat: '-1.46739505', lng: '-48.44518816'},
{lat: '-1.46743379', lng: '-48.44514637'},
{lat: '-1.46747253', lng: '-48.44510458'},
{lat: '-1.46751126', lng: '-48.44506279'},
{lat: '-1.467550', lng: '-48.445021'},
{lat: '-1.467546', lng: '-48.445005'},
{lat: '-1.467537', lng: '-48.444985'},
{lat: '-1.467527', lng: '-48.444960'},
{lat: '-1.467510', lng: '-48.444939'},
{lat: '-1.467481', lng: '-48.444917'},
{lat: '-1.467443', lng: '-48.444903'},
{lat: '-1.46740369', lng: '-48.44489081'},
{lat: '-1.46736438', lng: '-48.44487862'},
{lat: '-1.46732506', lng: '-48.44486644'},
{lat: '-1.46728575', lng: '-48.44485425'},
{lat: '-1.46724644', lng: '-48.44484206'},
{lat: '-1.46720713', lng: '-48.44482987'},
{lat: '-1.46716781', lng: '-48.44481769'},
{lat: '-1.46712850', lng: '-48.44480550'},
{lat: '-1.46708919', lng: '-48.44479331'},
{lat: '-1.46704988', lng: '-48.44478112'},
{lat: '-1.46701056', lng: '-48.44476894'},
{lat: '-1.46697125', lng: '-48.44475675'},
{lat: '-1.46693194', lng: '-48.44474456'},
{lat: '-1.46689263', lng: '-48.44473238'},
{lat: '-1.46685331', lng: '-48.44472019'},
{lat: '-1.466814', lng: '-48.444708'},
{lat: '-1.46677944', lng: '-48.44470300'},
{lat: '-1.46674489', lng: '-48.44469800'},
{lat: '-1.46671033', lng: '-48.44469300'},
{lat: '-1.46667578', lng: '-48.44468800'},
{lat: '-1.46664122', lng: '-48.44468300'},
{lat: '-1.46660667', lng: '-48.44467800'},
{lat: '-1.46657211', lng: '-48.44467300'},
{lat: '-1.46653756', lng: '-48.44466800'},
{lat: '-1.466503', lng: '-48.444663'},
{lat: '-1.46645660', lng: '-48.44466190'},
{lat: '-1.46641020', lng: '-48.44466080'},
{lat: '-1.46636380', lng: '-48.44465970'},
{lat: '-1.46631740', lng: '-48.44465860'},
{lat: '-1.46627100', lng: '-48.44465750'},
{lat: '-1.46622460', lng: '-48.44465640'},
{lat: '-1.46617820', lng: '-48.44465530'},
{lat: '-1.46613180', lng: '-48.44465420'},
{lat: '-1.46608540', lng: '-48.44465310'},
{lat: '-1.466039', lng: '-48.444652'},
{lat: '-1.46599571', lng: '-48.44465386'},
{lat: '-1.46595243', lng: '-48.44465571'},
{lat: '-1.46590914', lng: '-48.44465757'},
{lat: '-1.46586586', lng: '-48.44465943'},
{lat: '-1.46582257', lng: '-48.44466129'},
{lat: '-1.46577929', lng: '-48.44466314'},
{lat: '-1.465736', lng: '-48.444665'},
{lat: '-1.46567967', lng: '-48.44467317'},
{lat: '-1.46562333', lng: '-48.44468133'},
{lat: '-1.46556700', lng: '-48.44468950'},
{lat: '-1.46551067', lng: '-48.44469767'},
{lat: '-1.46545433', lng: '-48.44470583'},
{lat: '-1.465398', lng: '-48.444714'},
{lat: '-1.46534582', lng: '-48.44471882'},
{lat: '-1.46529364', lng: '-48.44472364'},
{lat: '-1.46524145', lng: '-48.44472845'},
{lat: '-1.46518927', lng: '-48.44473327'},
{lat: '-1.46513709', lng: '-48.44473809'},
{lat: '-1.46508491', lng: '-48.44474291'},
{lat: '-1.46503273', lng: '-48.44474773'},
{lat: '-1.46498055', lng: '-48.44475255'},
{lat: '-1.46492836', lng: '-48.44475736'},
{lat: '-1.46487618', lng: '-48.44476218'},
{lat: '-1.464824', lng: '-48.444767'},
{lat: '-1.46477630', lng: '-48.44476600'},
{lat: '-1.46472860', lng: '-48.44476500'},
{lat: '-1.46468090', lng: '-48.44476400'},
{lat: '-1.46463320', lng: '-48.44476300'},
{lat: '-1.46458550', lng: '-48.44476200'},
{lat: '-1.46453780', lng: '-48.44476100'},
{lat: '-1.46449010', lng: '-48.44476000'},
{lat: '-1.46444240', lng: '-48.44475900'},
{lat: '-1.46439470', lng: '-48.44475800'},
{lat: '-1.464347', lng: '-48.444757'},
{lat: '-1.46429138', lng: '-48.44474963'},
{lat: '-1.46423575', lng: '-48.44474225'},
{lat: '-1.46418012', lng: '-48.44473488'},
{lat: '-1.46412450', lng: '-48.44472750'},
{lat: '-1.46406888', lng: '-48.44472013'},
{lat: '-1.46401325', lng: '-48.44471275'},
{lat: '-1.46395762', lng: '-48.44470538'},
{lat: '-1.463902', lng: '-48.444698'},
{lat: '-1.46385737', lng: '-48.44468625'},
{lat: '-1.46381275', lng: '-48.44467450'},
{lat: '-1.46376813', lng: '-48.44466275'},
{lat: '-1.46372350', lng: '-48.44465100'},
{lat: '-1.46367887', lng: '-48.44463925'},
{lat: '-1.46363425', lng: '-48.44462750'},
{lat: '-1.46358963', lng: '-48.44461575'},
{lat: '-1.463545', lng: '-48.444604'},
{lat: '-1.463545', lng: '-48.444554'},
{lat: '-1.463533', lng: '-48.444504'},
{lat: '-1.463504', lng: '-48.444470'},
{lat: '-1.463445', lng: '-48.444440'},
{lat: '-1.463390', lng: '-48.444433'},
{lat: '-1.463332', lng: '-48.444456'},
{lat: '-1.463304', lng: '-48.444478'},
{lat: '-1.46326700', lng: '-48.44446325'},
{lat: '-1.46323000', lng: '-48.44444850'},
{lat: '-1.46319300', lng: '-48.44443375'},
{lat: '-1.46315600', lng: '-48.44441900'},
{lat: '-1.46311900', lng: '-48.44440425'},
{lat: '-1.46308200', lng: '-48.44438950'},
{lat: '-1.46304500', lng: '-48.44437475'},
{lat: '-1.463008', lng: '-48.444360'},
{lat: '-1.46296737', lng: '-48.44434113'},
{lat: '-1.46292675', lng: '-48.44432225'},
{lat: '-1.46288612', lng: '-48.44430338'},
{lat: '-1.46284550', lng: '-48.44428450'},
{lat: '-1.46280488', lng: '-48.44426562'},
{lat: '-1.46276425', lng: '-48.44424675'},
{lat: '-1.46272362', lng: '-48.44422788'},
{lat: '-1.462683', lng: '-48.444209'},
{lat: '-1.46263737', lng: '-48.44418125'},
{lat: '-1.46259175', lng: '-48.44415350'},
{lat: '-1.46254613', lng: '-48.44412575'},
{lat: '-1.46250050', lng: '-48.44409800'},
{lat: '-1.46245487', lng: '-48.44407025'},
{lat: '-1.46240925', lng: '-48.44404250'},
{lat: '-1.46236363', lng: '-48.44401475'},
{lat: '-1.462318', lng: '-48.443987'},
{lat: '-1.46228588', lng: '-48.44396300'},
{lat: '-1.46225375', lng: '-48.44393900'},
{lat: '-1.46222162', lng: '-48.44391500'},
{lat: '-1.46218950', lng: '-48.44389100'},
{lat: '-1.46215738', lng: '-48.44386700'},
{lat: '-1.46212525', lng: '-48.44384300'},
{lat: '-1.46209312', lng: '-48.44381900'},
{lat: '-1.462061', lng: '-48.443795'},
{lat: '-1.46202150', lng: '-48.44376075'},
{lat: '-1.46198200', lng: '-48.44372650'},
{lat: '-1.46194250', lng: '-48.44369225'},
{lat: '-1.46190300', lng: '-48.44365800'},
{lat: '-1.46186350', lng: '-48.44362375'},
{lat: '-1.46182400', lng: '-48.44358950'},
{lat: '-1.46178450', lng: '-48.44355525'},
{lat: '-1.461745', lng: '-48.443521'},
{lat: '-1.46171162', lng: '-48.44348288'},
{lat: '-1.46167825', lng: '-48.44344475'},
{lat: '-1.46164488', lng: '-48.44340662'},
{lat: '-1.46161150', lng: '-48.44336850'},
{lat: '-1.46157812', lng: '-48.44333038'},
{lat: '-1.46154475', lng: '-48.44329225'},
{lat: '-1.46151138', lng: '-48.44325412'},
{lat: '-1.461478', lng: '-48.443216'},
{lat: '-1.46141978', lng: '-48.44314278'},
{lat: '-1.46136156', lng: '-48.44306956'},
{lat: '-1.46130333', lng: '-48.44299633'},
{lat: '-1.46124511', lng: '-48.44292311'},
{lat: '-1.46118689', lng: '-48.44284989'},
{lat: '-1.46112867', lng: '-48.44277667'},
{lat: '-1.46107044', lng: '-48.44270344'},
{lat: '-1.46101222', lng: '-48.44263022'},
{lat: '-1.460954', lng: '-48.442557'},
{lat: '-1.46102700', lng: '-48.44250356'},
{lat: '-1.46110000', lng: '-48.44245011'},
{lat: '-1.46117300', lng: '-48.44239667'},
{lat: '-1.46124600', lng: '-48.44234322'},
{lat: '-1.46131900', lng: '-48.44228978'},
{lat: '-1.46139200', lng: '-48.44223633'},
{lat: '-1.46146500', lng: '-48.44218289'},
{lat: '-1.46153800', lng: '-48.44212944'},
{lat: '-1.461611', lng: '-48.442076'},
{lat: '-1.46170689', lng: '-48.44199789'},
{lat: '-1.46180278', lng: '-48.44191978'},
{lat: '-1.46189867', lng: '-48.44184167'},
{lat: '-1.46199456', lng: '-48.44176356'},
{lat: '-1.46209044', lng: '-48.44168544'},
{lat: '-1.46218633', lng: '-48.44160733'},
{lat: '-1.46228222', lng: '-48.44152922'},
{lat: '-1.46237811', lng: '-48.44145111'},
{lat: '-1.462474', lng: '-48.441373'},
{lat: '-1.462464', lng: '-48.441365'},
{lat: '-1.461606', lng: '-48.442060'},
{lat: '-1.460868', lng: '-48.442604'},
{lat: '-1.46094209', lng: '-48.44269355'},
{lat: '-1.46101618', lng: '-48.44278309'},
{lat: '-1.46109027', lng: '-48.44287264'},
{lat: '-1.46116436', lng: '-48.44296218'},
{lat: '-1.46123845', lng: '-48.44305173'},
{lat: '-1.46131255', lng: '-48.44314127'},
{lat: '-1.46138664', lng: '-48.44323082'},
{lat: '-1.46146073', lng: '-48.44332036'},
{lat: '-1.46153482', lng: '-48.44340991'},
{lat: '-1.46160891', lng: '-48.44349945'},
{lat: '-1.461683', lng: '-48.443589'},
{lat: '-1.46175614', lng: '-48.44364914'},
{lat: '-1.46182929', lng: '-48.44370929'},
{lat: '-1.46190243', lng: '-48.44376943'},
{lat: '-1.46197557', lng: '-48.44382957'},
{lat: '-1.46204871', lng: '-48.44388971'},
{lat: '-1.46212186', lng: '-48.44394986'},
{lat: '-1.462195', lng: '-48.444010'},
{lat: '-1.46227586', lng: '-48.44405986'},
{lat: '-1.46235671', lng: '-48.44410971'},
{lat: '-1.46243757', lng: '-48.44415957'},
{lat: '-1.46251843', lng: '-48.44420943'},
{lat: '-1.46259929', lng: '-48.44425929'},
{lat: '-1.46268014', lng: '-48.44430914'},
{lat: '-1.462761', lng: '-48.444359'},
{lat: '-1.46283229', lng: '-48.44439000'},
{lat: '-1.46290357', lng: '-48.44442100'},
{lat: '-1.46297486', lng: '-48.44445200'},
{lat: '-1.46304614', lng: '-48.44448300'},
{lat: '-1.46311743', lng: '-48.44451400'},
{lat: '-1.46318871', lng: '-48.44454500'},
{lat: '-1.463260', lng: '-48.444576'},
{lat: '-1.463287', lng: '-48.444632'},
{lat: '-1.463319', lng: '-48.444675'},
{lat: '-1.463381', lng: '-48.444697'},
{lat: '-1.463442', lng: '-48.444697'},
{lat: '-1.463515', lng: '-48.444656'},
{lat: '-1.463541', lng: '-48.444619'},
{lat: '-1.463910', lng: '-48.444710'},
{lat: '-1.464351', lng: '-48.444765'},
{lat: '-1.464850', lng: '-48.444778'},
{lat: '-1.465257', lng: '-48.444735'},
{lat: '-1.465724', lng: '-48.444676'},
{lat: '-1.466507', lng: '-48.444671'},
{lat: '-1.466818', lng: '-48.444716'},
{lat: '-1.467475', lng: '-48.444925'},
{lat: '-1.467518', lng: '-48.444963'},
{lat: '-1.467534', lng: '-48.445022'},
{lat: '-1.466812', lng: '-48.445805'},
{lat: '-1.466973', lng: '-48.446213'},
{lat: '-1.467228', lng: '-48.446988'},
{lat: '-1.467271', lng: '-48.447012'},
{lat: '-1.467354', lng: '-48.447138'},
{lat: '-1.467378', lng: '-48.447286'},
{lat: '-1.467367', lng: '-48.447541'},
{lat: '-1.467492', lng: '-48.447584'},
{lat: '-1.467534', lng: '-48.447616'},
{lat: '-1.467573', lng: '-48.447655'},
{lat: '-1.467637', lng: '-48.447747'},
{lat: '-1.467700', lng: '-48.447883'},
{lat: '-1.467810', lng: '-48.448037'},
{lat: '-1.467896', lng: '-48.448123'},
{lat: '-1.468011', lng: '-48.448184'},
{lat: '-1.468132', lng: '-48.448222'},
{lat: '-1.468314', lng: '-48.448241'},
{lat: '-1.469513', lng: '-48.448096'},
{lat: '-1.469769', lng: '-48.448006'},
{lat: '-1.46981162', lng: '-48.44797212'},
{lat: '-1.46985425', lng: '-48.44793825'},
{lat: '-1.46989687', lng: '-48.44790438'},
{lat: '-1.46993950', lng: '-48.44787050'},
{lat: '-1.46998213', lng: '-48.44783663'},
{lat: '-1.47002475', lng: '-48.44780275'},
{lat: '-1.47006737', lng: '-48.44776888'},
{lat: '-1.470110', lng: '-48.447735'},
{lat: '-1.470539', lng: '-48.447882'},
{lat: '-1.471189', lng: '-48.447998'},
{lat: '-1.471719', lng: '-48.448021'},
{lat: '-1.472279', lng: '-48.447993'},
{lat: '-1.472864', lng: '-48.447930'},
{lat: '-1.472995', lng: '-48.448180'},
{lat: '-1.473134', lng: '-48.448521'},
{lat: '-1.473073', lng: '-48.448633'},
{lat: '-1.473002', lng: '-48.448708'},
{lat: '-1.472920', lng: '-48.448770'},
{lat: '-1.472401', lng: '-48.448920'},
{lat: '-1.472343', lng: '-48.448942'},
{lat: '-1.472107', lng: '-48.449087'},
{lat: '-1.471879', lng: '-48.449258'},
{lat: '-1.471656', lng: '-48.449459'},
{lat: '-1.471617', lng: '-48.449526'},
{lat: '-1.471586', lng: '-48.449649'},
{lat: '-1.471569', lng: '-48.449804'},
{lat: '-1.471571', lng: '-48.449999'},
{lat: '-1.471615', lng: '-48.450214'},
{lat: '-1.471666', lng: '-48.450334'},
{lat: '-1.471809', lng: '-48.450503'},
{lat: '-1.47185200', lng: '-48.45053556'},
{lat: '-1.47189500', lng: '-48.45056811'},
{lat: '-1.47193800', lng: '-48.45060067'},
{lat: '-1.47198100', lng: '-48.45063322'},
{lat: '-1.47202400', lng: '-48.45066578'},
{lat: '-1.47206700', lng: '-48.45069833'},
{lat: '-1.47211000', lng: '-48.45073089'},
{lat: '-1.47215300', lng: '-48.45076344'},
{lat: '-1.472196', lng: '-48.450796'},
{lat: '-1.47223044', lng: '-48.45082389'},
{lat: '-1.47226489', lng: '-48.45085178'},
{lat: '-1.47229933', lng: '-48.45087967'},
{lat: '-1.47233378', lng: '-48.45090756'},
{lat: '-1.47236822', lng: '-48.45093544'},
{lat: '-1.47240267', lng: '-48.45096333'},
{lat: '-1.47243711', lng: '-48.45099122'},
{lat: '-1.47247156', lng: '-48.45101911'},
{lat: '-1.472506', lng: '-48.451047'},
{lat: '-1.472625', lng: '-48.451177'},
{lat: '-1.472857', lng: '-48.451525'},
{lat: '-1.472964', lng: '-48.451709'},
{lat: '-1.473057', lng: '-48.451945'},
{lat: '-1.473140', lng: '-48.452226'},
{lat: '-1.473256', lng: '-48.452517'},
{lat: '-1.473306', lng: '-48.452732'},
{lat: '-1.473324', lng: '-48.452881'},
{lat: '-1.473331', lng: '-48.453295'},
{lat: '-1.473342', lng: '-48.453825'},
{lat: '-1.473367', lng: '-48.454113'},
{lat: '-1.473389', lng: '-48.454235'},
{lat: '-1.473409', lng: '-48.454303'},
{lat: '-1.473463', lng: '-48.454404'},
{lat: '-1.473500', lng: '-48.454446'},
{lat: '-1.473571', lng: '-48.454525'},
{lat: '-1.473647', lng: '-48.454576'},
{lat: '-1.473715', lng: '-48.454616'},
{lat: '-1.473777', lng: '-48.454632'},
{lat: '-1.473869', lng: '-48.454624'},
{lat: '-1.474180', lng: '-48.454538'},
{lat: '-1.474245', lng: '-48.454521'},
{lat: '-1.474625', lng: '-48.454378'},
{lat: '-1.474900', lng: '-48.454258'},
{lat: '-1.475268', lng: '-48.454080'},
{lat: '-1.475521', lng: '-48.453942'},
{lat: '-1.475787', lng: '-48.453800'},
{lat: '-1.475924', lng: '-48.453986'},
{lat: '-1.476048', lng: '-48.454183'},
{lat: '-1.476322', lng: '-48.454563'},
{lat: '-1.476458', lng: '-48.454733'},
{lat: '-1.476539', lng: '-48.454873'},
{lat: '-1.476650', lng: '-48.455119'},
{lat: '-1.476742', lng: '-48.455299'},
{lat: '-1.476811', lng: '-48.455413'},
{lat: '-1.476887', lng: '-48.455536'},
{lat: '-1.47679954', lng: '-48.45554685'},
{lat: '-1.47671208', lng: '-48.45555769'},
{lat: '-1.47662462', lng: '-48.45556854'},
{lat: '-1.47653715', lng: '-48.45557938'},
{lat: '-1.47644969', lng: '-48.45559023'},
{lat: '-1.47636223', lng: '-48.45560108'},
{lat: '-1.47627477', lng: '-48.45561192'},
{lat: '-1.47618731', lng: '-48.45562277'},
{lat: '-1.47609985', lng: '-48.45563362'},
{lat: '-1.47601238', lng: '-48.45564446'},
{lat: '-1.47592492', lng: '-48.45565531'},
{lat: '-1.47583746', lng: '-48.45566615'},
{lat: '-1.47575000', lng: '-48.45567700'},
{lat: '-1.47566254', lng: '-48.45568785'},
{lat: '-1.47557508', lng: '-48.45569869'},
{lat: '-1.47548762', lng: '-48.45570954'},
{lat: '-1.47540015', lng: '-48.45572038'},
{lat: '-1.47531269', lng: '-48.45573123'},
{lat: '-1.47522523', lng: '-48.45574208'},
{lat: '-1.47513777', lng: '-48.45575292'},
{lat: '-1.47505031', lng: '-48.45576377'},
{lat: '-1.47496285', lng: '-48.45577462'},
{lat: '-1.47487538', lng: '-48.45578546'},
{lat: '-1.47478792', lng: '-48.45579631'},
{lat: '-1.47470046', lng: '-48.45580715'},
{lat: '-1.474613', lng: '-48.455818'},
{lat: '-1.47454016', lng: '-48.45582496'},
{lat: '-1.47446732', lng: '-48.45583192'},
{lat: '-1.47439448', lng: '-48.45583888'},
{lat: '-1.47432164', lng: '-48.45584584'},
{lat: '-1.47424880', lng: '-48.45585280'},
{lat: '-1.47417596', lng: '-48.45585976'},
{lat: '-1.47410312', lng: '-48.45586672'},
{lat: '-1.47403028', lng: '-48.45587368'},
{lat: '-1.47395744', lng: '-48.45588064'},
{lat: '-1.47388460', lng: '-48.45588760'},
{lat: '-1.47381176', lng: '-48.45589456'},
{lat: '-1.47373892', lng: '-48.45590152'},
{lat: '-1.47366608', lng: '-48.45590848'},
{lat: '-1.47359324', lng: '-48.45591544'},
{lat: '-1.47352040', lng: '-48.45592240'},
{lat: '-1.47344756', lng: '-48.45592936'},
{lat: '-1.47337472', lng: '-48.45593632'},
{lat: '-1.47330188', lng: '-48.45594328'},
{lat: '-1.47322904', lng: '-48.45595024'},
{lat: '-1.47315620', lng: '-48.45595720'},
{lat: '-1.47308336', lng: '-48.45596416'},
{lat: '-1.47301052', lng: '-48.45597112'},
{lat: '-1.47293768', lng: '-48.45597808'},
{lat: '-1.47286484', lng: '-48.45598504'},
{lat: '-1.472792', lng: '-48.455992'},
{lat: '-1.47277087', lng: '-48.45606365'},
{lat: '-1.47274974', lng: '-48.45613530'},
{lat: '-1.47272861', lng: '-48.45620696'},
{lat: '-1.47270748', lng: '-48.45627861'},
{lat: '-1.47268635', lng: '-48.45635026'},
{lat: '-1.47266522', lng: '-48.45642191'},
{lat: '-1.47264409', lng: '-48.45649357'},
{lat: '-1.47262296', lng: '-48.45656522'},
{lat: '-1.47260183', lng: '-48.45663687'},
{lat: '-1.47258070', lng: '-48.45670852'},
{lat: '-1.47255957', lng: '-48.45678017'},
{lat: '-1.47253843', lng: '-48.45685183'},
{lat: '-1.47251730', lng: '-48.45692348'},
{lat: '-1.47249617', lng: '-48.45699513'},
{lat: '-1.47247504', lng: '-48.45706678'},
{lat: '-1.47245391', lng: '-48.45713843'},
{lat: '-1.47243278', lng: '-48.45721009'},
{lat: '-1.47241165', lng: '-48.45728174'},
{lat: '-1.47239052', lng: '-48.45735339'},
{lat: '-1.47236939', lng: '-48.45742504'},
{lat: '-1.47234826', lng: '-48.45749670'},
{lat: '-1.47232713', lng: '-48.45756835'},
{lat: '-1.472306', lng: '-48.457640'},
{lat: '-1.47229050', lng: '-48.45769625'},
{lat: '-1.47227500', lng: '-48.45775250'},
{lat: '-1.47225950', lng: '-48.45780875'},
{lat: '-1.47224400', lng: '-48.45786500'},
{lat: '-1.47222850', lng: '-48.45792125'},
{lat: '-1.47221300', lng: '-48.45797750'},
{lat: '-1.47219750', lng: '-48.45803375'},
{lat: '-1.472182', lng: '-48.458090'},
{lat: '-1.472178', lng: '-48.458142'},
{lat: '-1.472184', lng: '-48.458192'},
{lat: '-1.472184', lng: '-48.458238'},
{lat: '-1.472205', lng: '-48.458284'},
{lat: '-1.472217', lng: '-48.458332'},
{lat: '-1.472240', lng: '-48.458362'},
{lat: '-1.472274', lng: '-48.458406'},
{lat: '-1.472310', lng: '-48.458442'},
{lat: '-1.472359', lng: '-48.458475'},
{lat: '-1.472424', lng: '-48.458499'},
{lat: '-1.472480', lng: '-48.458512'},
{lat: '-1.472546', lng: '-48.458527'},
{lat: '-1.472606', lng: '-48.458539'},
{lat: '-1.472680', lng: '-48.458551'},
{lat: '-1.472743', lng: '-48.458567'},
{lat: '-1.472794', lng: '-48.458572'},
{lat: '-1.472838', lng: '-48.458580'},
{lat: '-1.472896', lng: '-48.458593'},
{lat: '-1.472969', lng: '-48.458598'},
{lat: '-1.473044', lng: '-48.458609'},
{lat: '-1.473106', lng: '-48.458618'},
{lat: '-1.473207', lng: '-48.458622'},
{lat: '-1.473284', lng: '-48.458631'},
{lat: '-1.473347', lng: '-48.458639'},
{lat: '-1.473419', lng: '-48.458639'},
{lat: '-1.473490', lng: '-48.458638'}
]


