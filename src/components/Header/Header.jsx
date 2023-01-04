import { Typography, Box } from '@mui/material';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';

export const Header = () => {
  return (
    <Box
      component="div"
      sx={{
        maxWidth: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'primary.main',
        boxShadow: '2',
      }}
    >
      <PlaylistAddCheckIcon color="secondary" />
      <Typography
        sx={{ p: '15px', textTransform: 'uppercase', letterSpacing: '0.2rem' }}
        variant="h5"
        component="h1"
        color="secondary"
      >
        Todo List
      </Typography>
    </Box>
  );
};
