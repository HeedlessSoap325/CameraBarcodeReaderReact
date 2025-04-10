import {useEffect, useState} from "react";

export default function Decoder({barcode}){
    const [codes, setCodes] = useState({
        barcode: "",
        decoded: "empty"
    });

    function decode(barcode){
        return barcode + "\n 2te \n 3te";
    }

    useEffect(()=>{
        setCodes({
            ...codes,
            barcode: barcode
        })
    }, [barcode])

    return(
        <div className={"Decoder-Container"}>
            <label htmlFor={"BarCodeOut"}>Barcode:</label>
            <textarea
                id={"BarCodeOut"}
                className={"out barcode"}
                value={codes.barcode}
                readOnly={true}/>

            <br/>

            <label htmlFor={"BarCodeDecode"}>Decoded barcode:</label>
            <textarea
                id={"BarCodeDecode"}
                className={"out decode"}
                value={codes.decoded}
                readOnly={true}/>
        </div>
    );
}