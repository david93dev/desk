import { ChevronLeftIcon } from "lucide-react";
import React from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Title from "../components/Title";

const TaskPage = () => {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  const navigate = useNavigate();

  return (
    <div className="w-screen min-h-screen bg-sky-900 p-6 flex justify-center">
      <div className="w-[700px] space-y-4">
        <div className="flex justify-between relative mb-6">
          <button
            onClick={() => navigate(-1)}
            className="text-slate-100 absolute left-0 top-0 bottom-0"
          >
            <ChevronLeftIcon />
          </button>
          <Title>Detalhes da Tarefa</Title>
        </div>

        <div className="bg-slate-200 p-4 rounded-md break-words">
          <h2 className="text-slate-800 text-xl font-bold mb-3">{title}</h2>
          <p className="text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default TaskPage;
