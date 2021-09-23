import { Typography } from '@mui/material';
import styles from '../css/tablero.module.css';
import Box from './Box';
const names = [
    {
        width:'40%',
        value:'Lugar',
        line:true
    },
    {
        width:'100%',
        value:'Nombre',
        line:true
    },
    {
        width:'100%',
        value:'Puntaje',
        line:false
    },
]
const ColumnsNames = () =>(
    <div className={styles.colums}>
        {
            names.map((name,i) => (
                <Box width={name.width} line={name.line} key={i}>
                    <Typography variant="p" component="header">
                        {name.value}
                    </Typography>
                </Box>
            ))
        } 
    </div>
)


export default ColumnsNames
