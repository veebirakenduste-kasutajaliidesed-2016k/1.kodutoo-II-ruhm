<?php
//error_reporting(E_ERROR);
//error_reporting(E_ALL);
$DOM = new DOMDocument();
if($DOM->load('teade1.xml')){
	if($DOM->schemaValidate("KolmasHarjutus.xsd")){
		header("Content-type: text/html");
		echo $DOM->saveXML();
	}else{
		echo "Ei vasta skeemile!";
	}
}else{
	echo "Pole XML dokument!";
}	
?>