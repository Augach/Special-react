import React, { Component } from 'react';
import './Vote.css';
// ici on ajoute l'extension .css car l'import n'est pas un fichier js
// lien vers l'étoile https://outils-javascript.aliasdmc.fr/encodage-caracteres-meteo-ciel/encode-caractere-2606-html-css-js-autre.html

class Vote extends Component {

    onVote = (note) => {
        this.props.onNote(note);

    };

    isActive = (position) => {
        return this.props.note >= position ? ' active' : '';
    }
    render() {
        // on utilise un tableau pour créer une espèce de sequence que l'on va pouvoir exploiter
        const renderStars = Array.from({ length: this.props.nbStars }, (v, k) => {
            // v = valeur, k = key =index
            let position = k + 1;
            // la séquence commencera à partir de 1
            return <span
                className={'star' + this.isActive(position)}
                key={position}
                onClick={(e) => { this.onVote(position) }}>☆</span>
        });

        return (
            <div className="stars">
                {renderStars}
            </div>
        )
    }


}

export default Vote;