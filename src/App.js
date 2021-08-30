import HomePage from "./components/pages/HomePage/HomePage";
import { HashRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <HomePage />
      </div>
    </Router>
  );
}

export default App;
