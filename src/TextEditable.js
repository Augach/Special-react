import React, { Component } from 'react';


// const TextEditable = function (props) {
//     return (
//         <div >
//             <h2 >{props.children}</h2>
//         </div>
//     )
// };

class TextEditable extends Component {

    state = {
        editing: false
        // par défault je ne suis pas "en mode" editing on veut passer de l'état false à l'état true et inversement; on utilise Toggle
    };

    onToggle = () => {
        // this fait réfrence ici à texteditable
        // set permet de cibler ce que l'on souhaite modifier dans state
        // on récupère l'état et on l'inverse avec !
        this.setState ({editing: !this.state.editing});
    }

    onSave = (event) => {
        if (event.keyCode === 27) { // 27 == touche échap
            this.onToggle();
            return; // grâce à return on sort de la fonction
        }
        if (event.keyCode === 13) { // 27 == touche entrée
            const text = event.target.value;

            if (text.trim()) {
                this.props.save(text);
            }
            this.onToggle();
        }
    }

    renderDefault = () => {
        return (
            <div onClick={this.onToggle}>
                {this.props.children }
            </div>
        )
    }


    renderInputText = () => {
        const element = this.props.children; // element == h2

        return (
            <input
                type="text"
                className={this.props.classes}
                defaultValue={element.props.children}
                onBlur={this.onToggle}
                onKeyUp={this.onSave}
                autoFocus />
        )
    };

    // ici on a effectué un test
    // render() {
    //     return (
    //         <div>
    //             { this.props.children} {/*  pour retrouver <h2>TextEditable</h2> ; le props dans une classe et non dans une fonction doit être précédé de this.*/}
    //             { this.state.editing + '' }
    //         </div>

    //     )}

    render () {
        if (this.state.editing) {
            return this.renderInputText();
        }

        return this.renderDefault();
    }
};

TextEditable.defaultProps = {
    classes: 'form-control'
}

export default TextEditable;