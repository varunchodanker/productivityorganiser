import { Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const NavBar = () => {
    return (
            <AppBar position='sticky' className = "navAppBar">
                    <Toolbar disableGutters className = "navToolBar">
                        <Typography variant = 'h5' sx = {{ml: '3vw', flexGrow: 1}}
                        >
                            Productivity Organiser
                        </Typography>
                        <Button className = "accountButton" variant = "outlined" color = "inherit" sx = {{mr: '1.2vw', size: "small"}}>
                            <Typography variant = 'h6'>
                                Login
                            </Typography>
                        </Button>
                        <Button className = "accountButton" variant = "outlined" color = "inherit" sx = {{mr: '1.2vw', size: "small"}}>
                            <Typography variant = 'h6'>
                                Signup
                            </Typography>
                        </Button>
                    </Toolbar>
            </AppBar>
    );    
}

export default NavBar;