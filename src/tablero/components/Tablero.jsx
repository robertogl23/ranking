import Card from '@mui/material/Card';
import styles from '../css/tablero.module.css';
import { Divider } from "@mui/material";
import useSortData from "../hooks/useSortData";
import Title from './Title';
import RowsData from './RowsData';
import ColumnsNames from './ColumnsNames';
import { memo } from 'react';

const Tablero = ({data}) => {
    const {sortData} = useSortData({data})
    return (
        <div className={styles.layout_tablero}>
            <Card sx={{ minWidth: '100%' }}>
                <Title title={'hols'}/>
                <Divider/>
                <ColumnsNames/>
                <Divider/>
                <RowsData data={sortData}/>
            </Card>
        </div>
    )
}

export default memo(Tablero);
