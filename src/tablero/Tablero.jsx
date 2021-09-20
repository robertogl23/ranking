import Card from '@mui/material/Card';
import styles from './css/tablero.module.css';
import { Divider } from "@mui/material";
import useFilterType from "./hooks/useFilterType";
import Title from './components/Title';
import RowsData from './components/RowsData';
import ColumnsNames from './components/ColumnsNames';

const Tablero = ({type}) => {
    const {data} = useFilterType({type})
    return (
        <div className={styles.layout_tablero}>
            <Card sx={{ minWidth: '100%' }}>
                <Title title={type}/>
                <Divider/>
                <ColumnsNames/>
                <Divider/>
                <RowsData data={data}/>
            </Card>
        </div>
    )
}

export default Tablero;
