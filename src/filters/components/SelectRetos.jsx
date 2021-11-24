import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import useSelectReto from '../hooks/useSelectReto';
const SelectRetos = () => {
  const { handleChange } = useSelectReto();
  return (
    <FormControl fullWidth={true}>
      <InputLabel id="demo-simple-select-label">Reto</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Retos"
        onChange={handleChange}
        defaultValue={10}>
        <MenuItem value={10}>Análisis de datos</MenuItem>
        <MenuItem value={20}>Ciberseguridad</MenuItem>
        <MenuItem value={30}>Inteligencia artificial</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectRetos;
