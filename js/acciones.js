// JavaScript Document
$(document).ready(function(e){
	//watchID se refiere a actual
	
	var watchID=null;
	document.addEventListener("deviceready",Disposititvo_Listo,false)
	
	//cuando esta listo el documento
	function Disposititvo_Listo(){
		Comienza();
	}
	
	//empieza la observacion de la aceleracion
	function Comienza(){
		
		//actualiza la aceleracion cada 2 segundos
		//
		var opciones={frequency:2000};
		
	watchID=navigator.accelerometer.watchAcceleration(Corrector,Error,opciones);
	navigator.geolocation.getCurrentPosition(Localiza,ErrorLocalizacion);
	}
	//detiene la obcervacion de la aceleracion
	
	function Detente(){
		if (watchID){
			navigator.accelerometer.clearWatch (watchID);
			watchID=null;
		}
	}
	//Correcto: Toma una captura de la aceleracion
	function Correcto(acceleration){
		var element=document.getElementById('acelerometro');
		
		element.innerHTML='Aceleracion en X:'+acceleration.X+'<br/>'+
		'Acelerasion en Y:'+acceleration.y+'<br/>'+
		'intervalo:'+acceratione.timestamp+'<br/>';
	}
	
	//ERROR: falla al obtener la aceleracion
	function Error(){
	alert('Error!');
	}
	//exito al localizar
	function Localiza(posicion){
		var element=document.getElementById('geolocalizacion');
		element.innerHTML='Latitud:'+posicion.coords.latitude+'<br/>'+
		'longitud:'+posicion.coords.longitude+'<br/>'+
		'Precision:'+posicion.coords.accuracy+'<br/>'+
		'Intervalo:'+posicion.timestamp+'<br/>';
	}
	//Error de geolocalizacion
	function Errorlocalizacion(error){
		alert('codigo:'+error.code+'/n'+
		'mensaje:'+error.message+'/n');
	}
});//document ready 

