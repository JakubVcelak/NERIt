import './InputContainer.css'
import arrows from '../res/arrows.png'

//Input container
function InputContainer() {
    return (
        <div>
            <div className="center">
                <img className="arrows" src={arrows} alt="arrows"/>
            </div>
            <textarea className="textInput" id="textInput" spellCheck="false"></textarea>
        </div>
    );
}

export default InputContainer;