import styles from "./info.module.css";
import { Row, Col } from "antd";
export default function Info() {

    return (
        
            
        <div className={styles.container}>
        
            <div className={styles.headerContent}>
              <img className={styles.headerAvatar} src="./images/avatar.png" alt="avatar" />
              <h1 className={styles.headerTitle}>Name</h1>
              <hr className={styles.dividerLight}/>
              <p className={styles.headerSlogan}>Slogan</p>
              <hr className={styles.dividerLight}/>
              <p className={styles.headerImage}>Images</p>
            </div>
        
      </div>
        
    );
}