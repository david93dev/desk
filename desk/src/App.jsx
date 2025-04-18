import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { v4 } from 'uuid';
import Title from "./components/Title";
import DayPage from "./pages/DayPage";
import { useParams, Link } from "react-router-dom";

function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);
  const { day } = useParams();

  const diasValidos = [
    "domingo",
    "segunda-feira",
    "terça-feira",
    "quarta-feira",
    "quinta-feira",
    "sexta-feira",
    "sábado",
  ];

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function onTaskClick(id) {
    const newTasks = tasks.map((task) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTasks(newTasks);
  }

  function onDeleteTaskClick(id) {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description, date, time) {
    const newTask = {
      id: v4(),
      title,
      description,
      date,
      time,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  if (diasValidos.includes(day)) {
    return (
      <DayPage
        tasks={tasks}
        onTaskClick={onTaskClick}
        onDeleteTaskClick={onDeleteTaskClick}
      />
    );
  }

  return (
    <div className="w-screen min-h-screen bg-sky-950 flex justify-center p-6">
      <div className="w-[500px]">
        <Title>Gerenciador de Tarefas</Title>
        <p className="text-slate-100 text-center">
          Gerencie suas tarefas de forma simples e rápida!
        </p>

        {/* MENU DE DIAS DA SEMANA */}
        <div className="flex gap-2 flex-wrap mt-4 mb-6 justify-center">
          {diasValidos.map((dia) => (
            <Link
              key={dia}
              to={`/${dia}`}
              className="bg-slate-100 px-3 py-1 rounded hover:bg-slate-300 text-sm"
            >
              {dia.charAt(0).toUpperCase() + dia.slice(1)}
            </Link>
          ))}
        </div>

        <h2 className="text-slate-100 font-bold text-xl mt-4">Adicionar Tarefa</h2>
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
