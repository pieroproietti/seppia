/**
 * sepia: a first access system configurator
 * author: Piero Proietti
 * mail: piero.proietti@gmail.com
 */
import * as React from 'react';
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


/**
 *
 * @returns
 */
export default function SelectDataNumers() {
  const [dataNumers, setDataNumers] = React.useState('');

  let elem = ''

  const handleChange = (event: SelectChangeEvent) => {
    setDataNumers(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="select-data-numbers-input-label">Data/Number</InputLabel>
        <Select
          labelId="select-data-numers-label"
          id="select-data-numbers"
          value={dataNumers}
          label="Data/Numbers"
          onChange={handleChange}
        >
          <MenuItem value={1}>br</MenuItem>
          <MenuItem value={2}>it</MenuItem>
          <MenuItem value={3}>us</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

