import MesAlertes from "./MesAlertes"
import { Box } from "@mui/material"

export default function Home() {
  
  return (
    <Box sx={{
      width: '1100px',
      backgroundColor: 'white',
      minHeight: '250px',
      boxShadow: '0 2px #ddd'
    }}>
        <MesAlertes />
    </Box>
  )
}
