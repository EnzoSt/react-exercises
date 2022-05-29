import { useEffect, useRef, useState } from "react";

export function CarDetails({initialData}) {
    const [model, setModel] = useState(initialData.model);
    const [year, setYear] = useState(initialData.year);
    const [color, setColor] = useState(initialData.color);
    const inputRef = useRef();
    
    useEffect(() => {
        inputRef.current.focus()
    }, []);
    
    function handleModelChange(e) {
        setModel(e.target.value);
    }
    
    function handleYearChange(e) {
        setYear(e.target.value);
    }
    
    function handleColorChange(e) {
        setColor(e.target.value);
    }
    
    return (
        <div>
        <h2>Car Details:</h2>
        <form>
            <label>
            Model:
            <input
                ref={inputRef}
                type="text"
                value={model}
                onChange={handleModelChange}
            />
            </label>
            <label>
            Year:
            <input
                type="text"
                value={year}
                onChange={handleYearChange}
            />
            </label>
            <label>
            Color:
            <input
                type="text"
                value={color}
                onChange={handleColorChange}
            />
            </label>
        </form>
        </div>
    );
}