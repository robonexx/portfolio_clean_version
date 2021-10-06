import React from 'react'
import {ThemeProvider} from "styled-components";
import  {useDarkMode} from './components/Toggle/UseDarkMode'
import { GlobalStyles } from './components/Themes/GlobalStyle'
import { lightTheme, darkTheme } from "./components/Themes/Themes"
import ThemeToggle from "./components/Toggle/Toggler"
import Header from './components/Header'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Projects from './pages/Projects/Projects'
import Dancer from './pages/Dancer/Dancer'
import Developer from './pages/Developer/Developer'
import Contact from './pages/Contact/Contact'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {

  const [theme, themeToggler, mountedComponent] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;


  if(!mountedComponent) return <div/>
  return (
    <Router>
      <ThemeProvider theme={themeMode}>
          <ThemeToggle theme={theme} toggleTheme={themeToggler} />
            <GlobalStyles/>
                <Header />
                  <Switch>
                      <Route exact path="/" component={Home}/>
                      <Route path="/about" component={About}/>
                      <Route path="/projects" component={Projects}/>
                      <Route path="/developer" component={Developer}/>
                      <Route path="/dancer" component={Dancer}/>
                      <Route path="/contact" component={Contact}/>
                  </Switch>
      </ThemeProvider> 
    </Router>
  );
}

export default App;
