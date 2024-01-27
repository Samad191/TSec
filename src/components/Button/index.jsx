import React from "react";
import Button from "@mui/material/Button";

const RoundedButton = ({ label, onClick }) => {
  return (
    <Button
    //   variant="contained"
      color="primary"
      sx={{ borderRadius: "30px", color: 'black', backgroundColor: '#99f524', padding: '1rem' }}
      onClick={onClick}
      
    >
      {label}
    </Button>
  );
};

export default RoundedButton;
