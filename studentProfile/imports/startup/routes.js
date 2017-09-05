import React from 'react';
import { Router, Route, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

// route components
import Home from '../pages/Home.jsx';
import About from '../pages/About.jsx';
import AllStudents from '../pages/AllStudents.jsx';
import ViewStudent from '../pages/ViewStudent.jsx';
import AllProjects from '../pages/AllProjects.jsx';
import ViewProject from '../pages/ViewProject.jsx';
import AllFaculty from '../pages/AllFaculty.jsx';
import ViewFaculty from '../pages/FacultyInfo.jsx';
//import Project from '../components/project/handleViewProject.jsx';

const browserHistory = createBrowserHistory();

export const renderRoutes = () => (
      <Router history={browserHistory}>
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/About" component={About} />
              <Route exact path="/AllStudents" component={AllStudents}/>
              <Route exact path="/ViewStudent/:studentID" component={ViewStudent}/>
              <Route exact path="/AllProjects" component={AllProjects}/>
              <Route exact path="/ViewProject/:projectID" component={ViewProject}/>
              <Route exact path="/AllFaculty" component={AllFaculty}/>
              {/*<Route exact path="/handleProject" component={Project}/>*/}
              <Route exact path="/ViewFaculty" component={ViewFaculty}/>
          </Switch>
  	  </Router>
);
