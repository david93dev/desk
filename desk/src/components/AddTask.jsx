import React, { useState } from "react";

const AddTask = ({ onAddTaskSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = () => {
    if (!title.trim() || !description.trim() || !date || !time) {
      alert("Preencha todos os campos!");
      return;
    }

    onAddTaskSubmit(title, description, date, time);
    setTitle("");
    setDescription("");
    setDate("");
    setTime("");
  };

  return (
    <div className="bg-slate-200 p-6 rounded-md flex flex-col gap-2">
      <input
        type="text"
        placeholder="Digite o título da tarefa!"
        className="border border-slate-300 focus:border-sky-400 focus:outline-none px-4 py-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Digite a descrição da tarefa!"
        className="border border-slate-300 focus:border-sky-400 focus:outline-none px-4 py-2 h-32"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        type="date"
        className="border border-slate-300 focus:border-sky-400 focus:outline-none px-4 py-2 w-full"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <input
        type="time"
        className="border border-slate-300 focus:border-sky-400 focus:outline-none px-4 py-2 w-full"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />

      <button
        onClick={handleSubmit}
        className="bg-sky-950 hover:bg-sky-600 text-white p-2 rounded-md"
      >
        Adicionar
      </button>
    </div>
  );
};

export default AddTask;
