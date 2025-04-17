import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar React",
      description: "Description of Task 1",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar JavaScript",
      description: "Description of Task 2",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Estudar CSS",
      description: "Description of Task 3",
      isCompleted: false,
    },
  ]);

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
      id: tasks.length + 1,
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }
  
  return (
    <div className="w-screen h-screen bg-sky-950 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
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
