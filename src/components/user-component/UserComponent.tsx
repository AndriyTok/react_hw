import React, {FC} from 'react';
import {IUser} from "../models/IUser";
import styles from "./UserComponent.module.css"

interface IProps{
    user:IUser;
    getPosts:(id:number)=> void;
}
const UserComponent:FC<IProps> = ({user, getPosts}) => {
    return (
        <div className={styles.user_container}>
            {user.id}. {user.firstName} {user.lastName} <button onClick={() => {
                getPosts(user.id);
        }}>show posts of this user</button>
        </div>
    );
};

export default UserComponent;