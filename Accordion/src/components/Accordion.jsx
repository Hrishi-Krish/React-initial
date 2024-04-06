import data from "./data";
import { useState } from "react";

export default function Accordion() {
    const [selected, setSelected] = useState(null);
    const [toggle, setToggle] = useState("Single");
    const [multiple, setMultiple] = useState([]);

    function handleSingleSelection(getCurrentId) {
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }

    function Selection() {
        toggle === "Single" ? setToggle("Multi") : setToggle("Single");
    }

    function handleMultiSelection(getCurrentId) { 
        let cpyMultiple = [...multiple]
        const indexOfCurrentId = cpyMultiple.indexOf(getCurrentId)

        if(indexOfCurrentId === -1) cpyMultiple.push(getCurrentId)
        else cpyMultiple.splice(indexOfCurrentId, 1)

        setMultiple(cpyMultiple)
        console.log(multiple)
        
    }

    return (
        <div className="wrapper">
            <button onClick={Selection}>{toggle} Selection</button>
            <div className="accordion">
                {data && data.length ? (
                    data.map((dataItem) => (
                        <div className="item">
                            <div
                                onClick={
                                    toggle === "Multi"
                                        ? () => handleMultiSelection(dataItem.id)
                                        : () => handleSingleSelection(dataItem.id)
                                }
                                className="title"
                            >
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                            </div> 
                            {
                                toggle === "Multi" ?
                                multiple.indexOf(dataItem.id) !== -1 &&
                                (<div className="content">{dataItem.answer}</div> ):
                                selected === dataItem.id &&   
                                (<div className="content">{dataItem.answer}</div> )
                            }
                            {/* {selected === dataItem.id ? (
                                <div className="content">{dataItem.answer}</div>
                            ) : null} */}
                        </div>
                    ))
                ) : (
                    <div> No data found! </div>
                )}
            </div>
        </div>
    );
}
