import React from "react";
import { Typography } from "@mui/material";
export const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3">h3 Heading</Typography>
      <Typography variant="h4" component="h1" gutterBottom>h4 Heading</Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>
      <Typography variant="subtitle1"> Sub title 1</Typography>
      <Typography variant="subtitle2">Sub title 2</Typography>
      <Typography variant="body1"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam necessitatibus iure recusandae reprehenderit vitae incidunt tempora doloremque distinctio, culpa corrupti! </Typography>
      <Typography variant="body2"> 
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae iste dolorem perspiciatis at magnam illo quo saepe laborum debitis blanditiis amet voluptatem possimus, hic dicta nemo unde asperiores dolorum quos.
      </Typography>
    </div>
  );
};
