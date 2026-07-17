import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { Plus, Trash2, CheckCircle, Circle } from 'lucide-react';

export default function Dashboard() {
  const { currentUser } = useAuth();
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  // Storage key is scoped to the specific user email
  const storageKey = `tasks_${currentUser?.email}`;

  useEffect(() => {
    const savedTasks = localStorage.getItem(storageKey);
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, [storageKey]);

  const saveTasksToStorage = (updatedTasks) => {
    setTasks(updatedTasks);
    localStorage.setItem(storageKey, JSON.stringify(updatedTasks));
  };

  const addTask = (e) => {
    e.preventDefault();
    if (!taskInput.trim()) return;

    const newTask = {
      id: Date.now(),
      text: taskInput,
      completed: false
    };

    saveTasksToStorage([...tasks, newTask]);
    setTaskInput('');
  };

  const toggleTask = (id) => {
    const updatedTasks = tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    saveTasksToStorage(updatedTasks);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    saveTasksToStorage(updatedTasks);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-md">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">My Tasks</h1>
        <p className="text-slate-500 mb-6 text-sm">Managing tasks for {currentUser?.email}</p>

        <form onSubmit={addTask} className="flex gap-2 mb-8">
          <input
            type="text"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            placeholder="Add a new task..."
            className="flex-1 px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
          <button type="submit" className="bg-indigo-600 text-white px-5 rounded-xl font-semibold hover:bg-indigo-700 transition flex items-center">
            <Plus className="mr-1 h-5 w-5" /> Add
          </button>
        </form>

        {tasks.length === 0 ? (
          <div className="text-center py-12 border-2 border-dashed border-slate-100 rounded-xl">
            <p className="text-slate-400">No tasks found. Try adding some above!</p>
          </div>
        ) : (
          <div className="space-y-3">
            {tasks.map(task => (
              <div 
                key={task.id} 
                className={`flex items-center justify-between p-4 rounded-xl border transition ${
                  task.completed ? 'bg-slate-50 border-slate-100 text-slate-400 line-through' : 'bg-white border-slate-200 text-slate-700'
                }`}
              >
                <button 
                  onClick={() => toggleTask(task.id)} 
                  className="flex items-center space-x-3 text-left focus:outline-none flex-1"
                >
                  {task.completed ? (
                    <CheckCircle className="h-5 w-5 text-indigo-500 shrink-0" />
                  ) : (
                    <Circle className="h-5 w-5 text-slate-400 shrink-0 hover:text-indigo-500 transition" />
                  )}
                  <span>{task.text}</span>
                </button>
                <button 
                  onClick={() => deleteTask(task.id)} 
                  className="text-slate-400 hover:text-red-500 transition p-1"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}