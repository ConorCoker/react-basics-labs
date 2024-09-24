import './App.css';
import Task from './components/Task';

function App() {
  return (
    <div className="container">
      <h1>Conor's react app</h1>
      <Task title="Dishes" deadline="Today" description="wash the dishes and put away" />
      <Task title="Laundry" deadline="Tomorrow" description="fold laundry and pack it away" />
      <Task title="Tidy" deadline="Today" description = "tidy your room" />
    </div>
  );
}

export default App;
