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

const App = () => (
  <Router >
    <div className="row">
      <UNSidebar />
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/course" component={Courses} />
        <Route path="/materials" component={Materials} />
        <Route path="/calendar" component={Calendar} />
        <Route path="/transcripts" component={Transcripts} />
      </Switch>
    </div>
  </Router>

);

export default App;
