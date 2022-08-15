import React from 'react';
import { Features, Contact, Project, Header, Footer, Service, } from './containers'; 
import {Brand, Navbar, Nav} from './components';
import './App.css';

const App =() => {
  return (
    <div>
     <Navbar />
     <Nav />
     <Header />
     <Brand />
     <Features />
     <Service />
      <Project />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
