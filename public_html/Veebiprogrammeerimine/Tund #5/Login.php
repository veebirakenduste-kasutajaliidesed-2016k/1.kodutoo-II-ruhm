<?php 
	require_once("config.php");
	if(isSet($_REQUEST["email"]) AND isSet($_REQUEST["name"])){
	
		$notice = $user->addUser( $_REQUEST["name"],
						$_REQUEST["phone"],
						$_REQUEST["email"],
						$_REQUEST["password"]);
		if($notice != ""){
			echo $notice;
		}else{
			echo "Kasutaja loodud";
		}
	}
	elseif(isSet($_REQUEST["email"]) AND isSet($_REQUEST["password"]) AND !isSet($_REQUEST["name"])){
	
		$profile = $user->loginUser($_REQUEST["email"], $_REQUEST["password"]);
		
		if(empty($profile)){
			echo "Vale kasutajanimi või parool!";
		} else {
			echo "Tere tulemast id:$profile->id nimi:$profile->name";
		}
	}
?>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Login</title>
</head>
<body>
	<h2>Login</h2>
	<form action="Login.php">
		<input type="email" name="email" placeholder="E-mail"></br>
		<input type="password" name="password" placeholder="Password"></br>
		<input type="submit" value="Login">
	</form>
	<a href="?create_user">Create user</a>
	<?php if(isSet($_GET['create_user'])): ?>
	<h2>Create user</h2>
	<form action="Login.php">
		<label for="name">Full name</label><br>
		<input type="text" name="name" id="name"><br>
		<label for="phone">Phone</label><br>
		<input type="number" name="phone" id="phone"><br>
		<label for="email">E-mail</label><br>
		<input type="email" name="email" id="email"><br>
		<label for="passworde">Password</label><br>
		<input type="password" name="password" id="password"><br>
		<input type="submit" value="Sign up">
	</form>
	<?php endif; ?>
</body>
</html>