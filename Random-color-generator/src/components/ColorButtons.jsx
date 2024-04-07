import { useState } from "react";

export default function ColorButtons() {

    const [color, setColor] = useState("#4c2b99");
    const [colorType, setColorType] = useState("HEX");
    const [styles, setStyles] = useState({ backgroundColor: "#4c2b99" });
    
    function createHexColor() {
        setColorType("HEX");
        var letter = "0123456789ABCDEF";
        var newColor = "#";
        for (var i = 0; i < 6; i++) {
            newColor += letter[Math.floor(Math.random() * 16)];
        }
        setColor(newColor);
        setStyles({ backgroundColor: newColor }); 
    }
    
    function createRgbColor() {
        setColorType("RGB");
        var R, G, B;
        R = String(Math.floor(Math.random() * 255));
        G = String(Math.floor(Math.random() * 255));
        B = String(Math.floor(Math.random() * 255));
    
        var newColor = "rgb(" + R + "," + G + "," + B + ")";
        setColor(newColor);
        setStyles({ backgroundColor: newColor }); 
    }
    
    return (
        <div className="container" style={styles}>
            <header>
                <button onClick={() => createHexColor()}>Create HEX Color</button>
                <button onClick={() => createRgbColor()}>Create RGB Color</button>
                <button onClick={() => (colorType === "HEX" ? createHexColor() : createRgbColor())}>
                    Generate Random Color
                </button>
            </header>
    
            <main>
                <h1>{colorType} Color</h1>
                <h1>{color}</h1>
            </main>
        </div>
    );
    
}
