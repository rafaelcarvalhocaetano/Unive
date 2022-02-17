import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Dashboard from './pages/dashboard';
import Courses from './pages/course';
import Calendar from './pages/calendar';
import Materials from './pages/materials';
import Transcripts from './pages/transcripts';
import UNSidebar from './shared/components/UNSidebar';
import UNHeader from './shared/components/UNHeader';

const App = () => (
  <Router >
    {/* <div className="row">
      <UNSidebar />
      <div className="column full-with">
        
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/course" component={Courses} />
          <Route path="/materials" component={Materials} />
          <Route path="/calendar" component={Calendar} />
          <Route path="/transcripts" component={Transcripts} />
        </Switch>
      </div>
    </div> */}
    <UNSidebar headerComponent={<UNHeader />} >
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/course" component={Courses} />
        <Route path="/materials" component={Materials} />
        <Route path="/calendar" component={Calendar} />
        <Route path="/transcripts" component={Transcripts} />
      </Switch>
    </UNSidebar>
  </Router>

);

export default App;
