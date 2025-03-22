import "./style.css";
import TicketForm from "./components/TicketForm";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Issue Tracker</h1>
        <TicketForm />
      </div>
    </div>
  );
}

export default App;
