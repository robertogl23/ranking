import styles from '../css/filters.module.css'
import { TextField } from '@mui/material'
import SelectRetos from './SelectRetos'

const SearchByName = () => {
    return (
        <div className={`f ${styles.filter_1}`}>
            <div className={styles.input_search}>
                <TextField 
                        id="outlined-basic" 
                        label="Buscar alumno..." 
                        variant="outlined" 
                        fullWidth={true}
                />
            </div>
            <div className={styles.select_retos}>
                <SelectRetos/>
            </div>
        </div>
    )
}

export default SearchByName
