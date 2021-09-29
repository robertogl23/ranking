import styles from '../css/tablero.module.css';
import { Divider,Paper } from "@mui/material";
import Title from './Title';
import RowsData from './RowsData';
import ColumnsNames from './ColumnsNames';
import { memo } from 'react';

const Tablero = ({data,title}) =>(
    <div className={styles.layout_tablero}>
        <Paper elevation={3} sx={{ minWidth: '100%' }}>
            <Title title={title}/>
            <Divider/>
            <ColumnsNames/>
            <Divider/>
            <RowsData data={data}/>
        </Paper>
    </div>
)


export default memo(Tablero);
