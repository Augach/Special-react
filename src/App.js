import React, { Component } from 'react';
import './App.css';
// on importe l'Article du fichier Article.js
import Article from './Article';
import TextEditable from './TextEditable';
import Message from './Message';
import Quote from './Quote';



// App est un composant
class App extends Component {
  state = {
    title: 'Un titre par défaut'
  }

  save = (text) => {
    this.setState({title: text});
  }


  render() {
    return (
      <div className="container">
        <h1>Mon composant APP</h1>
        {/* ici on fait du JSX Javascript XML 
        title est une props = une propriété
        on récupère les props dans Article.js au sein de la function */}
       
       <Quote />
        
    
       <TextEditable save={this.save}>
          <h2>{ this.state.title }</h2>
        </TextEditable>
       


        <Article
          title="Mon super titre"
          imgUrl="mouton1.jpg">
          
          Blablabla Blablabla ...
         
        </Article>

        <Article
          title="Un autre titre"
          imgUrl="mouton2.jpg">
         
          Bliblibli Bliblibli ...
        
        </Article>



        <Message nombredecaracterelimite="30" />
          
        <Message nombredecaracterelimite="15" />

         

        
      </div>

  
    );
  }
}

export default App;
