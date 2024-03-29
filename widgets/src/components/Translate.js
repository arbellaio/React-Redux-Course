import React, {useState} from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Urdu',
        value: 'ur'
    }
]

const Translate = (props) => {
    const [language, setLanguage] = useState(options[2])
    const [text, setText] = useState("")
    return (
        <div>
            <div className={"ui form"}>
                <div className={"field"}>
                    <label>Enter Text</label>
                    <input value={text} onChange={(e) => setText(e.target.value)}/>
                </div>
            </div>
            <Dropdown options={options} selected={language}
                      label={"Select a Language"}
                      onSelectedChange={setLanguage}/>
            <hr/>
            <h3 className={"ui header"}>Output: </h3>
            <Convert text={text} language={language}/>
        </div>
    )
}
export default Translate;
