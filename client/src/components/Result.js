import './Result.css'

// result component
function Result(props) {

    // extracting IDs of searched entity categories
    const entLabels = () => {
        let entLabels = []
        for (let i = 0; i < props.entities.length; i++) {
            entLabels.push(props.entities[i].id)
        }
        return entLabels
    }

    // display text with highlighted entity categories
    function displayResult() {
        let first = 0
        if (props.data !== undefined) {
            const resultText = props.data.ents.map((d, key) => {
                let res
                if (entLabels().includes(d.label)) {
                    res = <span key={key}>{props.data.text.substring(first, d.start)}<span className={d.label}
                                                                                           key={key}>{props.data.text.substring(d.start, d.end)}</span></span>
                } else {
                    res = <span key={key}>{props.data.text.substring(first, d.end)}</span>
                }
                first = d.end
                return res
            })
            return <span
                className="resultText">{resultText}{props.data.text.substring(first, props.data.text.length)}</span>
        }
    }

    return (
        <div className="result">
            {displayResult()}
        </div>
    );
}

export default Result;