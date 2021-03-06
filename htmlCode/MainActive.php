<!doctype html>

<html manifest="cache.manifest">
	
	CACHE MANIFEST
	
	/MainActive.php
	/Javascript.js
	/Main.php
	/Hilfe.php
	/loader.gif
	/footer.php
	
<html lang=de>

	<head>
		<link rel=stylesheet href=soundglider_style.css>
		<title>Soundglider</title>
		<meta charset=utf-8>
	</head>
	
	<body>
	<!-- Headline, evtl. nicht nötig durch Welcome.html -->
		<?php include('header.php'); ?>
		<?php include('navigation.php'); ?>
		<main>
			<div id=game align=center>
				<figure>
				<audio autoplay>
				<source src="Pillow_Fight_In_The_Afternoon.mp3" type="audio/mpeg">
				Your browser does not support the audio element.
				</audio>
				</figure>
				<!--
				=== Feedback Alpers, Dez 11 ===
				
				Bitte nutzen Sie hier den vollständigen <figure>-Container.
				
				=== Feedback Alpers, Ende ===
				-->
				
				<!--
				=== Feedback Alpers, Jan 20 ===
				
				Fast Perfekt. Achten Sie bitte immer darauf, das Innere eines Containers
				z.B. mit der Tabulatortaste einzurücken. So ist auf einen Blick erkennbar,
				wie die Container strukturiert sind.
				
				=== Feedback Alpers, Ende ===
				-->
				<!-- Änderungen von Daniel Ollhoff -->
				<button onclick="Start()">Start</button>

				<p id="init"></p>

					<script src="Javascript.js">
					<script src="Title.js">
					
						function Title(); 
    						
					</script>
				<!-- Änderungen Ende -->
			</div>
		</main>
		<?php include('footer.php'); ?>
		<!--
		=== Feedback Alpers, Dez 11 ===
		
		Solche Container, wie hier den <footer>, die Sie in mehreren HTML-Dokumenten einbinden wollen
		sollten Sie in eine eigene Datei auslagern und dann an allen Stellen importieren,
		wo Sie sie benötigen.
		
		Das reduziert die Fehleranfälligkeit und erleichtert Überarbeiten enorm.
		
		=== Feedback Alpers, Ende ===
		-->
		
	</body>

</html>
