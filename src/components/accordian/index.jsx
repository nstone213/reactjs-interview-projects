//single selection
//multiple selection

import { useState } from "react";
import data from "./data"
import './styles.css'

export default function Accordian() {

    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    function handleSingleSelection(getCurrentID) {
        console.log(getCurrentID);
        setSelected(getCurrentID === selected ? null : getCurrentID);
    }

    function handleMultiSelection(getCurrentID) {
        let cpyMultiple = [...multiple];
        const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentID);

        console.log(findIndexOfCurrentId);
    }

    return <div className="wrapper">
        <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable Multi Selection</button>
        <div className="accordian">
            {data && data.length > 0 ? (
                data.map((dataItem) => (
                    <div className="item">
                        <div onClick={enableMultiSelection ? ()=> handleMultiSelection(dataItem.id) : () => handleSingleSelection(dataItem.id)} className="title">
                            <h3>{dataItem.question}</h3>
                            <span>+</span>
                        </div>
                        {
                            selected === dataItem.id ? <div className="content">{dataItem.answer}</div> : null
                        }
                    </div>
                ))
            ) : (
                <div>No data found!</div>
            )}
        </div>
    </div>;
}