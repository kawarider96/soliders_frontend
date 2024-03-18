import { Box } from "@mui/material";


export default function Videobg() {

    return (
        <Box>
            <video autoPlay muted loop className="video-background" style={{position:'fixed', right:'0px', bottom:'0px', width:'100%', height:'100%', objectFit:'cover', zIndex:-1}}>
                <source src="/opener.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </Box>
    )
}