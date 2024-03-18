import { Box } from "@mui/material";
import { DonutChart } from "../../COMPONENTS/CHARTS/DonutChart";
import Videobg from "../../COMPONENTS/VIDEO_BACKGROUND/Videobg";

export function Home() {
    return (
        <Box>
            <Videobg/>
            <DonutChart/>
        </Box>
    )
}