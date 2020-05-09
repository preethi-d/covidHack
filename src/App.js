import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar'
import Flow from './Flow'

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
];

const nodes = [
  {
    title: "Root 1",
    desc: "Root node",
    name: "root1",
    type: "root",
    position: {
      x: 0,
      y: 0
    },
    links: []
  },
  {
    title: "Root 2",
    desc: "Root node",
    name: "root2",
    type: "root",
    position: {
      x: 100,
      y: 0
    },
    links: []
  },
  {
    title: "Int 1",
    desc: "Intermediate",
    name: "int1",
    type: "node",
    position: {
      x: 0,
      y: 100
    },
    links: ["root1"]
  }
];

function App() {
  return (
      <div id="main">
        <Sidebar items={items} />
        <Flow title="Test Flow" nodes={nodes}/>
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
