import { useState } from "react";

function ColorPicker() {
    const [color, setColor] = useState("#FFFFFF");
    function handleColorChange(e) {
        setColor(e.target.value);
    }

    return (
        <div>
            <h1>Color picker</h1>
            <div className="color-display" style={{ backgroundColor: color }}>
                <p>Selected Color: {color}</p>
            </div>
            <label>
                Select a color
                <input
                    type="color"
                    value={color}
                    onChange={handleColorChange}
                />
                <input type="color" />
            </label>
        </div>
    );
}

export default ColorPicker;
