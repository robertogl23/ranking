import { Typography } from '@mui/material';
import styles from '../css/tablero.module.css';

const ColumnsNames = () => {
    return (
        <div className={styles.colums}>
            <div className={`${styles.box_lugar} ${styles.b_right}`}>              
                <Typography variant="inherit" component="header">
                    Lugar
                </Typography>
            </div>
            <div className={`${styles.box} ${styles.b_right}`}>                   
                <Typography variant="inherit" component="header">
                    Nombre
                </Typography>
            </div>
            <div className={`${styles.box}`}>       
                <Typography variant="inherit" component="header">
                    Puntaje
                </Typography>
            </div>
        </div>
    )
}

export default ColumnsNames
