import './App.css'
import CustomWebcam from "./components/CustomWebcam.jsx";
import Decoder from "./components/Decoder.jsx";
import {useState} from "react";

export default function App() {
    const [barcode, setBarcode] = useState("");

  return (
      <div className={"App-Container"}>
          <CustomWebcam setBarCode={setBarcode} />
          <Decoder barcode={barcode} />
      </div>
  );
}