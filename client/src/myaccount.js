// import { Link } from "react-router-dom"
// import { Menu } from "./components/menu"
// import { Tabs,Tab, } from "@mui/material"
// import TabPanel from "@mui/lab/TabPanel"
// import { useState } from "react"
import Login_container from "./components/login_container"
// import { SyntheticEvent } from "react"
// export default function MyAccount(){
//   const [value, setValue] = useState('one');
//   const handleChange = (event: SyntheticEvent, newValue: string) => {
//     setValue(newValue);
//   };
//     return(
//       <div>
//       {/* <Menu></Menu>  */}
//       <Login_container >    
//       <Tabs  value={value} onChange={handleChange} centered
//       >
//   <Tab value="one" label="My Profile" />
//   <Tab value="two" label="History" />

// </Tabs>
// <TabPanel value="one">
//           Item One
//         </TabPanel>
//         <input className="text-input"type="text"  placeholder="E-mail adress"></input>
  
//         <input className="text-input" type="password" placeholder="Password"></input>
        
//         <Link to="/"><button className="connect-input"type="submit">Connect</button></Link>
  
//       <div className='link-div'>
//         <Link  to="/passwordreset" className="App-link" >Forgot password? </Link>
//         </div>
    
//         <hr className="hr-text" data-content="OR"/>
//          <Link to="/register"><button  className="connect-input register-button">Create new account</button></Link>
//          </Login_container>
//          </div>
//         )
//         }
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
      <Login_container sx={{ textAlign:"left"}} >
<div style={{ textAlign:"left"}}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
          <TabList  onChange={handleChange} centered >
            <Tab  label={<h2 className="login">My Profile </h2>} value="1" />
            <Tab label={<h2 className="login">Order History </h2> }value="2" />

          </TabList>
        </Box>
     
        <TabPanel value="1">
        <h2>Name: </h2>
        <h2>Last Name:</h2>
        <h2>Phone Number:</h2>
        <h2>E-mail:</h2>
        <h2>Adress:</h2>

        </TabPanel>
        <TabPanel value="2">Order History</TabPanel>
        </div>
        </Login_container>
      </TabContext>
    </Box>
  );
}
