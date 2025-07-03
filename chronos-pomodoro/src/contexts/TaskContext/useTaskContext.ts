import { useContext } from "react";
import { TaskContext } from "./TaskContext";

// Função para usar o useContext
export function useTaskContext() {
  return useContext(TaskContext);
}