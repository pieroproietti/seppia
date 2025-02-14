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
export default function SelectLanguage() {
  const [lang, setLang] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setLang(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <InputLabel id="input-label-id">Language</InputLabel>
      <FormControl fullWidth>
        <Select
          labelId="label-id"
          id="lang-select-language"
          value={lang}
          label="Language"
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
