import React from 'react';
import { useState,useEffect } from 'react';
import userService from '../../services/user.service';//import withAuth from '../../HOC/withAuth';
import { useRouter } from "next/router";
import withAuth from '../../HOC/withAuth';
import Button from '../../components/Button';


const index = () => {

   const [user, setUser] = useState();
   const [userlog, setUserlog] = useState();
   const Router = useRouter();
   const [username, setUsername] = useState("");
   const [firstname, setFirstname] = useState("");
   const [lastname, setLastname] = useState("");

   useEffect(() => {
    //setUser(JSON.parse(localStorage.getItem('user')) || []);
    userService.getMe(localStorage.getItem('netflix_user'))
    .then(data=>{
           console.log((data))
          // setUser(data)
           setUsername(localStorage.getItem('username'));
           setFirstname(localStorage.getItem('firstname'));
           setLastname(localStorage.getItem('lastname'));
        
        })
    .catch(err => console.log((err)))
    
    

   

  }, [username, firstname, lastname]);

  const logout = ()=>{
      localStorage.removeItem('netflix_user')
      localStorage.removeItem('username')
      localStorage.removeItem('firstname')
      localStorage.removeItem('lastname')
      Router.push('/login')
  }
  

   //console.log("Hello", user)
 
  
    return (
        <div>
            <br/><br/><br/><br/><br/>
            <h1 style={{color:"white"}}>Profil :</h1>
            <h2 style={{color:"white"}}>Username : {username} </h2>
            <h2 style={{color:"white"}}>Firstname : {firstname} </h2>
            <h2 style={{color:"white"}}>Lastname : {lastname} </h2>
         
            

            <center> <Button title="logout" function={logout} type="button" classes="btn btn__color-black"/></center>

            
        </div>
    );
};

export default withAuth(index);