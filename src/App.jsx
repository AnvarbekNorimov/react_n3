import Sidebar from "./containers/Sidebar";
import Navbar from "./containers/Navbar";
import Main from "./containers/Main";
import {} from "./assets/css/main.css";
import "./App.scss";
function App() {
  return (
    <div className="App container">
      <Sidebar />
      <div className="content">
        <Navbar />
        <Main />
      </div>
    </div>
  );
}

export default App;
