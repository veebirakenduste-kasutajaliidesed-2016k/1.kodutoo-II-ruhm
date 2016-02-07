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
			<li><a href="main.php">Generate</a></li>
			<li><a href="overview.php">Characters</a></li>
		</ul>
	</div>
	<h2>Welcome, <?=$_SESSION["username"];?>!</h2>
	<p>This should be the homepage of this site.</p>
	<a href="?logout" class="btn btn-default btn-sm" role="button">Log out</a>
</body>
</html>