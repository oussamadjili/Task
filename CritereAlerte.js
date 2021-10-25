import { Box } from '@mui/system';
import { Typography, Stack, TextField, Select, FormControl, MenuItem} from '@mui/material';

const CritereAlerte = () => {
  return (
      <>
        <Stack spacing={1} sx={{background:"#fff", color: "rgb(101, 109, 109)", padding:"10px 60px 60px 60px"}}>
            <Stack spacing={1}>
                <Typography sx={{fontSize:"15px"}} variant="h6">Mots clés, compétences, métier</Typography>
                <TextField sx={{width:"100%"}} placeholder="Mots clés, compétences, métiers" size="small" variant="standard"/>
            </Stack>
            <Stack spacing={1}>
                <Typography sx={{fontSize:"15px"}} variant="h6">Lieu de résidence</Typography>
                <TextField sx={{width:"100%"}} placeholder="Lieu de résidence" size="small" variant="standard"/>
            </Stack>
            <Box>
                <Typography sx={{fontSize:"16px"}} variant="h6">Métier / Fonction</Typography>
                <Box sx={{minWidth: "100%"}}>
                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                        <Select >
                            <MenuItem value={10}>métiers</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Box>
            <Box>
                <Typography sx={{fontSize:"16px"}} variant="h6">Expérience demandée</Typography>
                <Box sx={{minWidth: "100%"}}>
                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                        <Select>
                            <MenuItem value={10}>experiences</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Box>    
            <Box>
                <Typography sx={{fontSize:"16px"}} variant="h6">Niveau de poste</Typography>
                <Box sx={{minWidth: "100%"}}>
                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                        <Select>
                            <MenuItem value={10}>niveau de poste</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Box>    
            <Box>
                <Typography sx={{fontSize:"16px"}} variant="h6">Secteurs d'activité</Typography>
                <Box sx={{minWidth: "100%"}}>
                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                        <Select>
                            <MenuItem value={10}>secteurs</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Box>    
            <Box>
                <Typography sx={{fontSize:"16px"}} variant="h6">Niveau de formation</Typography>
                <Box sx={{minWidth: "100%"}}>
                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                        <Select>
                            <MenuItem value={10}>niveau de formations</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Box>
          

        </Stack>
    </>
  );
}

export default CritereAlerte;
