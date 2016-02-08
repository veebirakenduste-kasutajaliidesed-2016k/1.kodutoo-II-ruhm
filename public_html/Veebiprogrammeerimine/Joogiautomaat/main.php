<?php 
	require_once("functions.php"); 
		
	if(isSet($_REQUEST["update"])){
		
		updateCup($_REQUEST["update"]);
		header("Location: main.php?notice=Uuendatud");
	}
	else{
		$cups = getAllCups();
	}
?>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Joogiautomaat</title>
</head>
<body>
	<?php 
		if(isSet($_REQUEST["notice"])){
			echo "<h2>".$_REQUEST["notice"]."</h2>";
		}
	?>
	<?php 
		?>
			<table>
				<tr>
					<?php foreach($columns as $column){
						echo "<th>$column</th>";
					} ?>
					<th></th>
				</tr>
				
				<?php 
					foreach($cups as $cup){
							echo "
							<tr>
								<td>$cup->ID</td>
								<td>$cup->JoogiNimi</td>
								<td>$cup->TopsePakis</td>
								<td>$cup->TopseJuua</td>
								<td>
									<a href='?update=$cup->ID'>Telli</a>
								</td>
							</tr>
							";			
					}
				?>
			</table>
		<?php
	?>
</body>
</html>