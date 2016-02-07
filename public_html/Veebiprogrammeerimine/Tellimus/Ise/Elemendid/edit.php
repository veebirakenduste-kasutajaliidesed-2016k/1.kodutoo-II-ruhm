<?php 
	require_once("functions.php");
	
	if(isSet($_REQUEST["ID"])){
		$note = getOneNote($_REQUEST["ID"]);
		
	}elseif(isSet($_REQUEST["update_id"])){
		updateNote($_REQUEST["update_id"], $_REQUEST["new_toode"], $_REQUEST["new_eesnimi"], $_REQUEST["new_perekonnanimi"], $_REQUEST["new_aadress"], $_REQUEST["new_skuupaev"], $_REQUEST["new_email"], $_REQUEST["new_aktsepteeritud"], $_REQUEST["new_summa"], $_REQUEST["new_arvetasutud"]);
		
		header("Location: Sekretar.php");
	}
	
?>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Muutmine</title>
	</head>
<body>
	<h2>Andmete muutmine</h2>
	<form action="edit.php">
		<input type="text" name='update_id' hidden='hidden' value='<?php echo $note->ID;?>'>
		Toode: <br><input type="text" placeholder="Toode" name="new_toode" value='<?php echo $note->Toode;?>'><br>
		Eesnimi: <br><input type="text" name="new_eesnimi" value='<?php echo $note->Eesnimi;?>'><br>
		Perekonnanimi: <br><input type="text" name="new_perekonnanimi" value='<?php echo $note->Perekonnanimi;?>'><br>
		Aadress: <br><input type="text" name="new_aadress" value='<?php echo $note->Aadress;?>'><br>
		Soovitud kuupäev ning kellaaeg: <br><input type="text" name="new_skuupaev" value='<?php echo $note->Skuupaev;?>'><br>
		Email: <br><input type="text" name="new_email" value='<?php echo $note->Email;?>'><br>
		Aktsepteeritud? <br><input type="text" name="new_aktsepteeritud" value='<?php echo $note->Aktsepteeritud;?>'><br>
		Summa: <br><input type="text" name="new_summa" value='<?php echo $note->Summa;?>'><br>
		Arve tasutud? <br><input type="text" name="new_arvetasutud" value='<?php echo $note->ArveTasutud;?>'><br><br>
		<input type="submit" value="Save">
	</form>
</body>
</html>