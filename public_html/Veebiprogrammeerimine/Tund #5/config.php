<?php
	require_once("user.class.php");
	$mysqli = new mysqli("localhost", "if14", "ifikas2014", "if14_markuss");
	
	$user = new User($mysqli);
?>