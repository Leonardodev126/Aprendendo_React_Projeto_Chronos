import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import type { HomeProps } from "../../pages/Home";



export function MainForm({ estado, mudarEstado }: HomeProps) {

  function handleClick() {
    mudarEstado(prevState => {
      return {
        ...prevState,
        config: {
          ...prevState.config,
          workTime: 34,
        },
        formattedSecondsRemaining: "23:34",
      }
    })
  }

  return (
    <form className='form' action=''>
      <div>
        <button type="button" onClick={handleClick}>Clicar</button>
      </div>
      <div className='formRow'>
        <DefaultInput
          labelText='task'
          id='input'
          type='text'
          required
          placeholder='Digite algo'
        />
      </div>

      <div className='formRow'>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>

      <div className='formRow'>
        <Cycles />
      </div>

      <div className='formRow'>
        <DefaultButton icon={<PlayCircleIcon />} color='green' />
      </div>
    </form>
  );
}
