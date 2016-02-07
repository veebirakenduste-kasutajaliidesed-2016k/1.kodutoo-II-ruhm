<?php
	require("header.php");
	require_once("config.php");
	
	if(!isSet($_SESSION["id"])){
		header("Location: login.php");
	}
	
	if(isSet($_REQUEST["logout"])){
		session_destroy();
		header("Location: login.php");
	}

?> 
<!doctype html>
<html>
<div id="content">
<link rel="stylesheet" type="text/css" href="stiilid.css">
<head>
</head>
	<body>
	<div class="bs-example">
		<ul class="nav nav-tabs">
			<li><a href="home.php">Home</a></li>
			<li><a href="main.php">Generate</a></li>
			<li class="active" ><a href="overview.php">Characters</a></li>
		</ul>
	</div>
		<?php
			$con = mysql_connect("localhost", "if14", "ifikas2014", "if14_markuss") or die(mysql_error());
		    $query = "SELECT * FROM if14_markuss.profile"; 
			
			mysql_select_db("if14_markuss");
			 
		    $result = mysql_query($query) or die(mysql_error());

		    while($row = mysql_fetch_array($result))
				echo $row['name'], $row['charname'], $row['description'], $row['demeanour'], $row['speciality'];
			?><br>
			
		<ul>Lisada juurde pdf faili printimisvõimalus</ul>
		<ul>Skillide valimine ning andmebaasi salvestamine</ul>
		<ul>Relvad + gear</ul>
	</body>
</html>