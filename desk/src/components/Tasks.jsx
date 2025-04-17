import { ChevronRightIcon } from 'lucide-react';
import { TrashIcon } from 'lucide-react';

const Tasks = ({tasks, onTaskClick, onDeleteTaskClick}) => {
  return (
    <ul className="space-y-4 bg-slate-200 p-5 rounded-md">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2" >
          <button onClick={() => onTaskClick(task.id)} 
          className={`bg-sky-800 w-full hover:bg-sky-700 text-white p-2 rounded-md ${task.isCompleted && 'line-through'}`}>
            {task.title}
            </button>
          <button className="bg-sky-800  hover:bg-sky-700 text-white p-2 rounded-md">
            <ChevronRightIcon />
          </button >
          <button onClick={() => onDeleteTaskClick(task.id)} 
          className="bg-sky-800  hover:bg-sky-700 text-white p-2 rounded-md">
            <TrashIcon />
          </button>
        </li>
      ))}    
    </ul>
    
  )
}

export default Tasks