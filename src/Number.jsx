import { memo, useMemo } from "react";

const Number = (props) => {
    const { number, handleNumberChange } = props;
    const total = useMemo(() => calculateTotal(), [number]);

    function calculateTotal() {
        let result = 0;
        for (let i = 0; i < 1000000; i++) {
            result += i;
        }
        return result;
    }

    return (
        <div>
            <label className="d-block p-1 mx-2">Number *</label>
            <input
                type='number'
                className="p-2 m-2"
                value={number}
                onChange={handleNumberChange}
            />
            <p>Total: {total}</p>
        </div>
    )
}

export default memo(Number);
