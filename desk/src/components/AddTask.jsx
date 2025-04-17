import React, { useState } from "react";

const AddTask = ({onAddTaskSubmit}) => {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (

    <div className="bg-slate-200 p-6 rounded-md flex flex-col gap-2">
    <input 
    type="text" 
    placeholder="Digite o título da tarefa!" 
    className="border border-slate-300 focus:border-sky-400 focus:outline-none px-4 py-2"
    value={title}
    onChange={(event) => setTitle(event.target.value)}
    />

    <textarea
    placeholder="Digite a descrição da tarefa!" 
    className=" border border-slate-300 focus:border-sky-400 focus:outline-none px-4 py-2 h-32"
    value={description}
    onChange={(event) => setDescription(event.target.value)}
    />

    <button 
    onClick={() => onAddTaskSubmit(title, description)}
    className="bg-sky-800 hover:bg-sky-700 text-white p-2 rounded-md px-4 py-2">Adicionar</button>
  </div>
  )
};

export default AddTask;
