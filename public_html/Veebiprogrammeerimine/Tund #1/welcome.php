<?php 
	// we3schools.com Hea koht, kust õppida?
	// php.net
	
	$first_name = "Markus";	
	$last_name = "Suurekivi";
	
	$x=12;
	$y=47;
	$z=$x+$y;
	
	echo $z;	
	echo "</br>";
	echo $first_name." ".$last_name;
	echo "</br>";
	echo "Tere, $first_name!";
	
	// != Ei vordu
	// == Vordub
	?> 
	
<?php
	echo "</br>";
	$age = 20;
	
	if ($age<30){
		echo "Sa oled noor!";
	}else{ 
		echo "Saad sõita ainult täispiletiga!";
	}
?>

<?php
	echo "</br>";
	echo "Palju ";
	for ($age = 20; $age<30; $age++){
		echo "õnne! ($age) ";
	}

?>

<?php
	echo "</br>";
	echo date("H:i:s l z r");

?>