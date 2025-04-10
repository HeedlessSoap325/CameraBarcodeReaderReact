import Webcam from "react-webcam";
import {useEffect, useRef, useState} from "react";
import { BrowserMultiFormatReader } from "@zxing/browser";

/**
 * CustomWebcam.jsx
 *
 * Wird verwendet, um BarCodes von der Webcam einzulesen
 * und dann in einen String umzuwandeln und diesen auszugeben.
 *
 * Mit Hilfe von https://blog.logrocket.com/using-react-webcam-capture-display-images/
 * und https://github.com/zxing-js/browser erstellt.
 *
 * @author Mathis Fritz
 * @version 1.0.0
 */
export default function CustomWebcam({setBarCode}){
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
                    setBarCode(result.getText());
                }catch (err) { //Wenn kein BarCode erkannt wurde...
                    setResult(null); //...dann ist das result null -> Leer
                }
            }
        }, 500); //Wird alle 500 Millisekunden also 1/2 Sekunden ausgeführt
        return () => clearInterval(interval); //Beenden des Intervals
    }, []); //Beim Laden der Seite wird der Code ausgeführt

    return(
        <div className="Web-Cam-Container"> {/*Container, um die Elemente zu gruppieren*/}
            <Webcam height={visualViewport.height / 1.7} ref={webcamRef}/> {/*Aufsetzen der Webkamera von "react-webcam", höhe der Webcam auf ca. 58% setzen*/}
            <p>Barcode Result: {result || 'Scanning...'}</p> {/*Ausgeben des Resultats, bzw. anzeigen, dass nichts gefunden wurde*/}
        </div>
    );
}