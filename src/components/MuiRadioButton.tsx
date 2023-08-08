import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormHelperText
} from "@mui/material";

import { useState } from "react";

export const MuiRadioButton = () => {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Box>
      <FormControl error>
        <FormLabel id="job-experience-group-label">
          Years of experience
        </FormLabel>

        <RadioGroup
          name="job-experience-group"
          aria-labelledby="job-experience-group-label"
          value={value}
          onChange={handleChange}
          row
        >
          <FormControlLabel
            control={<Radio size="medium" color="secondary" />}
            label="0-2"
            value="0-2"
          ></FormControlLabel>
          <FormControlLabel
            control={<Radio />}
            label="3-5"
            value="3-5"
          ></FormControlLabel>
          <FormControlLabel
            control={<Radio />}
            label="5-7"
            value="5-7"
          ></FormControlLabel>
        </RadioGroup>
        <FormHelperText> Invalid Selected</FormHelperText>
      </FormControl>
    </Box>
  );
};
