import { Typography } from "@mui/material"
import styles from '../css/tablero.module.css';

const FullName = ({name}) => {
    return (
        <div className={`${styles.box} ${styles.b_right}`}>                   
            <Typography variant="body2" component="header">
                {name}
            </Typography>
        </div>
    )
}

export default FullName
