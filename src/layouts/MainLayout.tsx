import React from 'react';
import MenuComponent from "../components/MenuComponent/MenuComponent";
import styles from "./MainLayout.module.css"

const MainLayout = () => {
    return (
        <div className={styles.mainDiv}>
            <MenuComponent/>
            main layout
        </div>
    );
};

export default MainLayout;