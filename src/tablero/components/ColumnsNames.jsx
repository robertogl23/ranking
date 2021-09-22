import { Typography } from '@mui/material';
import styles from '../css/tablero.module.css';

const ColumnsNames = () =>(
    <div className={styles.colums}>
        <div className={`${styles.box_lugar} ${styles.b_right}`}>              
            <Typography variant="p" component="header">
                Lugar
            </Typography>
        </div>
        <div className={`${styles.box} ${styles.b_right}`}>                   
            <Typography variant="p" component="header">
                Nombre
            </Typography>
        </div>
        <div className={`${styles.box}`}>       
            <Typography variant="p" component="header">
                Puntaje
            </Typography>
        </div>
    </div>
)


export default ColumnsNames
