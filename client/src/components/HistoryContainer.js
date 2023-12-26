import './HistoryContainer.css'
import ResultContainer from "./ResultContainer";
import {useContext} from "react";
import {HistoryContext} from "../App";

// history container
function HistoryContainer() {
    const {history, setHistory} = useContext(HistoryContext);

    // display previous results
    function displayHistory() {
        return (
            <ul>
                {history.length > 0 ? history.map((item, key) => <ResultContainer key={key} lang={item.lang}
                                                                                  data={item.data}
                                                                                  time={item.time}
                                                                                  entities={item.entities}/>) :
                    <div className="center"><span className="historyInfo">No previous searches</span></div>}
            </ul>
        )
    }

    return (
        <div>
            <div className="center">
                <span className="historyHeader">History: </span>
            </div>
            {displayHistory()}
        </div>
    );
}

export default HistoryContainer;