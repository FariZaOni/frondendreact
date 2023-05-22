import Register from './Register';
import Login from './Login';
import Header from './Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <main className="App">
      <Header />
      <Register />
    </main>
  );
}

export default App;