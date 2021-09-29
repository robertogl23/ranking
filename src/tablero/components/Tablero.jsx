import Card from '@mui/material/Card';
import styles from '../css/tablero.module.css';
import { Divider } from "@mui/material";
import Title from './Title';
import RowsData from './RowsData';
import ColumnsNames from './ColumnsNames';
import { memo } from 'react';

const Tablero = ({data,title}) =>(
    <div className={styles.layout_tablero}>
        <Card sx={{ minWidth: '100%' }}>
            <Title title={title}/>
            <Divider/>
            <ColumnsNames/>
            <Divider/>
            <RowsData data={data}/>
        </Card>
    </div>
)


export default memo(Tablero);
