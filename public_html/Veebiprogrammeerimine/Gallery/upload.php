<?php
	require("header.php");
	include("config.php");
	error_reporting(E_ERROR | E_PARSE);

	// Initialization
	$result_final = "";
	$counter = 0;

	// List of known photo types
	$known_photo_types = array( 
						'image/pjpeg' => 'jpg',
						'image/jpeg' => 'jpg',
						'image/gif' => 'gif',
						'image/bmp' => 'bmp',
						'image/x-png' => 'png'
					);
	
	// GD Function List
	$gd_function_suffix = array( 
						'image/pjpeg' => 'JPEG',
						'image/jpeg' => 'JPEG',
						'image/gif' => 'GIF',
						'image/bmp' => 'WBMP',
						'image/x-png' => 'PNG'
					);

	// Fetch the photo array sent by preupload.php
	$photos_uploaded = $_FILES['photo_filename'];

	// Fetch the photo caption array
	$photo_caption = $_POST['photo_caption'];

	while($counter <= count($photos_uploaded)){
		if($photos_uploaded['size'][$counter] > 0){
			if(!array_key_exists($photos_uploaded['type'][$counter], $known_photo_types))
			{
				$result_final .= "File ".($counter+1)." is not a photo";
			}
			else
			{
				mysql_query( "INSERT INTO gallery_photos(`photo_filename`, `photo_caption`, `photo_category`) VALUES('0', '".addslashes($photo_caption[$counter])."', '".addslashes($_POST['category'])."')" );
				$new_id = mysql_insert_id();
				$filetype = $photos_uploaded['type'][$counter];
				$extention = $known_photo_types[$filetype];
				$filename = $new_id.".".$extention;

				mysql_query( "UPDATE gallery_photos SET photo_filename='".addslashes($filename)."' WHERE photo_id='".addslashes($new_id)."'" );

				// Store the orignal file
				copy($photos_uploaded['tmp_name'][$counter], $images_dir."/".$filename);

				// Getting the thumbnail size
				$size = GetImageSize( $images_dir."/".$filename );
				if($size[0] > $size[1])
				{
					$thumbnail_width = 100;
					$thumbnail_height = (100 * $size[1] / $size[0]);
				}
				else
				{
					$thumbnail_width = (100 * $size[0] / $size[1]);
					$thumbnail_height = 100;
				}
			
				// Creating thumbnail with GD 1.x.x
				$function_suffix = $gd_function_suffix[$filetype];
				$function_to_read = "ImageCreateFrom".$function_suffix;
				$function_to_write = "Image".$function_suffix;

				// Read the source file
				$source_handle = $function_to_read ( $images_dir."/".$filename ); 
				
				if($source_handle)
				{
					// Creating an blank image for the thumbnail
				     	$destination_handle = ImageCreate ( $thumbnail_width, $thumbnail_height );
				
					// Resizing it
			      	ImageCopyResized( $destination_handle, $source_handle, 0, 0, 0, 0, $thumbnail_width, $thumbnail_height, $size[0], $size[1] );
				}

				// Thumbnaili salvestamine
				$function_to_write( $destination_handle, $images_dir."/tb_".$filename );
				ImageDestroy($destination_handle );
				//

				$result_final .= "<img src='".$images_dir. "/tb_".$filename."' /> File ".($counter+1)." Added";
			}
		}
	$counter++;
	}

	// Print Result
echo <<<__HTML_END

<html>
<head>
	<title>Photos uploaded</title>
</head>
<body>
	$result_final
</body>
</html>

__HTML_END;
?>
