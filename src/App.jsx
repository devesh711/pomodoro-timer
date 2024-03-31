import { useState } from 'react'
import './App.css'
import Break from './components/Break/Break'
import Session from './components/Session/Session'
import Controls from './components/Controls/Controls'
import { useStateValue } from './contexts/stateProvider';
import { useClockify } from './hooks/useClockify';
import Todo from './components/Tasks/Todo'

function App() {
  const [{timerLabel}] = useStateValue();
  const clockifiedValue = useClockify();

  return (
    <div className='bg-[#ffffffae] sm:h-[80vh] sm:w-[130vh] flex sm:flex-row sm:justify-evenly sm:items-start  items-center rounded-lg h-[200vh] my-8 w-[60vh] flex-col'>
      <div className='text-center flex flex-col ite px-16'>
      <h2 className="text-[#0e2946] font-normal mt-16 text-2xl">Pomodoro</h2>
      <h3 id='timer-label ' className='text-[#0e2946] mt-6'>{timerLabel}</h3>
      <h1 id='time-left' className='text-[#212121] mt-8' >{clockifiedValue}</h1>
      <Controls />
      <div className="flex mt-6">
        <Break />
        <Session />
      </div>
    </div>
    <Todo/>
    </div>
  );
}

export default App 

