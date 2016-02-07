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
	<div class="bs-example">
		<ul class="nav nav-tabs">
			<li><a href="home.php">Home</a></li>
			<li><a href="preupload.php">Upload</a></li>
			<li><a href="viewgallery.php">Gallery</a></li>
			<li class="active"><a href="settings.php">Settings</a></li>

		</ul>
	</div>
	<p>Sellel lehel peaks saama administraator erinevaid seadeid muuta, kuid hetkel on see veel kahjuks puudulik.</p>
	<ul>
		<li>Erinevate kategooriate ja piltide lisamine ning eemaldamine.</li> </br>
	</ul>
</body>
</html>