import { Divider, Typography } from "@mui/material"
import styles from '../css/tablero.module.css';

const RowsData = ({data}) => {
    return (
        <>
        {data?.map((d,i) => (
            <>
            <div className={styles.colums}>
                <div className={`${styles.box_lugar} ${styles.b_right}`}>              
                    <Typography variant="inherit" component="header">
                        {d.puntos === 0 ? '--' : i + 1}
                    </Typography>
                </div>
                <div className={`${styles.box} ${styles.b_right}`}>                   
                    <Typography variant="inherit" component="header">
                        {d.nombre}
                    </Typography>
                </div>
                <div className={`${styles.box}`}>       
                    <Typography variant="inherit" component="header">
                        {d.puntos}
                    </Typography>
                </div>
            </div>
            <Divider/>
            </>
        ))}
       </>
    )
}

export default RowsData
