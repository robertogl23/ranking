import styles from '../css/tablero.module.css';
import { Divider, Paper } from '@mui/material';
import Title from './Title';
import RowsData from './RowsData';
import ColumnsNames from './ColumnsNames';
import { memo } from 'react';

const Tablero = ({ data, title }) => (
  <div className={styles.layout_tablero}>
    <Paper
      elevation={12}
      sx={{
        minWidth: '100%',
        background: '#161b22',
        color: '#fff',
      }}>
      <Title title={title} />
      <Divider color="#9b9b9b" />
      <ColumnsNames />
      <Divider color="#9b9b9b" />
      <RowsData data={data} />
    </Paper>
  </div>
);

export default memo(Tablero);
