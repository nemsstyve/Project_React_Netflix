import { useState } from "react"
import Input from "../../components/input";
import Button from "../../components/Button";
import TitlePage from "../../components/TitlePage";
import ModalAuth from "../../components/ModalAuth";
import userService from "../../services/user.service";
import { useRouter } from "next/router";
import Link from "next/link";



const register = () => {
    const [showModal, setShowModal] = useState(false);
    const[success, setSuccess] = useState(false);
    
    const home = useRouter();
    const [formData, setFormData] = useState({
        email: '', // required
        password: '', // required
        username: '' ,// required
        firstname: '', //required
        lastname: ''
    });
    const [error,setError] = useState(false);

    

    function handleSubmit(e) {
        e.preventDefault()
        
        if(formData.password.length < 6){
            setError(true);
        }
        else
        {
                
                userService.register(formData)
                .then(data =>{
                    if(data.error){
                        setShowModal(true);
                        
                    }
                    else{

                        setError(false)
                        console.log(data)
                        localStorage.setItem("netflix_user", data.accessToken)
                        localStorage.setItem("users", JSON.stringify(data.user))
                        localStorage.setItem("username", data.user.username)
                        localStorage.setItem("firstname", data.user.firstname)
                        localStorage.setItem("lastname", data.user.lastname)
                        setSuccess(true)

                    }
                
                    
                    
                })
                .catch(
                    //Dans le cas où on aurait des erreurs de type server j'affiche ma modal
                    (err) => {
                    setShowModal(true);
                    console.log("ohhhhhhhhh : ",err)
                    })
        }        
    }

    function handleChange(e) {
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    function succesRegister(){
        window.confirm("Success register, redirect in login page !")
        home.push('/login')
        
    }

    return (
        
         <div>
             <ModalAuth title="Erreur" isActive={showModal} closeFunction={()=>setShowModal(!showModal)} type="information">
                    <p>Une erreur est survenue, veuillez contacter le service client.</p>
            </ModalAuth>
            <form className='form' onSubmit={e => handleSubmit(e)}>
                <br/><br/><br/><br/><br/>
                <TitlePage title="Register"/>
                <br/>
                
                
                <Input
                    label="Prénom"
                    name="firstname"
                    id="firstname"
                    type="text"
                    classes="form__input"
                    required={true}
                    value={formData.firstname}
                    placeholder="Veuillez saisir votre prénom"
                    handleChange={e => handleChange(e)}
                    />
                 <Input
                    label="Nom"
                    name="lastname"
                    id="lastname"
                    type="text"
                    classes="form__input"
                    required={true}
                    value={formData.lastname}
                    placeholder="Veuillez saisir votre nom"
                    handleChange={e => handleChange(e)}
                    />
                 <Input
                    label="Username"
                    name="username"
                    id="username"
                    type="text"
                    classes="form__input"
                    required={true}
                    value={formData.username}
                    placeholder="Veuillez saisir un username"
                    handleChange={e => handleChange(e)}
                    />

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
                    value={formData.password}
                    placeholder="Veuillez saisir un password"
                    handleChange={e => handleChange(e)}
                    />    
                  {error && <p style={{color :"red"}}>Veuillez définir un mot de passe d'au moins 6 caractères</p>}    
           
                 <center><Button title="Register" classes="btn btn__color-red" type="register"/>   </center>
                 <br/>
                <center><hr/></center>
                <br/>
                <center>
                    <h3 className="label__link">Vous avez un compte ? <Link href="/login">
                    <a className="nav__link"> Connectez-vous</a></Link> </h3>
                </center>   
            </form>
            {success &&  succesRegister()}
        

          </div>  
        
    )
}

export default register;