<?php
//error_reporting(E_ERROR);
//error_reporting(E_ALL);
$DOM = new DOMDocument();
if($DOM->load('loetelu.xml')){
	 if($DOM->schemaValidate("skeem4.xsd")){
       header("Content-type: text/xml");
       echo $DOM->saveXML();
	 } else {
		 echo "Ei vasta skeemile";
	 }
} else {
	echo "Pole XML dokument";
}
?>