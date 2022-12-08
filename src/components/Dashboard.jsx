import {Link, Routes, Route} from 'react-router-dom'
import Profile from "./Profile"
import Jobs from './Jobs'
import DashboardIcon from '@mui/icons-material/Dashboard';
import WorkIcon from '@mui/icons-material/Work';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import ListAltIcon from '@mui/icons-material/ListAlt';
import Active from "./Active"
import { useContext } from 'react';
import { AppContext } from '../App';

function Dashboard(){
    const {me,setMe} = useContext(AppContext)
    return(
        <>
            <main id="mainBoard">
                <section id="sidePanel">
                    <div className='linkHolder'>
                        <div>
                            <h1 id="mylogo">LinkedOut</h1>
                            <h3 className='mylogo'>Welcome {me?.username}</h3>
                        </div>
                        <Link className="linksPanel"to="">
                            <div>
                            <DashboardIcon/>
                            <span>Dashboard</span>
                            </div>
                            
                        </Link>

                        <Link className="linksPanel"to="jobs">
                            <div><WorkIcon />
                            <span>Jobs
                            </span>
                            </div>
                        </Link>

                        <Link className="linksPanel"to="active">
                            <div><ListAltIcon />
                            <span>Active 
                            </span>
                            </div>
                        </Link>
                        
                        <Link className="linksPanel"to="/">
                            <div><WorkHistoryIcon />
                            <span>Logout</span>
                            </div>
                        </Link>

                    </div>
                </section>
                <section id="mainPanel">
                    <Routes>
                        <Route path="/" element={<Profile />}/>
                        <Route path="/jobs" element={<Jobs />}/>
                        <Route path="/active" element={<Active />}/>
                    </Routes>
                    
                   
                </section>
            </main>
        </>
    )
}

export default Dashboard