import React from 'react';
import RoutesApp from './routes/RoutesApp';
import { ThemeProvider, useTheme } from './themes/ThemeContext';
import './App.css'; // Archivo de estilos CSS

const ColourApp = () => {
  const { theme } = useTheme();

  return(
    <div className={`App ${theme}`}>
      <RoutesApp />
    </div>
  )
}

const App = () => {
  return (
    <ThemeProvider>
      <ColourApp />
    </ThemeProvider>
  );
};




export default App;
