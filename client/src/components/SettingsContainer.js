import './SettingsContainer.css'
import {useContext, useState} from "react";
import {HistoryContext, ResultContext} from "../App";
import axios from "axios";
import {
    greek,
    japanese, korean,
    lithuanian,
    norwegian,
    options1,
    options2, options3,
    polish,
    romanian,
    swedish, czech
} from '../res/entitiesOptions'
import AbbreviationsContainer from "./AbbreviationsContainer";
import loadingIcon from "../res/loading.png"

// settings container
function SettingsContainer() {

    const {result, setResult} = useContext(ResultContext);
    const {history, setHistory} = useContext(HistoryContext);
    const [lang, setLang] = useState({text: "Catalan", value: "catalan"});
    const [entitiesOptions, setEntitiesOptions] = useState(options1);
    let selectedEntities = []
    const [loading, setLoading] = useState(false);
    const [writeHistory, setWriteHistory] = useState(false);

    // handle submit and add result to history container
    function handleSubmit() {
        if (writeHistory) {
            const newHistory = [{
                lang: result.lang,
                data: result.data,
                entities: result.entities
            }].concat(history)
            setHistory(newHistory)
        }
        setWriteHistory(true)

        setLoading(true)
        axios.post(selectServer(lang.value) + lang.value, {text: document.getElementById('textInput').value})
            .then((response) => {
                setResult({lang: lang.text, data: response.data, entities: selectedEntities})
                document.getElementById('textInput').value = ""
                uncheckedCheckBoxes()
                setLoading(false)
            }, (error) => {
                console.log(error);
                setLoading(false)
            });
    }

    // handle selected entity categories change
    function handleCheckBoxChange(entity) {
        if (selectedEntities.filter((ent) => {
            return ent.id === entity.id
        }).length !== 0) {
            selectedEntities = selectedEntities.filter((ent) => {
                return ent.id !== entity.id
            })
        } else {
            selectedEntities.push(entity)
        }
    }

    // return server url based on selected language
    function selectServer(lang) {
        if (['catalan', 'croatian', 'danish', 'czech', 'english', 'finnish', 'dutch'].includes(lang)) {
            return 'http://127.0.0.1:5001/'
        } else if (['french', 'german', 'greek', 'lithuanian', 'russian'].includes(lang)) {
            return 'http://127.0.0.1:5002/'
        } else if (['norwegian', 'polish', 'portuguese', 'romanian', 'spanish', 'swedish', 'ukrainian', 'macedonian', 'italian' ].includes(lang)) {
            return 'http://127.0.0.1:5003/'
        } else {
           return  'http://127.0.0.1:5004/'
        }
    }

    // unchecked all entity categories
    function uncheckedCheckBoxes() {
        selectedEntities = []
        for (const option of entitiesOptions) {
            document.getElementById(option.id).checked = false
        }
    }

    // display entity categories
    function showEntitiesOptions(options) {
        const entitiesOptions = options.map((ent) => {
            return <span key={ent.id}><input type="checkbox" id={ent.id} className="checkBox" onChange={(e) => {
                handleCheckBoxChange({id: ent.id, text: ent.text})
            }}/>
                 <label htmlFor={ent.id}>{ent.text}</label></span>
        })
        return entitiesOptions
    }

    // return entity categories for specific language
    function getEntitiesOptions(selectedLang) {
        if (['catalan', 'croatian', 'danish', 'french', 'german', 'italian', 'portuguese', 'spanish'].includes(selectedLang)) {
            return options1
        } else if (['dutch', 'english', 'finnish', 'macedonian', 'chinese'].includes(selectedLang)) {
            return options2
        } else if (['russian', 'ukrainian'].includes(selectedLang)) {
            return options3
        } else if (selectedLang === 'greek') {
            return greek
        } else if (selectedLang === 'lithuanian') {
            return lithuanian
        } else if (selectedLang === 'polish') {
            return polish
        } else if (selectedLang === 'norwegian') {
            return norwegian
        } else if (selectedLang === 'romanian') {
            return romanian
        } else if (selectedLang === 'swedish') {
            return swedish
        } else if (selectedLang === 'japanese') {
            return japanese
        } else if (selectedLang === 'korean') {
            return korean
        } else if (selectedLang === 'czech') {
            return czech
        }
    }

    return (
        <div>
            <div className="center">
                <p>Choose a language: </p>
                <select id="selectedLanguage" name="selectedLanguage" className="selectLanguage"
                        onChange={(e) => {
                            setLang(e.target.options[e.target.options.selectedIndex])
                            setEntitiesOptions(getEntitiesOptions(e.target.options[e.target.options.selectedIndex].value))
                            uncheckedCheckBoxes()
                        }}>
                    <option value="catalan">Catalan</option>
                    <option value="croatian">Croatian</option>
                    <option value="czech">Czech - BETA</option>
                    <option value="danish">Danish</option>
                    <option value="dutch">Dutch</option>
                    <option value="english">English</option>
                    <option value="finnish">Finnish</option>
                    <option value="french">French</option>
                    <option value="german">German</option>
                    <option value="greek">Greek</option>
                    <option value="chinese">Chinese</option>
                    <option value="italian">Italian</option>
                    <option value="japanese">Japanese</option>
                    <option value="korean">Korean</option>
                    <option value="lithuanian">Lithuanian</option>
                    <option value="macedonian">Macedonian</option>
                    <option value="norwegian">Norwegian</option>
                    <option value="polish">Polish</option>
                    <option value="portuguese">Portuguese</option>
                    <option value="romanian">Romanian</option>
                    <option value="russian">Russian</option>
                    <option value="spanish">Spanish</option>
                    <option value="swedish">Swedish</option>
                    <option value="ukrainian">Ukrainian</option>
                </select>
            </div>
            <AbbreviationsContainer entitiesOptions={entitiesOptions}/>
            <div className="center"><span className="entityChoose">Choose wanted entities: </span></div>
            <div className="checkBoxes">{showEntitiesOptions(entitiesOptions)}</div>
            <div className="center">
                {loading?<img className="loading" src={loadingIcon}/>:<button className="submitButton" onClick={handleSubmit}>NER_It</button>}
            </div>
        </div>
    );
}

export default SettingsContainer;