import { useState } from 'react'

import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { countAtom, evenSelector } from './store/atoms/count';

function App() {

  return (
    
      <Count />
    
  );
}

function Count() {
  return <div>
    <RecoilRoot>
    <CountRenderer />
    <Buttons />
    </RecoilRoot>
    
  </div>
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);

  return <div>
    {count}

    <EvenCountRender></EvenCountRender>
  </div>
}

function EvenCountRender() {
  const isEven = useRecoilValue(evenSelector);

  return (
    <div>
      {isEven ? "It is even" : null}
    </div>
  )
}

function Buttons() {
  const setCount = useSetRecoilState(countAtom);
  return <div>
    <button onClick={() => {
      setCount(count => count +1)
    }}>Increase</button>

<button onClick={() => {
    setCount(count => count -1)
  }}>Decrease</button>
  </div>

  
}

export default App
