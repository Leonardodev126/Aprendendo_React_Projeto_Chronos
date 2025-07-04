import { useState } from "react";
import { initialTaskState } from "./initialTaskState";
import { TaskContext } from "./TaskContext";


type TaskContextProviderProps = {
  children: React.ReactNode;
}

// Componente Provider
export function Provider({ children }: TaskContextProviderProps) {

  const [ state, setState ] = useState(initialTaskState);

  return (
    <TaskContext.Provider value={{ state, setState }}>
      {children}
    </TaskContext.Provider>
  )
}
