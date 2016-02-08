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
			<li class="active" ><a href="home.php">Home</a></li>
			<li><a href="preupload.php">Upload</a></li>
			<li><a href="viewgallery.php">Gallery</a></li>
			<li><a href="settings.php">Settings</a></li>

		</ul>
	</div>
	<h2>Tere tulemast, <?=$_SESSION["username"];?> :)</h2>
	<p>See peaks olema selle veebilehestiku esileht. Kõik ei ole kaugeltki valmis, üritan seda lehekülge edasi arendada, et sellest saaks võimalikult korralik sait.</p>
	<ul>
		<li>PHPAdmin, Admineer </li></br>
		<li>Kujundust lisada, templates? BOOTSTRAP</li> </br>
		<li>Lisada juurde add/delete category, delete photo, move photo?</li> </br>
		<li>Üritada juurde lisada võimalus kommenteerida ja/või hinnata pilte</li> </br>
		<li>Sorteerimisvõimalus?</li>
	</ul>
	<a href="?logout" class="btn btn-default btn-sm" role="button">Log out</a>
</body>
</html>