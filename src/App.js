import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/project/:id' component={ProjectDetails} />
        </switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
