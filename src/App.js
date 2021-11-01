import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";

import { fetchWord, fetchQuote } from "./service";

import Words from "./pages/dictionary";
import Quote from "./pages/quote";




class App extends Component {
  constructor() {
    super();
    this.state = {
      word: "",
    };
    this.state = {
      quote: "",
    };
  }

  getWord = () => {
    return fetchWord().then((data) => {
      //  let quoteImg = data.url;
      //  this.setState({ quote: quoteImg });
    });
    }

    getQuote = () => {
      return fetchQuote().then((data) => {
        let quoteImg = data.url;
        this.setState({ quote: quoteImg });
      });
    };

  render() {
    return (
      <div className="App">
        <header>
          <div class="topnav">
            <Link to="/words">
              Dictionary
            </Link>
          </div>              
        </header>
        <main>
          <div>
            <h4>Search your word</h4>
            <p>
              <input type="text" placeholder="Search word..."></input>
            </p>
            <p>
              <Route Route path="/words">
                <Words word={this.state.word} getWord={this.getWord} />
              </Route>
            </p>
          </div>
          <div>
          <Route path="/quote">
            <Quote quote={this.state.quote} getQuote={this.getQuote}/>
          </Route>
          </div>
        </main>
      </div>
    );
  }
}

export default App;