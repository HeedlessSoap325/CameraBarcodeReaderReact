# Beschreibung
Dieses Projekt entstand im Rahmen einer Selbstlernaufgabe im Modul 114.  
Das Ziel der Aufgabe war es, eine eigene Kodierung für einen Barcode zu erstellen und diese Kodierung in eine vorgegebene Java-Applikation zu implementieren.  
Dieses Projekt ist lediglich eine Bonus-Applikation, die das Lesen und Dekodieren der Barcodes im Browser ermöglichen soll.

# Verwendete Bibliotheken
Dieses Projekt stützt sich auf drei Bibliotheken, die die zwei großen Aufgaben übernehmen:
1. "react-webcam" für das Bedienen der Kamera
2. "@zxing/browser" für das Auslesen des Barcodes aus einem Bild
3. "gh-pages" für das Veröffentlichen der Webseite auf GitHub

Beispiele für beide ersten Bibliotheken können [hier](https://blog.logrocket.com/using-react-webcam-capture-display-images/) und [hier](https://github.com/zxing-js/browser) gefunden werden.

Die Bibliotheken können mit diesem Befehl installiert werden:  
``npm install react-webcam @zxing/browser gh-pages``

# Webseite
Die Webseite habe ich mithilfe von gh-pages auf GitHub veröffentlicht, die Webseite kann [hier](https://heedlesssoap325.github.io/CameraBarcodeReaderReact/) gefunden werden.

Die Webseite benötigt Zugriff auf die Kamera und wählt, sofern möglich, die Rückkamera.  
Es empfiehlt sich jedoch, die Webseite über den Computer aufzurufen, da die Handykamera oft nicht die beste Qualität hat.  
Zudem ist die verwendete Bibliothek für das Lesen des Barcodes recht zickig, was die Lichtverhältnisse, Größe und Schärfe des Bilds angeht.

# Funktion
Das Projekt scannt in seiner Grundform lediglich den Barcode und gibt ihn dann aus.  
In der ``Decoder.jsx`` Datei kann jedoch die Funktion der Dekodierung bearbeitet werden.
