import React, { Component } from 'react';

import Vote from './Vote';


class Article extends Component {

    //props.title on récupère la props title du App.js
    // return <h2>{ props.title}</h2> si on veut une prise en compte sur plusieurs lignes; on ajoute des parenthèses et on lui administre un parent de type div ici
    state ={
        note: 0
    };
    
    getNote = (note) => {
        this.setState({note: note});
    };

    
    render() {
        return (
            // <div>
            //     <h2>{props.title}</h2>
            //     {/* <p>lorem ipsum decadum eperitus </p> valeur en dur remplacée par le text enfant de title*/}
            //     <img alt="mouton" src={props.imgUrl} />
            //     <p>{props.children}</p>
            // </div>

            <div className="card" style={{width: '18rem'}}> 
            {/* 2 accolades dans style une pour écrire du javascript et une seconde pour la valeur */}
                <img className="card-img-top" src={this.props.imgUrl} alt={this.props.title} />
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">{this.props.children}</p>
                    
                    <Vote nbStars="5" note={this.state.note} onNote={this.getNote} /> 
                    {/* ici this c'est Article */}
                </div>            
            </div>
        )
    }
};
        
        //export par défaut, on exporte ici pour importer dans le App.js
export default Article;