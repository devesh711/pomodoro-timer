import { useState } from 'react'
import './App.css'
import Break from './components/Break/Break'
import Session from './components/Session/Session'
import Controls from './components/Controls/Controls'
import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import { useStateValue } from './contexts/stateProvider';
import { useClockify } from './hooks/useClockify';
import Todo from './components/Tasks/Todo'

function App() {
  const [{timerLabel}] = useStateValue();
  const clockifiedValue = useClockify();

  return (
    <div className='bg-[#ffffffae] h-[80vh] w-[150vh] flex justify-evenly rounded-lg'>
      <div className='text-center flex flex-col items-center justify-center px-16'>
      <h2 className=''>Pomodoro</h2>
      <h3 id='timer-label' className=''>{timerLabel}</h3>
      <h1 id='time-left' className=''>{clockifiedValue}</h1>
      <Controls />
      <div className="timer__controllers">
        <Break />
        <Session />
      </div>
      <ThemeToggle />
    </div>
    <Todo/>
    </div>
  );
}

export default App 

