import React from 'react';
import usePrevious from '../customHooks/usePrevious';
import useToogle from "../customHooks/useToogle";

const ButtonComponent2: React.FC = () => {
    const [value_to_be_changed, toggle] = useToogle(true);
    const previousValue = usePrevious(value_to_be_changed);

    return (
        <div>
            <button onClick={toggle}>Toggle Value</button>
            <h2>Current Value: {value_to_be_changed.toString()}</h2>
            <h2>Previous Value: {previousValue !== undefined ? previousValue.toString() : 'N/A'}</h2>
        </div>
    );
};

export default ButtonComponent2;
