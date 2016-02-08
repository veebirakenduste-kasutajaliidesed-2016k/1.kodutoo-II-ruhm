<?php
	require("header.php");
	error_reporting(E_ERROR | E_PARSE); // Peaks tegema isSet()
	
	include("config.php");
	session_start();

	if (!(isset($_SESSION['id']) && $_SESSION['id'] != '')) {
		header ("Location: login.php");
	}

	// Initialization
	$photo_upload_fields = "";
	$counter = 1;

	// Default number of fields
	$number_of_fields = 1; 

	if($_GET['number_of_fields'])
	$number_of_fields = (int)($_GET['number_of_fields']);

	// Category List

	$result = mysql_query( "SELECT category_id,category_name FROM gallery_category" );
	while( $row = mysql_fetch_array( $result ) )
	{
$photo_category_list .=<<<__HTML_END
	<option value="$row[0]">$row[1]</option>\n
__HTML_END;
	}
	mysql_free_result( $result );	

// Photo Uploading fields
	while( $counter <= $number_of_fields)
	{
$photo_upload_fields .=<<<__HTML_END
<div class="bs-example">
    <ul class="nav nav-tabs">
        <li><a href="home.php">Home</a></li>
        <li class="active" ><a href="preupload.php">Upload</a></li>
        <li><a href="viewgallery.php">Gallery</a></li>
	<li><a href="settings.php">Settings</a></li>
    </ul>
</div>
<tr>
	<td>
	     Photo {$counter}: 
		 <input name=' photo_filename[]' type='file' />
	</td>
</tr>
<tr>
	<td>
	    <textarea name='photo_caption[]' cols='30' rows='1' placeholder="Caption"></textarea>
	</td>
</tr>
__HTML_END;
	$counter++;
	}

// Final Output
echo <<<__HTML_END
<form enctype='multipart/form-data' action='upload.php' method='post' name='upload_form'>
<table align='center' style='width: 90%;'>
<tr>
	<td>
		Select category
		<select name='category'>
			".$photo_category_list."
		</select>
	</td>
</tr>
<tr>
	<td>
		<p>&nbsp;</p>
	</td>
</tr>

$photo_upload_fields

<tr>
	<td>
		<input type='submit' name='submit' value='Upload' />
	</td>
</tr>
</table>
</form>
</body>
</html>
__HTML_END;
?>
