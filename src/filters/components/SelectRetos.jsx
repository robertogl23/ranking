import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useState } from 'react';
const SelectRetos = () => {
    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <FormControl fullWidth={true}>
            <InputLabel id="demo-simple-select-label">Retos</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
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
