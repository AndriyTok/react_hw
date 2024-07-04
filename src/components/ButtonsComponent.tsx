import React from 'react';
import ButtonComponent1 from "./ButtonComponent1";
import ButtonComponent2 from "./ButtonComponent2";

const ButtonsComponent = () => {
    return (
        <div>
            <hr/>
            <i>Component 1</i><br/>
            <ButtonComponent1/>

            <hr/>
            <i>Component 2</i><br/>
            <ButtonComponent2/>
        </div>
    );
};

export default ButtonsComponent;