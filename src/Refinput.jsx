import { useEffect, forwardRef, useState, useImperativeHandle, useId } from "react";

const Refinput = (props, ref) => {
    const [randomNum, setRandomNum] = useState(randomNumber())
    const id = useId();

    function randomNumber() {
        if (this) {
            return Math.floor((Math.random() * this)); 
        } else {
            return Math.floor((Math.random() * 10000)); 
        }
    }

    const handleChange = () => {
        setRandomNum(randomNumber.bind(23))
    }

    const handleReset = () => {
        setRandomNum(0);
    }

    useImperativeHandle(ref, () => ({
        handleReset
    }))

    return (
        <div>
            <input 
                ref={ref}
                value={randomNum}
                onChange={handleChange}
            />
        </div>
    )
}

export default forwardRef(Refinput);