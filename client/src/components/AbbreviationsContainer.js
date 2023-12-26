import './AbbreviationsContainer.css'

//Abbreviations container
function AbbreviationsContainer(props) {

    // display abbreviations definitions
    function displayAbbreviations() {
        const abbreviations = props.entitiesOptions.map((ent, key) => {
            if (ent.desc !== "")
                return <span key={key} className="abbreviationInfo"><span
                    className="abbreviations">{ent.text}:</span>{ent.desc}</span>
        })
        return abbreviations
    }

    return (
        <div className="abbreviationsContainer">
            {displayAbbreviations()}
        </div>
    );
}

export default AbbreviationsContainer;