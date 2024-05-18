import { useState, useCallback, useRef } from 'react';
import Input from './Input';
import Counter from './Counter';
import Number from './Number';
import Refinput from './Refinput';

function App() {
  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState('');
  const [number, setNumber] = useState(0);
  const inputRef = useRef()

  const handleButtonChange = useCallback((type) => {
    setCounter((prev) => {
      return (type === 'increment') ? prev + 1 : (counter > 0) ? prev - 1 : 0
    });
  }, [counter]);

  const handleInputChange = useCallback((e) => {
    setInput(e.target.value);
  }, [input]);

  const handleNumberChange = useCallback((e) => {
    setNumber(e.target.value);
  }, [number]);

  const handleReset = () => {
    if (inputRef.current?.handleReset) {
      inputRef.current.handleReset();
    }
  }

  return (
    <>
      <p className='bg-primary p-3'>Hello hooks</p>
      <label className='d-block mx-2'>Input *</label>
      <Input
        input={input}
        handleInputChange={handleInputChange}
      />
      <Counter
        counter={counter}
        handleButtonChange={handleButtonChange}
      />
      <p className='text-center p-2 m-2 bg-secondary text-white'>Usememo Hook</p>
      <Number
        number={number}
        handleNumberChange={handleNumberChange}
      />
      <div className='border p-1'>
        <Refinput
          ref={inputRef}
        />
        <button onClick={handleReset}>Reset</button>
      </div>
    </>
  )
}

export default App
