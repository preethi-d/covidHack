import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar'

const items = [
  { name: 'myflows',
    label: 'My Flows',
    items: [
      { name: 'active', label: 'Active'},
      { name: 'completed', label: 'Completed'},
    ],
  },
  { name: 'discover', label: 'Discover' },
  { name: 'create', label: 'Create' },
]

function App() {
  return (
      <div>
        <Sidebar items={items} />
      </div>
  )
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
