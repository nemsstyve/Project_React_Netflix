import React from 'react';
import { useState,useEffect } from 'react';
import userService from '../../services/user.service';//import withAuth from '../../HOC/withAuth';
import { useRouter } from "next/router";
import withAuth from '../../HOC/withAuth';
import Button from '../../components/Button';
import { fontWeight } from '@mui/system';


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
    <div className='profil'>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <div className="card_profil">
           <h1> {firstname} {lastname}</h1>
             <p className="profil_title">votre username est <span style={{fontWeight :"bold"}}>{username}</span></p>
           
            <p>
             <button className="profil_button" onClick={logout}>Logout</button>
        </p>
      </div>
    </div>
       
    );
};

export default withAuth(index);