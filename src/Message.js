import React, { Component } from 'react';

class Message extends Component {


    state ={
        text: ''
    }


    changeText = (event) => { 
        // à chaque fois qu'un evenement arrive, la fonction changeText sera executee
        this.setState ({text: event.target.value});
    };

    // render minimum légal d'un composant qui doit retourner tout le html
    render() {
        const style = {};
        const length = this.state.text.length;

        if (length > (this.props.nombredecaracterelimite - 10)) {
            style.color = '#5893b3';
        }


        return (
            <div>
                <textarea
                    onChange={this.changeText}
                    cols="80"
                    rows="7"
                    style={style}
                    maxLength={this.props.nombredecaracterelimite}>
                </textarea>
                {/* les {} permettent de communiquer avec le html */}
                
                <div>Nombre de caractères: {length} </div>
                <p> {this.state.text}</p>
            </div>
        )
    }

}

export default Message;