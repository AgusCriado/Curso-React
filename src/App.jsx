import './App.css'
import { TextField } from '@mui/material'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

function App() {
  
  return (
 
<Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }} noValidat  autoComplete="off">
   
  <div>
  <TextField required id="outlined-required" label="Nombre"  defaultValue="Ej: Agustin" />
  <TextField required id="outlined-required" label="Apellido" defaultValue="Ej: Criado"/>
  <TextField required id="outlined-required" label="Correo electronico" />
  </div>
  <Button variant="contained" endIcon={<SendIcon />}>Enviar</Button>
  </Box>

  )
}



export default App
