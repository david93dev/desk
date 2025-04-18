// src/pages/DayPage.jsx
import { useParams, Link } from "react-router-dom";
import Tasks from "../components/Tasks";
import Title from "../components/Title";

const DayPage = ({ tasks, onTaskClick, onDeleteTaskClick }) => {
  const { day } = useParams();

  const tasksForThisDay = tasks.filter((task) => {
    const taskDate = new Date(task.date);
    const weekday = taskDate.toLocaleDateString("pt-BR", { weekday: "long" });
    return weekday === day;
  });

  return (
    <div className="w-screen min-h-screen bg-sky-900 p-6 flex justify-center">
      <div className="w-[700px] space-y-4">
        <div className="flex justify-between items-center">
          <Title>Tarefas de {day.charAt(0).toUpperCase() + day.slice(1)}</Title>
          <Link
            to="/"
            className="bg-slate-100 px-3 py-1 rounded hover:bg-slate-300 text-sm"
          >
            Voltar
          </Link>
        </div>

        {tasksForThisDay.length > 0 ? (
          <Tasks
            tasks={tasksForThisDay}
            onTaskClick={onTaskClick}
            onDeleteTaskClick={onDeleteTaskClick}
          />
        ) : (
          <p className="text-slate-100">Nenhuma tarefa para este dia.</p>
        )}
      </div>
    </div>
  );
};

export default DayPage;
