import React from 'react';
import MenuComponent from "../components/MenuComponent/MenuComponent";
import styles from "./MainLayout.module.css"
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div className={styles.mainDiv}>
            <MenuComponent/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;