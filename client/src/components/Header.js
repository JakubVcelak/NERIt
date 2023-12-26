import logo from '../res/logo.png'
import './Header.css'

//Header component
function Header() {
    return (
        <div className="header">
            <img className="logo" src={logo} alt="logo"/>
            <p className="introduction"><span className="extraHighlighted">Welcome</span><br/>
                <span className="highlighted">Ner_It </span>is a free web application for extracting and classifying
                named entities from text.
                We provide pre-trained models for <span className="highlighted">24 languages</span>. For each extractor
                (except those in beta) you can choose from more than 3 categories.
                Up to <span className="highlighted">22 categories</span> are available in the most popular languages.
                Your previous searches are saved for one browser session.
                <br/><br/> <span className="extraHighlighted">Try it out!</span></p>
        </div>
    );
}

export default Header;