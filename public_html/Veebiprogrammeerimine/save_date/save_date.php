<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Save date</title>
</head>
<body>
	<?php 
		
		// http://www.w3schools.com/php/php_date.asp
	
		if(isSet($_REQUEST["date"]) AND $_REQUEST["date"] !="" ){
		
			$date = $_REQUEST["date"];
			echo "<h2>Kuupäev</h2>";
			echo($date."<br>");
		}
		
		if(isSet($_REQUEST["time"]) AND $_REQUEST["time"] !=""){
		
			echo "<h2>Aeg</h2>";
			$time = $_REQUEST["time"];
			echo($time."<br>");
			
			echo "<h2>Kokku</h2>";
			
			// teeme Arrayd
			$date = explode("-", $date);
			$time = explode(":", $time);
			
			print_r($date);
			echo "<br />";
			print_r($time);
			echo "<br /><br />";
			
			// mktime(tunde, minuteid, sekundeid, kuu, kuupäev, aasta)
			$date_and_time = date("Y-m-d H:i:s", mktime($time[0], $time[1], 0, $date[1], $date[2], $date[0]));
			echo("<strong> Andmebaasi võib salvestada ".$date_and_time."</strong><br>");
					
		
		}
	?>
	<br>
	<form action="save_date.php">
	Kuupäev ja aeg<input name="date" type="date" value="<?=$_REQUEST["date"];?>" ><input name="time" value="<?=$_REQUEST["time"];?>" type="time">
	<input type="submit" value="Publish">
	</form>
	<br />
	<a href="http://www.w3schools.com/php/php_date.asp">Lisainfo w3schools</a>
</body>
</html>