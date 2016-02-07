<?php 
	require_once("user.class.php");
	
	session_start();
	
	$mysqli = new mysqli("localhost", "if14", "ifikas2014", "if14_markuss");
	
	$user = new User($mysqli);
	
	$mysql_link = mysql_connect("localhost", "if14", "ifikas2014");   
    mysql_select_db("if14_markuss") or die("Could not select database");
	
	$images_dir = "photos";
	
	// Soovisin ühest lahti saada, kuid selle tõttu lõpetas osa asju töötamast, ei osanud sellega midagi ette võtta
?>
   