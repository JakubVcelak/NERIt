import './App.css';
import Header from './components/Header'
import Footer from "./components/Footer";
import InputContainer from "./components/InputContainer";
import SettingsContainer from "./components/SettingsContainer";
import ResultContainer from "./components/ResultContainer";
import HistoryContainer from "./components/HistoryContainer";
import {createContext, useState} from "react";

export const InputContext = createContext("")
export const ResultContext = createContext({})
export const HistoryContext = createContext([])

function App() {

    const [input, setInput] = useState("");
    const [result, setResult] = useState({});
    const [history, setHistory] = useState([]);

    return (
        <div className="app">
            <Header/>
            <InputContext.Provider value={{input, setInput}}>
                <ResultContext.Provider value={{result, setResult}}>
                    <HistoryContext.Provider value={{history, setHistory}}>
                        <InputContainer/>
                        <SettingsContainer/>
                        <ResultContainer lang={result.lang} data={result.data} time={result.time}
                                          entities={result.entities}/>
                        <HistoryContainer/>
                    </HistoryContext.Provider>
                </ResultContext.Provider>
            </InputContext.Provider>
            <Footer/>
        </div>
    );
}

export default App;
