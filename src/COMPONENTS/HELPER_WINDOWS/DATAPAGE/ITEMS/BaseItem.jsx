import { Box, Button } from "@mui/material";
import { InputX } from "../../../../SUPPORT/STYLES/UniqueStyle";
import { Header } from "../HEADER/Header";
import { useEffect } from "react";

export const BaseItem = ({dialogName, back, data, dataModul, selectedSolider}) => {

    return (
    <Box>
        <Box sx={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:'20px', padding:'20px', height:'100%', overflow:'auto'}}>
          {data.map((item, index) => (
          <InputX
          disabled
          key={index}
          label={item.label} 
          value={item.value} 
          name={item.name} 
          onChange={item.action}
          />))}
        </Box>
    </Box>
    )
  };
  