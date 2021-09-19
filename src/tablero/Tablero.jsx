import Card from '@mui/material/Card';
import styles from './css/tablero.module.css';
import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import useFilterType from "./hooks/useFilterType";

const Tablero = ({type}) => {
    const {data} = useFilterType({type})
    return (
        <div className={styles.layout_tablero}>
            <Card sx={{ minWidth: '100%' }}>
                <Box sx={{display:'flex', height:'3rem',justifyContent:'center',alignItems:'center'}}>
                    <Typography variant="h5" component="h5">
                        {type}
                    </Typography>
                </Box>
                <Divider/>
                <div className={styles.colums}>
                    <div className={`${styles.box_lugar} ${styles.b_right}`}>              
                        <Typography variant="inherit" component="header">
                            Lugar
                        </Typography>
                    </div>
                    <div className={`${styles.box} ${styles.b_right}`}>                   
                        <Typography variant="inherit" component="header">
                            Nombre
                        </Typography>
                    </div>
                    <div className={`${styles.box}`}>       
                        <Typography variant="inherit" component="header">
                            Puntaje
                        </Typography>
                    </div>
                </div>
                <Divider/>
                <div>
                    {data?.map(d => (
                        <>
                        <div className={styles.colums}>
                            <div className={`${styles.box_lugar} ${styles.b_right}`}>              
                                <Typography variant="inherit" component="header">
                                    --
                                </Typography>
                            </div>
                            <div className={`${styles.box} ${styles.b_right}`}>                   
                                <Typography variant="inherit" component="header">
                                    {d.nombre}
                                </Typography>
                            </div>
                            <div className={`${styles.box}`}>       
                                <Typography variant="inherit" component="header">
                                    {d.puntos}
                                </Typography>
                            </div>
                        </div>
                        <Divider/>
                        </>
                    ))}
                </div>

            </Card>
        </div>
    )
}

export default Tablero;
