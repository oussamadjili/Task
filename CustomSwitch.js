import { styled } from '@mui/material/styles';
import { Switch } from '@mui/material';

const CustomSwitch = styled(Switch)(({ theme }) => ({
    width: 45,
    height: 14,
    padding: 0,
    display: 'flex',
    '& .MuiSwitch-switchBase': {
      padding: 2,
      '&.Mui-checked': {
        transform: 'translateX(31.5px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: "#02b894",
        },
      },
    },
    '& .MuiSwitch-thumb': {
      boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
      width: 10,
      height: 10,
      borderRadius: 6,
    },
    '& .MuiSwitch-track': {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor: "red",
      boxSizing: 'border-box',
    },
  }));

export default CustomSwitch;
