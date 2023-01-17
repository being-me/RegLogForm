import './App.css';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Registration from './Component/Registration';


// import React, { Component } from 'react'

// class App extends React.Component {
//   render() 
//   {
//     return (
//       <div>
//       <Registration/>
//     </div>
//     )
//   }
// }

// export default App
const App = () => {
  return (
    <div className="App">
      <Registration/>
    </div>
  );
}

export default App;
