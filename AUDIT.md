# Performance matters

## Image optimalisaties
Het optimaliseren van afbeeldingen is gepaard gegaan met het omzetten van de huidige afbeeldingen naar een .webp extensie. De onderstaande screenshot was het startpunt.

Met behulp van gulp-webp zijn de afbeeldingen, in dit geval met een .jpg- en .png-extensie, omgezet naar een .webp-bestand.

### Bevindingen
De uitkomsten van de nieuwe test met .webp-bestanden toont aan dat webp-bestanden groter zijn dat de oorspronkelijke .png-bestanden. Als gevolg hiervan heb ik een uitzondering voor .png-bestanden gemaakt in de Gulp-file.

### Conclusie
Nieuwe situatie: .png-bestanden blijven behouden en .jpg-bestanden worden vervangen door .webp-bestanden (indien daar ondersteuning voor is).


### PageSpeed Insights
PageSpeed Insights levert de volgende cijfers op:
- Desktop: 68/100
- Mobile: 58/100

## Critical CSS
Met behulp van Critical CSS worden meerdere css-bestanden samengevoegd. De verwijzing naar deze CSS vindt onderaan de pagina plaats met een ‘defer’ attribuut. In de head van de HTML wordt inline css ingeladen. De meting vóór de critical css werd toegepast zag er als volgt uit.

### Bevindingen
Met het toepassen van critical css staat de stand op 41.64 seconden, tegenover 42.52 seconden.

### PageSpeed Insights
PageSpeed Insights levert de volgende cijfers op:
- Desktop: 51/100
- Mobile: 57/100


## ConcatJS
Met behulp van ConcatJS worden JavaScript-bestanden samengevoegd. Bovendien wordt dit bestand onder aan asynchroon in geladen. De meting voor het toepassen van ConcatJS ziet er al volgt uit:

### Bevindingen
Na het toepassen van ConcatJS staat de teller op 41.86 seconden.


## Uglify JS
Het compress-js bestand die is samengevoegd middels Concat JS wordt nu door een  minifier heen gehaald; Uglify JS. Met de 22.51 seconden in het achterhoofd is de test uitgevoerd met het doel nog meer secondes te doen afnemen.

### Bevindingen


### PageSpeed Insights
PageSpeed Insights levert de volgende cijfers op:
Desktop: 49/100
Mobile: 49/100
