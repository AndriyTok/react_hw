import React, {FC} from 'react';

interface IProps{
    name:string;
    children?:React.ReactNode;
    img:string;
}
const SimpsonComponent:FC <IProps> = ({name, children, img}) => {
    return (
        <div>
            <h2>{name}</h2>
            <img src={img} alt={name}/>
            <p>{children}</p>
        </div>
    );
};

export default SimpsonComponent;