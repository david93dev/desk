import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import {v4} from 'uuid';
import { use } from "react";
import { Heading3 } from "lucide-react";
import Title from "./components/Title";
 
function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function onTaskClick(id) {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTaskClick(id) {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }
  
  return (
    <div className="w-screen h-screen bg-sky-950 flex justify-center p-6">
      <div className="w-[500px]">
        <Title>Gerenciador de Tarefas</Title>
        <p className="text-slate-100 text-center">
          Gerencie suas tarefas de forma simples e rápida!
        </p>

        <h2 className="text-slate-100 font-bold text-xl mt-4">
          Adicionar Tarefa
        </h2>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />

        <h2 className="text-slate-100 font-bold text-xl mt-4">Tarefas</h2>
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
