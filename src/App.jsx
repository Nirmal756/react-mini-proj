import { useState } from 'react';
import TaskItem from './components/TaskItem';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Learn React Environment', completed: true },
    { id: 2, text: 'Build a demo project', completed: false }
  ]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (!input) return;
    setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
    setInput('');
  };

  return (
    <div className="container">
      <h1>Task Tracker</h1>
      <div className="input-group">
        <input 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="New task..." 
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul>
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}

export default App;
