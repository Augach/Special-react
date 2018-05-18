import React, { Component } from 'react';
import axios from 'axios';


class Quote extends Component {
    state = {
        quote: {}
    };

    componentWillMount() {
        this.getQuote();
    };


    getQuote = () => {
        axios.get('https://api.chucknorris.io/jokes/random').then((response) => {
            console.log (response.data);
            this.setState({quote: response.data});
        });
        // méthode axios "get" = requete sur l'url de l'API
        // si la méthode get s'execute then(alors)

    };

    render() {
        return (
            <div>
                <blockquote>
                {this.state.quote.value}
                </blockquote>
                <button 
                    className="btn btn-success"
                    onClick={this.getQuote} >Refresh</button>
            </div>
        );
    }
}

export default Quote;
