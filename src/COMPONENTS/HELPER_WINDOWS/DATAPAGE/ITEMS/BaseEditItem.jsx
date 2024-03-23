import { useAxiosFunctions } from "../../../../SUPPORT/SERVER/useAxiosFunctions";
import { Box, Button } from "@mui/material";
import { Header } from "../HEADER/Header";
import { InputX } from "../../../../SUPPORT/STYLES/UniqueStyle";

export const BaseEditItem = ({ back, updateAction, selectedSolider, dataModul, data }) => {
    const {update} = useAxiosFunctions();
  
      return (
        <Box>
            <Box sx={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:'20px', padding:'20px', height:'100%', overflow:'auto'}}>
            {data.map((item, index) => (
                <InputX
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