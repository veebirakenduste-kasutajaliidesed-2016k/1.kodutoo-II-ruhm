<?php 
	require_once("functions.php"); 
	
	if(isSet($_REQUEST["JoogiNimi"])){
		
		addCup($_REQUEST["ID"], $_REQUEST["JoogiNimi"], $_REQUEST["TopsePakis"], $_REQUEST["TopseJuua"]);
		
		header("Location: notes.php?notice=Sisestatud");
	}
	elseif(isSet($_REQUEST["lisa"])){
		
		extraCup($_REQUEST["lisa"]);
		header("Location: notes.php?notice=Lisatud");
	}	
	elseif(isSet($_REQUEST["uuenda"])){
		
		updateCup($_REQUEST["uuenda"]);
		header("Location: notes.php?notice=Uuendatud");
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
	<a href="?add">Lisa jooke</a><br><br>	
	<?php 
		if(isSet($_REQUEST["add"])){
		?>
			<form action="notes.php">
				ID: <br><input type="text" name="ID"><br>
				Joogi nimi: <br><input type="text" name="JoogiNimi" id=""><br>
				Topse pakis: <br><input type="text" name="TopsePakis" id=""><br>
				Topse juua: <br><input type="text" name="TopseJuua" id=""><br>
				<br>
				<input type="submit" value="Lisa">
			</form>
		<?php
		}else{
			
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
									<a href='?lisa=$cup->ID'>Lisa</a>
									<a href='?uuenda=$cup->ID'>Telli</a>
								</td>
							</tr>
							";
						
					}
				?>
			</table>
		<?php
		}
	?>	
</body>
</html>