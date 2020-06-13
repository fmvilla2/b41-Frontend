import React from 'react';
import Navigation from './components/Navigation';
import Prueba from './components/Prueba';
import AuthContextProvider from './context/AuthContext';



function App() {
  return (
    <React.Fragment>
      <AuthContextProvider>

      
      <Navigation />
      <h1> Hello World </h1>
      <Prueba />

      </AuthContextProvider>
    </React.Fragment>
  );
}

export default App;
