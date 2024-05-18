import { memo } from 'react'

const Counter = (props) => {
    const { counter, handleButtonChange } = props;
    return (
        <div className='border p-2'>
            <p className='text-center bg-danger text-white p-2'>Usestate Hook</p>
            <p>{counter}</p>
            <button onClick={() => handleButtonChange('increment')}>Increment</button>
            <button onClick={() => handleButtonChange('decrement')}>Decrement</button>
        </div>
    )
}

export default memo(Counter);