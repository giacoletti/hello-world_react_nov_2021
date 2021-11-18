// import React, { Component } from 'react'

// class App extends Component {
//   state = {
//     planetName: "Mars 2",
//     message: "whatever..."
//   };

//   componentDidMount(){
//     debugger
//   };
//--------------------------------------
//equivalent to this: 
// useEffect(() => {
//   debugger
// }, []);
//-----------------------------------

//   render() {
//     return (
//       <>
//         <h1>Hello {this.state.planetName}</h1>
//         <button onClick={() => this.setState({planetName: "Earth"})} >
//           Click Me
//         </button>
//       </>
//     )
//   };
// };

// export default App;

//---------------------------------------------

import React, { useState, useEffect } from 'react'

// const state = { planetName: "Earth" };

const App = (props) => {

  const [planetName, setPlanetName] = useState('Mars');  //getter and setter methods
  const [message, setMessage] = useState();

  useEffect(() => {
    setMessage("You just changed the name of the planet");
    debugger
  }, [planetName]);  //this one triggers when planetName changes or at the first value set, if you use setPlanetName('Mars') it will not trigger
  
  useEffect(() => {
    setMessage("This is the first render"); //this one triggers only once
    debugger
  }, []);

  return (
    <React.Fragment>
      <h1>Hello {planetName}</h1>
      <button onClick={() => setPlanetName('Venus')} >
        Click Me
      </button>
      <h2>{message}</h2>
    </ React.Fragment>
  );

};

export default App;
