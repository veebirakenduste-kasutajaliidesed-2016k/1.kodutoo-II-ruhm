<?php require("header.php"); ?>
<div id="content" >
	<pre>
<?php
		
	if(isSet($_REQUEST['Elemendid'])){
	
		$Elemendid = $_REQUEST['Elemendid'];
		//echo "See on fail aadressirealt ".$Elemendid;
		
		// Saame kätte faili sisu vastavalt nimele
		$content = file_get_contents("Elemendid/".$Elemendid.".txt");
		
		if($content){
			echo $content;
		}else{
			echo "Andmed puuduvad!";
		}
	}else{
		echo "Korraldasid jama, well done!";
	}
?>
	</pre>
</div>
<?php require("footer.php"); ?>