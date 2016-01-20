<!doctype html>

<html lang=de>

	<head>
		<link rel=stylesheet href=soundglider_style.css>
		<title>Soundglider</title>
		<meta charset=utf-8>
	</head>
	
	<body>
		<?php include('header.php'); ?>
		<?php include('navigation.php'); ?>
		<main>
			<div id=startknopf align=center> 
				<button id=knopf type=button>
				<a href="MainActive.php"><img id=bild src=PlatzhalterStartKnopf.png></a>
				</button>
				<h6>
				Watch your Volume
				</h6>
			</div>
			<!-- An dieser Stelle sollte das Script folgen, bzw. auf der folgenden Seite-->
		</main>
		<?php include('footer.php'); ?>
		
	</body>

</html>

<!--
=== Feedback Alpers, Jan 20 ===

Hier haben Sie leider noch eine Kleinigkeit, an der viele Entwickler immer noch festhalten:
Ausrichtungen (align=center) gehören zum Design und sollten deshalb in CSS ausgelagert werden.
Über das id-Attribut haben Sie hier ja auch schon alles vorbereitet, um die Anbindung an CSS zu
realisieren.

So können Sie dann später zentral Designänderungen durchführen und können sich bei der Entwicklung
der HTML-Dokumente voll und ganz auf die Strukturierung konzentrieren.

=== Feedback Alpers, Ende ===
-->