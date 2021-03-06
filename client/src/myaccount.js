import Login_container from "./components/login_container"
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { LoginContext } from "./Helpers/LoginContext";
import { useContext } from "react";
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  
  return (
    <div
      role="tabpanel"
      style={{textAlign:"left"}}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function Myaccount() {
  const [value, setValue] = React.useState(0);
  const {Email,setEmail,user}=useContext(LoginContext)
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Login_container  >
    <Box
      sx={{ width:"100%"
      }}
    >
      <Tabs
        centered
     
        value={value}
        onChange={handleChange}
        
        sx={{ borderBottom: 1, borderColor: 'divider',textAlign:"left",color:"blue" }}
      >

          <Tab  label={<h2 className="login">My Profile </h2>} {...a11yProps(0)}  />
           <Tab label={<h2 className="login">Order History </h2> }{...a11yProps(1)}/>

      </Tabs>
      <TabPanel sx={{ textAlign:"left"}} value={value} index={0}>
         <h2>Name: {user.first_name}</h2>
         <h2>Last Name:{user.last_name}</h2>
         <h2>Phone Number:{user.Phone_number}</h2>
         <h2>E-mail:{user.Email}</h2>
         <h2>Adress:{user.Adress}</h2>
         <h2>Admin:{(user.Admin)? "true":"false" }</h2>
      </TabPanel>
      {/* <TabPanel value={value} index={1}> */}
     
        <TabPanel value={value} index={1}><h2>Order History</h2></TabPanel>
    

    </Box>
    </Login_container>
  );
}
