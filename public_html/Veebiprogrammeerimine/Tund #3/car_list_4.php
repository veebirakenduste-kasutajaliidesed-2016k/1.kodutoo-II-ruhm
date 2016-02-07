<?php 
	// Loome ühenduse	(server, knimi, parool, andmebaasi nimi)
	$mysqli = new mysqli("localhost", "if14", "ifikas2014", "if14_markuss");
	
	//Sorteerimise muutuja (vaikimisi "regnr")
	$columns = array("regnr", "mark", "mudel", "aasta", "labisoit");
	$sort = "regnr";
	$direction ="";
	
	// Sorteerimise muutuja
	if(isSet($_REQUEST["sort"])){
		if(!in_array($_REQUEST["sort"], $columns)){
			die("Lubamatu tulbanimi");
		}
		
		$sort = $_REQUEST["sort"];
		
	}
	
	// kas on olemas muutuja, mis määrab DESC järjekorra
	if(isSet($_REQUEST["direction"])){
		if(!$_REQUEST["direction"] == "DESC"){
			die("Ei sobi");
		}
		
		$direction = $_REQUEST["direction"];
	
	}
	
	
	$stmt = $mysqli->prepare("SELECT regnr, mark, mudel, aasta, labisoit FROM autod ORDER BY $sort $direction"); 
	$stmt->bind_result($plate, $make, $model, $year, $mileage);
	$stmt->execute();
?>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Autode nimekiri</title>
</head>
<body>
	<h1>Autode loetelu</h1>
	
	<table border="2" >
		<tr>
			<?php 
				
				// Tekitada header $columns array-st (kasutades FOREACH)
				// $columns = array("regnr", "mark", "mudel", "aasta", "labisoit");
				// <th><a href="?sort=TULBA NIMI">TULBA NIMI</a></th>
				
				foreach($columns as $column){
					
					$direction = "";
					
					//üldjuhul ülevalt alla 
					$arrow ="&#9660;";
					
					
					
					if(isSet($_REQUEST['sort']) AND $column == $_REQUEST['sort'] AND !isSet($_REQUEST['direction'])){
					
						$direction = "&direction=DESC";
						
						// alt ülesse
						$arrow ="&#9650;";
						
					}
		
					echo "<th><a href='?sort=$column$direction'>$column $arrow</a></th>";
				}
			
			?>

		</tr>
		
	<?php 
	while($stmt->fetch()){
		
		echo "
		<tr>
			<td>$plate</td>
			<td>$make</td>
			<td>$model</td>
			<td>$year</td>
			<td>$mileage</td>
		</tr>
		";
				
	}
	?>
	</table>
</body>
</html>
<?php  
	// Paneme ühenduse kinni
	$mysqli->close();
?>