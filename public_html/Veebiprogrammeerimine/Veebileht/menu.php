<div id="menu" >
	<h2>Menüü</h2>
	<ul>
		<?php 
			// Käime läbi kataloogi liinid (seal on txt failid)	
			$file_names = scandir("Elemendid");
			//print_r($file_names);
			
			// Iga leitud failinime kohta teeme midagi
			foreach($file_names as $file){
			
				// Tekitame Array failist nt: 726.txt on nüüd Array([0]=>"726" [1]=>"txt")
				$parts = explode(".",$file);
				if($parts[1] == "txt"){
					//echo($parts[0]);
					
					// Valmis link nt: <a href="line.php?nr=726">726</a>
					echo("<li><a href='line.php?Elemendid=".$parts[0]."'>".$parts[0]."</a></li>");
				}
			}
		?>
	</ul>
</div>











