import React from "react";
import { Stack, TextField, InputAdornment } from "@mui/material";

import { useState } from "react";

export const MuiTextField = () => {

   const [value, setValue] = useState('')

  return (
    <div>
      <Stack spacing={4}>
        <Stack direction="row" spacing={2}>
          <TextField label="Name" variant="outlined"></TextField>
          <TextField label="Name" variant="filled"></TextField>
          <TextField label="Name" variant="standard"></TextField>
        </Stack>

        <Stack direction="row" spacing={2}>
          <TextField
            label="Small Secondary"
            size="small"
            color="secondary"
          ></TextField>
        </Stack>

        <Stack direction="row" spacing={2}>
          <TextField label="From Input" required value={value} onChange={(e)=> setValue(e.target.value)} error={!value}  helperText={!value ? 'Required' : "Do not sahre your password with anyone"}></TextField>
          <TextField
            type="password"
            label="password"
            helperText="Do not share your password anyone"
            disabled
          ></TextField>

          <TextField
            label="Read only"
            inputProps={{ readOnly: true }}
            required
          ></TextField>
        </Stack>

        <Stack direction="row" spacing={2}>
          <TextField label="amount" InputProps={{
            startAdornment: <InputAdornment position='start'>$</InputAdornment>,
          }}></TextField>
          <TextField label="Weight" InputProps={{
            endAdornment: <InputAdornment position='end'>kg</InputAdornment>,
          }}></TextField>
        </Stack>
      </Stack>
    </div>
  );
};
