import { Link, NavLink  } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import { Stack, Divider } from '@mui/material'
import { useLocation } from 'react-router-dom'




const Navbar = () => {
    const { logout } = useLogout()
    const { user } = useAuthContext()
    const location = useLocation();


    const handleClick = () => {
        logout()
    }

    // const linkStyle = {
    //     fontFamily: 'Poppins',
    //     fontSize: '1em',

    //     color: '#1aac83',
    
    // }
  
     //style={linkStyle}
    return (
        <header>
            <div className='container'>
                <Stack>
                {location.pathname === '/history' && (<Link to='/'>
                    <h1>History</h1>
                </Link>) }
                {location.pathname === '/configuration' && (<Link to='/'>
                    <h1>Configuration</h1>
                </Link>) }
                {location.pathname === '/' && (<Link to='/'>
                    <h1>TIRM - Information Risk Assessment</h1>
                </Link>) }
                {user && (<nav>
                    
                    <Stack mr={2} direction={'row'} divider={<Divider orientation="vertical" flexItem />} spacing={2} className="navigation">
                  
                    <NavLink  to="/" className="home" exact><h3>Home</h3></NavLink >
                    <NavLink exact to="/history" className="home"><h3>History</h3></NavLink >
                    {user.email === 'valentin@yahoo.com' ? <NavLink  to="/configuration" className="home" exact><h3>Configuration</h3></NavLink > : '' }
               
                    
                    </Stack>
           </nav>
               
             
                )}
                
               

                {/* {!user && (<div>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Signup</Link>
                </div>)} */}
       
                </Stack>
                <nav>
                
                {user && (<div>
                    
                  

                    <span>{user.email}</span>
                    <button onClick={handleClick}>Log out</button>
                </div>
                )}

                {!user && (<div>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Signup</Link>
                </div>)}
            </nav>

                
            </div>
        </header>
 
     
    )
}

export default Navbar