import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './components/Person';

function App() {
  const arr = [
    { name: 'Zach', age: 27, country: 'US' },
    { name: 'Zach', age: 27, country: 'JP' },
    { name: 'Zach', age: 27, country: 'AU' },
    { name: 'Zach', age: 27, country: 'CA' },
    { name: 'Zach', age: 27, country: 'MX' },
  ];
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          {arr.map((person, index) => (
            <li key={index}>
              <Person name={person.name} age={person.age} country={person.country} />
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
