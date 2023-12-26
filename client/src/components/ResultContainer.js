import './ResultContainer.css'
import Result from "./Result";

//Result container
function ResultContainer(props) {

    // display searched entity categories
    function displayEntities() {
        if (props.data !== undefined && props.entities.length > 0) {
            const listEntities = props.entities.map((d, key) => {
                return <span key={key} className={d.id}> {d.text} </span>
            })
            return listEntities
        } else {
            return <span className="info">No entities were searched</span>
        }
    }

    return (
        <div className="resultContainer">
            <div className="infoTab">
                <span className="resultInfoLabel">Language:</span>{props.lang ?
                <span className="info">{props.lang}</span> : <span className="info">Language wasn´t selected</span>}
                <br/>
                <span className="resultInfoLabel">Entities:</span>{displayEntities()}
            </div>
            <Result data={props.data} entities={props.entities}/>
        </div>
    );
}

export default ResultContainer;