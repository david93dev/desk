import { CheckIcon, ChevronRightIcon } from 'lucide-react';
import { TrashIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

const Tasks = ({tasks, onTaskClick, onDeleteTaskClick}) => {
  const navigate = useNavigate();

  function onSeeDetailsClick(Task) {
    const queryParams = new URLSearchParams();
    queryParams.set("title", Task.title);
    queryParams.set("description", Task.description);
    navigate(`/task?${queryParams.toString()}`);
  }

  
  return (
    <ul className="space-y-4 bg-slate-200 p-5 rounded-md">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2" >

          <button onClick={() => onTaskClick(task.id)} 
          className={`bg-sky-800 w-full hover:bg-sky-700 flex items-center gap-2 text-white p-2 rounded-md ${task.isCompleted && 'line-through'}`}>

            {task.isCompleted && <CheckIcon />}
            {task.title}
            </button>

          <Button onClick={() => onSeeDetailsClick(task)}>
            <ChevronRightIcon />
          </Button >

          <Button onClick={() => onDeleteTaskClick(task.id)}>
            <TrashIcon />
          </Button>
        </li>
      ))}    
    </ul>
    
  )
}

export default Tasks