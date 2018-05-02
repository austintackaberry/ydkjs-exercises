import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import TypesGrammarCh1 from "./TypesGrammarCh1.jsx";
import TypesGrammarCh2 from "./TypesGrammarCh2.jsx";
import TypesGrammarCh3 from "./TypesGrammarCh3.jsx";
import TypesGrammarCh4 from "./TypesGrammarCh4.jsx";
import TypesGrammarCh5 from "./TypesGrammarCh5.jsx";

class TypesGrammar extends Component {
  render() {
    return (
      <div className="TypesGrammar">
        <Route path="/ch1" component={TypesGrammarCh1} />
        <Route path="/ch2" component={TypesGrammarCh2} />
        <Route path="/ch3" component={TypesGrammarCh3} />
        <Route path="/ch4" component={TypesGrammarCh4} />
        <Route path="/ch5" component={TypesGrammarCh5} />
      </div>
    );
  }
}

export default TypesGrammar;
