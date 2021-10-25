import {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown, faSortUp, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Box } from '@mui/system';
import { Button, Typography, IconButton, Stack, TextField, Select, FormControl, MenuItem, FormControlLabel} from '@mui/material';
import CritereAlerte from './CritereAlerte';
import CustomSwitch from './CustomSwitch';


const NouvelleAlerteEmploi = ({close}) => {

  const [showCritere, setShowCritere] = useState(false)
  const showCritereAlerte = showCritere && <CritereAlerte />
  const afficherOuMasquer = showCritere ? (
    <Box>
      <Stack direction="row">
        <IconButton onClick={() => setShowCritere(false)} sx={{ fontSize:"18px", marginBottom:"2px"}} aria-label="SortUp">
          <FontAwesomeIcon icon={faSortUp} />
        </IconButton>
        <Typography sx={{fontSize:"22px"}} variant="h4">Masquer les critère de l'alerte:</Typography>
      </Stack>
    </Box>
  ) : (
    <Box sx={{padding:"0px 0px 60px 0px"}}>
      <Stack direction="row">
        <IconButton onClick={() => setShowCritere(true)} sx={{ fontSize:"18px", marginBottom:"2px"}} aria-label="SortDown">
          <FontAwesomeIcon icon={faSortDown} />
        </IconButton>
        <Typography sx={{fontSize:"22px"}} variant="h4">Afficher les critère de l'alerte:</Typography>
      </Stack>
    </Box>
  )
  

  return (
    <Box sx={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: 'translate(-50%, -50%)',
      display: "flex",
    }} >


        <Box sx={{
            width: "600px",
            backgroundColor: "#ffffff",
            height: "450px",
        }}>


          <Box sx={{
              padding: "20px 30px",
              backgroundColor: "#434a54",
              color: "#fff",
          }}>
            <Box sx={{float: 'left'}}>
              <Typography sx={{fontSize: "22px"}} variant="h4">Créer une Alerte emploi</Typography>
            </Box>
            <Box sx={{
                 display: 'flex',
                 flex: '0 1 35%',
                 alignItem: 'flex-start',
                 justifyContent: 'flex-end',
              }}>
              <IconButton onClick={close} sx={{ fontSize:"13px", float: "right", color: "#fff"}} aria-label="Times">
                <FontAwesomeIcon icon={faTimes} />
              </IconButton>
            </Box>
          </Box>



          <Stack spacing={1} sx={{padding: "40px 60px 0px 60px", color: "rgb(101, 109, 109)"}}>
            <Typography sx={{fontSize:"15px"}} variant="h6">Titre</Typography>
            <TextField sx={{width:"100%"}} placeholder="Mots clés, compétences, métiers" size="small" variant="standard"/>
            <Stack spacing={15} direction="row">
              <Box>
                <Typography sx={{fontSize:"15px"}} variant="h6">activer l'alerte mail</Typography>

                <FormControlLabel
                            control={<CustomSwitch defaultChecked />}
                            label=""
                            labelPlacement="start"
                />
              </Box>
              <Box>
                <Typography sx={{fontSize:"15px"}} variant="h6">E-mail *</Typography>
                <Typography sx={{fontSize:"13px"}} paragraph={true}>employee@gmail.com</Typography>  
              </Box>
            </Stack>
        
          
            <Box>
              <Typography sx={{fontSize:"16px"}} variant="h6">Fréquence de l'alerte</Typography>
              <Box sx={{minWidth: "100%"}}>
                <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                  <Select>
                    <MenuItem value={10}>Hebdomadaire</MenuItem>
                    <MenuItem value={20}>Quotidienne</MenuItem>
                    <MenuItem value={30}>Mensuelle</MenuItem>
                    <MenuItem value={40}>Bimensuelle</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>  
        
        
        
            {afficherOuMasquer}
        
          </Stack>

          {showCritereAlerte}
          
            


          <Box sx={{
              padding:"30px 30px",
              width: "100%",
              height: "80px",
              backgroundColor: "rgb(240, 240, 240)",
            }}>
            <Box sx={{float:"right"}}>
              <Button sx={{fontSize:"10px", color:"rgb(101, 109, 109)"}} variant="text" onClick={close}>Annuler</Button>
              <Button sx={{
                  backgroundColor: "#02b894",
                  color:"#fff",
                  padding: "7px 20px",
                  boxShadow: "inset 0 -2px 0 rgb(0 0 0 / 20%)",
                  fontSize:"10px"
                }} variant="contained" color="success">Sauvegarder</Button>
            </Box>
              
          </Box>
            
        </Box>
    </Box>
  );
}

export default NouvelleAlerteEmploi;
