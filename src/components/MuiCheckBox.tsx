
import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Checkbox,
  FormControlLabel,
   FormGroup,
  FormHelperText
} from "@mui/material";

import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

import { useState } from "react";
export const MuiCheckBox = () => {
    const [acceptTnc, setAcceptTnc] = useState(false)

    const [skills, setSkills] = useState<string[]>([])

    console.log(skills)

    const handleChange =(event: React.ChangeEvent<HTMLInputElement>) => {
        setAcceptTnc(event.target.checked)
    }

    const handleSkillChange =(event: React.ChangeEvent<HTMLInputElement>) =>{
        const index= skills.indexOf(event.target.value)
       if(index === -1) {
        setSkills([...skills, event.target.value])
       } else{
        setSkills(skills.filter((skill) => skill !== event.target.value))
       }
    }

  return (
    <Box>
        <Box>
            <FormControlLabel label="i accept terms and conditions" control={<Checkbox checked={acceptTnc} onChange={handleChange} />}  />

        </Box>
        <Box>
            <Checkbox icon={ <BookmarkBorderIcon /> }  checkedIcon={<BookmarkIcon />} checked={acceptTnc} onChange={handleChange} ></Checkbox>
        </Box>

<Box>
    <FormControl error>
        <FormLabel>Skills</FormLabel>
        <FormGroup row>
        <FormControlLabel label="Html" control={<Checkbox value="html" checked={skills.includes('html')} onChange={handleSkillChange} />}  />

        <FormControlLabel label="CSS" control={<Checkbox size="small" color="secondary"  value='css' checked={skills.includes('css')} onChange={handleSkillChange} />}  />

        <FormControlLabel label="Javascript" control={<Checkbox value='javascript' checked={skills.includes('javascript')} onChange={handleSkillChange} />}  />
        </FormGroup>
        <FormHelperText >Invalid Selection</FormHelperText>
    </FormControl>
</Box>

    </Box>
  )
}
