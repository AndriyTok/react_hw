import React, {FC} from 'react';
import styles from './SimpsonComponent.module.css'
interface IProps{
    name:string;
    children?:React.ReactNode;
    img:string;
}
const SimpsonComponent:FC <IProps> = ({name, children, img}) => {
    return (
        <div className={styles.simpson}>
            <h2>{name}</h2>
            <img src={img} alt={name}/>
            <p>{children}</p>
        </div>
    );
};
export default SimpsonComponent;