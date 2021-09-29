import styles from '../css/tablero.module.css';
import Skeleton from '@mui/material/Skeleton';
import { Divider } from '@mui/material';
import StyledBox from './StyledBox';

const Row = () => (
    <>
        <div className={`${styles.colums}`} >
            <StyledBox line={true} width={'40%'} className="f center">
                <Skeleton animation="wave" height={19} width={'60%'}/>
            </StyledBox>
            <StyledBox line={true} width={'100%'} className="f center">
                <Skeleton animation="wave" height={19} width={'80%'}/>
            </StyledBox>
            <StyledBox line={true} width={'39.7%'} className="f center">
                <Skeleton animation="wave" height={19} width={'60%'}/>
            </StyledBox>
        </div>
        <Divider/>
    </>
)

const RowsLoading = () => {
    return (
        <div>
            <Row/>
            <Row/>
            <Row/>
            <Row/>
        </div>
    )
}

export default RowsLoading
