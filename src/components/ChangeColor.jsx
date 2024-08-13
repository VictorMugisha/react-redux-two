import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeColor } from "../features/theme";

export default function ChangeColor() {
    const dispatch = useDispatch();
    const [color, setColor] = useState("");

    return (
        <div className="change-color-container">
            <input
                type="text"
                className="change-color-input"
                placeholder="Enter color"
                onChange={(event) => setColor(event.target.value)}
            />
            <button
                className="change-color-button"
                onClick={() => {
                    dispatch(changeColor(color));
                }}
            >
                Change Color
            </button>
        </div>
    );
}
