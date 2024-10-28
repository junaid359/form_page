import React from 'react';
import styles from './Navigation.module.css'; 

const Navigation = () => {
  return (
    <nav className={`${styles.navigation} container`}> {/* Fixed template literal usage */}
      <div className={styles.logo}>
        <img src="/img/Frame.png" alt="Brand Logo" /> 
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navigation;
