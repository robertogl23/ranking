import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import useSelectReto from '../hooks/useSelectReto';
const SelectRetos = () => {
    const {reto,handleChange} = useSelectReto();
    return (
        <FormControl fullWidth={true}>
            <InputLabel id="demo-simple-select-label">Reto</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={reto}
                label="Retos"
                onChange={handleChange}
            >
                <MenuItem value={10}>Análisis de datos</MenuItem>
                <MenuItem value={20}>Ciberseguridad</MenuItem>
                <MenuItem value={30}>Inteligencia artificial</MenuItem>
            </Select>
        </FormControl>
    )
}

export default SelectRetos
