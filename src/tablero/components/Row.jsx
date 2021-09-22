import { Divider } from '@mui/material';
import styles from '../css/tablero.module.css';
import BoxData from "./BoxData";
import FullName from './FullName';
import Position from "./Position";


const Row = ({dataUser,i}) => (
    <div>
        <div className={styles.colums} >
            <Position indice={i} puntos={dataUser.puntos}/>
            <FullName name={dataUser.nombre}/>
            <BoxData score={dataUser.puntos}/> 
        </div>
        <Divider/>
    </div>
)

export default Row
