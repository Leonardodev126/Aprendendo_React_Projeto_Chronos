import type { TaskModel } from "./TaskModel"

// Estado como Componente para passar para outros componentes filhos

export type TaskStateModel = {
  tasks: TaskModel[]; // onde vou precxisar dele: Histórico, MainForm
  secondsRemaining: number; // Home, CountDwon, Histórico, MainForm, Button
  formattedSecondsRemaining: string; // Título, CountDown
  activeTask: TaskModel | null; // CountDwon, Histórico, MainForm, Button
  currentCycle: number; // bolinhas das atividades de trabalho e descanso de 1 a 8 - Home
  config: {
    workTime: number; // MainForm
    shortBreakTime: number; // MainForm
    longBreakTime: number; // MainForm
  }
}

