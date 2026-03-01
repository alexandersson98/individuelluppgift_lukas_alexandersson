initial commit inkluderade ändrat lang till en. blev lite strul med att koppla till git i början.
MyShop

En enkel produktsida byggd med ren HTML, CSS och JavaScript utan ramverk.

Filer

index.html – själva sidan med all struktur
styles.css – styling, layout och färger
script.js – JavaScript för knappar och axe-core
images/ – bilder som används på sidan
README.md – dokumentation

Vad gör sidan?

Sidan visar tre produkter med bild, beskrivning och pris.
Man kan klicka på "Add to cart" och då visas en alert som bekräftar valet.

Det finns också ett formulär för nyhetsbrev där man kan skriva in namn och e-post.

Tillgänglighet

Jag använde axe-core för att hitta och åtgärda tillgänglighetsproblem.
Jag lade till alt-texter på bilder, aria-labels där det behövdes och fixade rubrikstrukturen så den är logisk och fungerar bättre med skärmläsare.

Prestanda

Hero-bilden är det största elementet ovanför folden (LCP-elementet) så jag lade till fetchpriority="high" för att den ska laddas snabbare.
De andra bilderna använder loading="lazy" så de inte laddas i onödan.

Jag lade även till stöd för prefers-reduced-motion för att minska animationer för användare som har den inställningen aktiverad.

LCP gick från cirka 2.5 sekunder till 1.5 sekunder.