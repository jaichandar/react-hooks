import { memo, useEffect } from 'react';

const Input = (props) => {
    const { input, handleInputChange } = props;
    
    useEffect(() => {
        console.log('input change useEffect');
    }, [input]);

    return (
        <input
            className='p-2 m-2'
            value={input}
            onChange={handleInputChange}
        />
    )
}

export default memo(Input);
