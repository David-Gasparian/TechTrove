import { FC, useState } from "react";
import styles from './Counter.module.scss';

export const Counter: FC = () => {
    const [count, setCount] = useState(0)

    return (
        <div className={styles.counter}>
            <h1>{count}</h1>
            <button onClick={() => setCount(prev => prev + 1)}>
                click
            </button>
        </div>
    )
}
