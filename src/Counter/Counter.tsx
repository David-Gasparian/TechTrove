import { FC, useState } from "react";
import './Counter.scss';

export const Counter: FC = () => {
    const [count, setCount] = useState(0)

    return (
        <div className='couner'>
            <h1>{count}</h1>
            <button onClick={() => setCount(prev => prev + 1)}>
                click
            </button>
        </div>
    )
}
