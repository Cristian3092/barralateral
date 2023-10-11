
import './App.css';
import { Sidebar } from './components/Sidebar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Home } from './pages/Home';
import { Blog } from './pages/Blog';
import { Contact } from './pages/Contact';

function App() {
  return (
    <>
    <Router>
      <Sidebar/>
        <Routes>
          <Route path= '/' exact component={Home}/>
          <Route path= '/blog' component={Blog}/>
          <Route path= '/contact' component={Contact}/>
        </Routes>
    </Router>
    </>
  );
}

export default App;
