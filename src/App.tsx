import { FC } from "react";
import { Counter } from "./Counter/Counter";
import './index.scss';

export const App: FC = () => {
    return (
        <div className='App'>
           <Counter/>
        </div>
    )
}
