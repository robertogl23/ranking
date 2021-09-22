import { Typography } from "@mui/material"
import styles from '../css/tablero.module.css';

const Position = ({indice,puntos}) => (
    <div className={`${styles.box_lugar} ${styles.b_right}`}>              
        <Typography variant="body2" component="header">
            {puntos === 0 ? '--' : indice + 1}
        </Typography>
    </div>
)

export default Position
