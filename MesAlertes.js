import React from 'react';
import Head from 'next/head'
import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPencilAlt, faSearch, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Button, Box, IconButton, Stack, Typography, MenuItem,  Select, FormControl, Modal, FormControlLabel} from '@mui/material'
import EmailSharpIcon from '@mui/icons-material/EmailSharp';
import NouvelleAlerteEmploi from './NouvelleAlerteEmploi'
import CustomSwitch from './CustomSwitch';


const MesAlertes = () => {
    const [showNouvelle, setShowNouvelle] = useState(false);
    const show = showNouvelle && <NouvelleAlerteEmploi close={() => setShowNouvelle(false)}/>





    return (

        <>
            <Head>
                <title>Alertes emploi</title>
            </Head>



            <Box sx={{
                  padding: '20px 30px',
                  borderBottom: '1px solid #e6e9ed!important',
            }}>
                <Box sx={{
                      float: 'left',
                    }}>
                    <Typography variant="h1" sx={{fontSize:"30px",color:"#333333"}}>Mes alertes emploi</Typography>
                </Box>
                <Box sx={{
                      display: 'flex',
                      flex: '0 1 35%',
                      alignItem: 'flex-start',
                      justifyContent: 'flex-end',
                }}>
                    <Button sx={{
                        backgroundColor: '#037DBC',
                        fontSize: '13px',
                        margin: '10px 0px 0px',
                        padding: '7px 20px',
                        lineHeight: '16px',
                        boxShadow: 'inset 0 -2px 0 rgb(0 0 0 / 20%)',
                        float: 'right',
                        }} variant="contained" onClick={() => setShowNouvelle(true)}>Nouvelle Alerte emploi</Button>
                </Box>
            </Box>
            



            
            <Box sx={{padding: '10px 30px 60px 30px'}}>
                <Typography paragraph={true} sx={{color: '#333333'}}>Retrouvez toutes les Alertes emploi sauvegardées, lancez la recherche en cliquant
                    sur le titre de l'alerteet restez informé des nouvelles offres d'emploi correspondant à vos recherches.
                </Typography>

                <Stack spacing={40} direction="row">
                <Stack direction="row">
                        <Button sx={{color:"#02b894"}} >web dev</Button>
                        <IconButton sx={{color:"#02b894", fontSize:"18px", marginBottom:"2px"}} aria-label="Search">
                            <FontAwesomeIcon icon={faSearch} />
                        </IconButton>
                </Stack>
                    <Stack spacing={5.5} direction="row">
                        <Stack sx={{marginTop:"16px"}} spacing={2} direction="row">
                        <EmailSharpIcon sx={{fontSize:"14px", marginTop:"4px"}} />
                        <Typography paragraph={true} sx={{color:"#333333", fontSize:"14px"}}>employee@gmail.com</Typography>
                        </Stack>
                        
                    
                        <Box sx={{minWidth: 180}}>
                            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                            <Select>
                                <MenuItem value={10}>Hebdomadaire</MenuItem>
                                <MenuItem value={20}>Quotidienne</MenuItem>
                                <MenuItem value={30}>Mensuelle</MenuItem>
                                <MenuItem value={40}>Bimensuelle</MenuItem>
                            </Select>
                            </FormControl>
                        </Box>
                        
                        <FormControlLabel
                            control={<CustomSwitch defaultChecked />}
                            label=""
                            labelPlacement="end"
                        />
                        

                        <Stack direction="row">
                        <IconButton sx={{ fontSize:"16px", marginBottom:"2px"}} aria-label="Edit">
                            <FontAwesomeIcon icon={faPencilAlt} />
                        </IconButton>
                        <IconButton sx={{fontSize:"16px", marginBottom:"2px"}} aria-label="Delete">
                            <FontAwesomeIcon icon={faTrashAlt} />
                        </IconButton>
                        </Stack>
                        
                        </Stack>
                    </Stack>
            </Box>
            <Modal sx={{overflow:'scroll'}} open={showNouvelle} onClose={() => setShowNouvelle(false)}>{show}</Modal>    
            
        </>
  );
}

export default MesAlertes;
