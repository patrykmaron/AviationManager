import React from 'react';

// Styles
import './css/App.css';
import './css/Breakpoints.css';
import 'animate.css';

// Components
import HeaderComponent from './components/header';
import Main from './components/Main';



function App() {
  return (
    <div className="App" >
      <HeaderComponent
        Title="Introducing Aviation Manager"
        Subtitle="Made with ❤️ and ☕ by Patryk Maron"
      />
     
    </div>
  );
}

export default App;
