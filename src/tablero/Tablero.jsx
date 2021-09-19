import { useContext } from "react";
import RankingContext from "../ranking/context/RankingContext";
import Card from '@mui/material/Card';
import styles from './css/tablero.module.css';
import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";

const Tablero = () => {
    const {rankingState} = useContext(RankingContext)
    return (
        <div className={styles.layout_tablero}>
            <Card sx={{ minWidth: '100%' }}>
                <Box sx={{display:'flex', height:'3rem',justifyContent:'center',alignItems:'center'}}>
                    <Typography variant="h5" component="h5">
                        h1 Heading
                    </Typography>
                </Box>
                <Divider/>
                <h4>holis</h4>
            </Card>
        </div>
    )
}

export default Tablero;
