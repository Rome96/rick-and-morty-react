import {useState} from 'react'
import './App.css';
import Header from './components/Header';
import Characters from './components/Characters';
import ThemeContext from './context/themeContext';

function App() {
  const [theme, updateTheme] = useState("bg-dark");

  return <ThemeContext.Provider value={{theme, updateTheme}}>
    <div className={`App ${theme}`}>
      <Header />
      <Characters />
    </div>
  </ThemeContext.Provider>
}

export default App;
