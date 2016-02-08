<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" dir="ltr" lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>RSS feed</title>
</head>
<link type="text/css" href="rss-style.css" rel="stylesheet">
	
<body bgcolor="#FFFFFF">
<fieldset class="rsslib">
<?php
	require_once("rsslib.php");
	$url = "https://www.readability.com/rseero/latest/feed";
	$RSS = new RSS($url);
	echo $RSS->Display(15);
?>
</fieldset>
</body>
</html>
