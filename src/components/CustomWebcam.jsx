import Webcam from "react-webcam";
import {useEffect, useRef, useState} from "react";
import { BrowserMultiFormatReader } from "@zxing/browser";

export default function CustomWebcam(){
    const webcamRef = useRef(null); //Referenz für die WebCam aufsetzen
    const [result, setResult] = useState(null); //Variable für das Resultat aufsetzen

    const reader = new BrowserMultiFormatReader(); //Erzeugen eines Readers, der den BarCode Lesen kann, aus "@zxing/browser"

    useEffect(() => {
        const interval = setInterval(async () => { //Registrierung eines Intervals, der den Code periodisch ausführt
            if (
                webcamRef.current && //Überprüft, ob die Kamera gelinkt und verfügbar ist
                webcamRef.current.video && //Überprüft, ob der video-stream verfügbar ist
                webcamRef.current.video.readyState === 4 //Überprüft, ob das video bereit ist, Frames zu rendern
            ) {
                const imageSrc = webcamRef.current.getScreenshot(); //Alle 500 Millisekunden wird ein neuer Frame gespeichert

                try{ //Der reader wird einen leeren Promise zurückgeben, wenn KEIN BarCode erkannt wurde
                    const result = await reader.decodeFromImageUrl(imageSrc); //Versuche, den Barcode anhand des gespeicherten Bilds herauszulesen
                    setResult(result.getText()); //Setze die result-variable auf den gelesenen Wert
                    //TODO aufrufen des Codes, um das Ergebnis zu dekodieren
                }catch (err) { //Wenn kein BarCode erkannt wurde...
                    setResult(null); //...dann ist das result null -> Leer
                }
            }
        }, 500); //Wird alle 500 Millisekunden also 1/2 Sekunden ausgeführt
        return () => clearInterval(interval); //Beenden des Intervals
    }, []); //Beim Laden der Seite wird der Code ausgeführt

    return(
        <div className="Web-Cam-Container"> {/*Container, um die Elemente zu gruppieren*/}
            <Webcam ref={webcamRef}/> {/*Aufsetzen der Webkamera von "react-webcam"*/}
            <p>Barcode Result: {result || 'Scanning...'}</p> {/*Ausgeben des Resultats, bzw. anzeigen, dass nichts gefunden wurde*/}
        </div>
    );
}