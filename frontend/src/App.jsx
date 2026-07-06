import Navbar from "./components/Navbar";
import TicketCard from "./components/TicketCard";

function App() {
  return (
    <div>
      <Navbar />

      <TicketCard
        title="Login Issue"
        status="Open"
      />

      <TicketCard
        title="Payment Failed"
        status="Closed"
      />

      <TicketCard
        title="Bug Report"
        status="In Progress"
      />
    </div>
  );
}

export default App;