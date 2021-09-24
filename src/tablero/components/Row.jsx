import { Divider } from '@mui/material';
import styles from '../css/tablero.module.css';
import FullName from './FullName';
import Position from "./Position";
import Range from './Range';


const Row = ({dataUser,i}) => (
    <>
        <div className={styles.colums} >
            <Position indice={i + 1} puntos={dataUser.puntos}/>
            <FullName name={dataUser.nombre}/>
            <Range score={dataUser.puntos} /> 
        </div>
        <Divider/>
    </>
)

export default Row
