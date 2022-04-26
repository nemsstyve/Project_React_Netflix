import { useState } from "react";
import { useRouter } from "next/router";
import Input from "../../components/input";
import Button from "../../components/Button";
import TitlePage from "../../components/TitlePage";
import userService from "../../services/user.service";
import ModalAuth from "../../components/ModalAuth";
import Link from "next/link";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Login = () =>{
    
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        email: '', // required
        password: '' // required
    })
    const home = useRouter();
    function handleSubmit(e) {
        e.preventDefault()
       /* fetch('http://localhost:3003/login', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(formData)
        })
        
        .then(res => res.json())*/
        userService.login(formData)
        .then(data =>{

            if(data.error){
                setShowModal(true);
                
             }
            else{

                console.log(data)
                console.log(data.user.id)
                localStorage.setItem("netflix_user", data.accessToken)
                localStorage.setItem("users", JSON.stringify(data.user))
                localStorage.setItem("username", data.user.username)
                localStorage.setItem("firstname", data.user.firstname)
                localStorage.setItem("lastname", data.user.lastname)
                home.push('/profil')
              }    

        } ) .catch( error => {
            setShowModal(true);
            console.log('An erro occured:' , error)
        })
    }

    function handleChange(e) {
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    

    return (
        <div>
           <Header/>
           <ModalAuth title="Erreur" isActive={showModal} closeFunction={()=>setShowModal(!showModal)} type="information">
                    <p>Une erreur est survenue, votre email ou password est incorrect.</p>
            </ModalAuth>
            <form className='form' onSubmit={e => handleSubmit(e)}>
                <br/><br/><br/><br/><br/>
                <TitlePage title="Login"/>
                <br/>
                <Input
                    label="Email"
                    name="email"
                    id="email"
                    type="text"
                    classes="form__input"
                    required={true}
                    value={formData.email}
                    placeholder="Veuillez saisir votre email"
                    handleChange={e => handleChange(e)}
                    
                    />
                
                    <Input
                        label="Password"
                        name="password"
                        id="password"
                        type="password"
                        classes="form__input"
                        required={true}
                        placeholder="Veuillez définir un mot de passe"
                        handleChange={e => handleChange(e)}
                        value={formData.password}
                    />
                
                <center><Button title="login" classes="btn btn__color-red" type="submit"/>   </center>
                <br/>
                <center><hr/></center>
                <br/>
                <center>
                    <h3 className="label__link">Vous n&apos;avez pas de compte ? <Link href="/register">
                    <a className="nav__link"> Inscrivez vous</a></Link> </h3>
                </center>    
            </form>

        <Footer/>    
        </div>
    )
}

export default Login;