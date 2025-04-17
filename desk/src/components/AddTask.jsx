import React from "react";

const AddTask = () => {
  return (

    <form className="bg-slate-200 p-6 rounded-md mt-2 mb-2 flex flex-col gap-2">
    <input 
    type="text" 
    placeholder="Digite o título da tarefa!" 
    className="border border-slate-300 focus:border-sky-400 px-4 py-2">  
    </input>

    <textarea placeholder="Digite a descrição da tarefa!" className="w-full h-24"></textarea>
  </form>
  )
};

export default AddTask;
