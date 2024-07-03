import React, {FC} from 'react';
import useToogle from "../customHooks/useToogle";

const ButtonComponent:FC = () => {
    let [value_to_be_changed,toogle] = useToogle(true);

    return (
        <div>
            <button onClick={toogle}>Toogle value</button>
            <h2>{value_to_be_changed.toString()}</h2>
        </div>
    );
};

export default ButtonComponent;