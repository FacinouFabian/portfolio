import * as React from 'react'
import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'

type Props = {
  value: string
  onChange: (value: SelectChangeEvent<string>) => void
}

const SelectComponent = ({ value, onChange }: Props) => (
  <Box sx={{ minWidth: 120 }}>
    <FormControl fullWidth>
      <Select value={value} onChange={onChange}>
        <MenuItem value="Web app">Web app</MenuItem>
        <MenuItem value="Web app">Mobile app</MenuItem>
      </Select>
    </FormControl>
  </Box>
)

export default SelectComponent
