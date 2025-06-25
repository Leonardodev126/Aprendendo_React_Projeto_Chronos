import type { TaskModel } from "./TaskModel"

export type TaskStateModel = {
  tasks: TaskModel[];
  secondsRemaining: number;
  formattedSecondsRemainging: string;
  activeTask: TaskModel | null;
  currentCycle: number; // bolinhas das atividades de trabalho e descanso de 1 a 8
  config: {
    workTime: number;
    shortBreakTime: number;
    longBreakTime: number;
  }
}