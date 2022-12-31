import React,{useState,useEffect} from 'react'

import companyIcon from '../../images/Svg/companyIcon.svg'
import demoComponents from '../../images/Svg/demoComponents.svg'

import InputLogin from '../../components/InputLogin'
import InputRegister from '../../components/InputRegister'

import ButtonLogin from '../../components/ButtonLogin'


import api from '../../services/api'

const Register = () =>{

    const [name,setName] = useState()
    const [lastName,setLastName] = useState()
    const [mail,setMail] = useState()

    const [password,setPassword] = useState()

    const [nameError,setNameError] = useState()
    const [lastNameError,setLastNameError] = useState()
    const [mailError,setMailError] = useState()

    const [passwordError,setPasswordError] = useState()
    const [messageError,setMessageError] = useState()

    const [btnDisable,setBtnDisble] = useState(false)

    const container = {

        display:"flex",
        justifyContent:"space-between",
        height:'100vh',
    }

    const column1 = {

        background:"#F8F9FF",
        height:'100vh',
        paddingTop:"4.125rem",
        width:"42.5rem"

    }

    const column2 = {

        height:'100vh',
        paddingTop:"12.725rem",
        width:"40%"
    }

    const containerText = {

        paddingLeft:"2.375rem"

    }

    const containerRegister = {

        display:"flex",
        aligItems:"center",
        marginTop:"3.375rem"        
    }

    const textPrimary = {

        paddingTop:"2.75rem",
    }

    const textDescription = {

        paddingTop:"1.25rem",
    }

    const textPrimaryNotRegister = {

        fontSize:"0.875rem"
        
    }
    

    const register = async () => {

        if(name == undefined){
            
            setNameError("Informe um nome")
        }

        if(lastName == undefined){
            
            setLastNameError("Informe um sobrenome")
        }

        if(mail == undefined){
            
            setMailError("Informe um email")
        }


        if(password == undefined){
            
            setPasswordError("Informe uma senha")
        }

        if(name == undefined || lastName == undefined || mail == undefined || password == undefined){
            return false
        }

        const response = await api.post("user",{

            name:`${name} ${lastName}`,
            mail:mail,
            password_hash:password,

        })

        localStorage.setItem("@PROJECT_ID",response.data.projectId)

        if(response.status == 200){
            localStorage.setItem("@MAIL",mail)
            window.location.href="/functionalities"

        }
        

        if(response.status == 400){

            setMessageError("Ops.. Usuário já existente!")
        }

    }
    

    const redirecToLoginPage = () => {

        window.location.href="/"

    }

    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
        
    
    useEffect(() =>{

        if(name != undefined){
            
            setNameError()
        }

        if(lastName != undefined){

            setLastNameError()
        }

        if(mail != undefined){

            setMailError()
        }



        if(mail !== undefined){

            const responseValidateMail = validateEmail(mail)

            if(responseValidateMail == false){
    
                setMailError('email inválido!')
                setBtnDisble(true)
            }else{



                setBtnDisble(false)
            }
    
        }
            
   
        if(password != undefined){

            setPasswordError()
        }


        if(String(password).length > 0){

            if(String(password).length < 8){

                setPasswordError("senha deve ter pelo menos 8 caracteres")
                setBtnDisble(true)

            }else{

                setBtnDisble(false)


            }

        }

    },[name,lastName,mail,password])

    return(

        <div style={container}>

        <div style={column1}>

        <div style={containerText}>
        <img src={companyIcon}/>
        <h1 style={textPrimary} className="textPrimaryLanding" >Crie qualquer ideia conosco</h1>
        <p style={textDescription} className="textDescriptionlanding">Múltiplas features totalmente personalizáveis para <br/> você pode construir sua ideia de forma simples <br/> e fácil.</p>
        </div>

        <img src={demoComponents} style={{objectFit:"cover"}}/>
    
        </div>

        <div style={column2}>

        {messageError != undefined 
        
        ?
        <p className="textLoginError">Ops.. Usuário já existente!</p>

        :
        <></>

        }

        <div style={{display:"flex"}}>
        <InputRegister name={"Nome"} error={nameError} onChange={(e) => setName(e.target.value)} />
        <InputRegister name={"Sobrenome"} error={lastNameError} onChange={(e) => setLastName(e.target.value)}/>

        </div>
        <InputLogin name={"Email"} error={mailError} onChange={(e) => setMail(e.target.value)} placeholder="Seu melhor e-mail"/>
        <InputLogin name={"Senha"} error={passwordError} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="8+ Caracteres"/>
        <ButtonLogin disabled={btnDisable} onClick={() => register()}/>

        <div style={containerRegister} onClick={() => redirecToLoginPage()}>
        <p style={textPrimaryNotRegister} className="textPrimaryNotRegister">Já e cadastrado?</p>
        <p className="textSecondaryNotRegister">Login</p>
        </div>

        </div>

     
        </div>

    )

}

export default Register