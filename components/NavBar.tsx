import { Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ScheduleIcon from '@mui/icons-material/Schedule';

const NavBar = () => {
    return (
            <AppBar position='sticky' className = "navAppBar">
                    <Toolbar disableGutters className = "navToolBar">
                        <ScheduleIcon id = "navIcon" sx = {{position: "relative", left: "1.2vw", fontSize: "2.5em"}} />
                        <Typography className = "navTitle" variant = 'h5' sx = {{mr: "auto", ml: "auto"}}
                        >
                            Productivity Organiser
                        </Typography>
                        <Button className = "accountButton" variant = "outlined" color = "inherit" sx = {{mr: '1.2vw', size: "small"}}>
                            <Typography variant = 'h7'>
                                Login
                            </Typography>
                        </Button>
                        <Button className = "accountButton" variant = "outlined" color = "inherit" sx = {{mr: '1.2vw', size: "small"}}>
                            <Typography variant = 'h7'>
                                Signup
                            </Typography>
                        </Button>
                    </Toolbar>
            </AppBar>
    );    
}

export default NavBar;