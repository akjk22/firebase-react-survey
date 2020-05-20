import React from "react";
import Header from "./Header";
import SurveyControl from "./SurveyControl";
import Counter from "./Counter"

function App(){
  return ( 
    <React.Fragment>
      <Header />
      <SurveyControl />
      <Counter />
    </React.Fragment>
  );
}

export default App;