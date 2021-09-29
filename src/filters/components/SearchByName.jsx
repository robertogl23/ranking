import styles from '../css/filters.module.css'
import { TextField } from '@mui/material'
import SelectRetos from './SelectRetos'
import useSearchName from '../hooks/useSearchName'

const SearchByName = () => {
    const {handleChange} = useSearchName();

    return (
        <div className={`f ${styles.filter_1}`}>
            <div className={styles.input_search}>
                
                <TextField 
                    id="outlined-basic" 
                    label="Buscar alumno..." 
                    variant="outlined" 
                    fullWidth={true}
                    onChange={handleChange}
                />
            </div>
            <div className={styles.select_retos}>
                <SelectRetos/>
            </div>
        </div>
    )
}

export default SearchByName
