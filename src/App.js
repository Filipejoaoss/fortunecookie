import React from "react";
import { Component } from "react";
import OpenButton from "./components/index"
import "./sytle.css"

class App extends Component {

    constructor(props) {

        super(props);

        this.state = {
            text: ''
        };

        this.openCookie = this.openCookie.bind(this);

        this.phrases = [
            'Don’t hold onto things that require a tight grip.',
            'I didn’t come this far to only come this far.',
            'Vulnerability sounds like faith and looks like courage.',
            'And into the forest I go, to lose my mind and find my soul.',
            'Do it scared.',
            'Look how far you´ve come.',
            'Every good and perfect gift is from above.',
            'Be careful who you trust. Salt and sugar look the same.',
            'Tough love only works when there´s as much love as there is tough.',
            'Little by little, one travels far.',
            'She lives the poetry she cannot write.',
            'I can´t go back to yesterday because I was a different person then.',
            'I never dreamed about success. I worked for it.',
            'Love all, trust a few, do wrong to none.',
            'It is never too late to be what you might have been.',
            'Turn your wounds into wisdom.',
            'The road to success is always under construction.',
            'The most effective way to do it, is to do it.',
            'Not all those who wander are lost.',
            'All endings are also beginnings. We just don´t know it at the time.'
        ];
    }

    openCookie() {
        let state = this.state;
        let number = Math.floor(Math.random() * this.phrases.length);

        state.text = '" ' + this.phrases[number] + ' "';

        this.setState(state);
    }

    render() {
        return (

            <div className="container">
                <img src={require('./assets/biscoito.png')}  alt="cookie" className="img"/>

                <OpenButton name="Open Cookie" actionBtn={this.openCookie}/>

                <h3 className="phrases"> { this.state.text } </h3>
            </div>
        )
    }
}

export default App;