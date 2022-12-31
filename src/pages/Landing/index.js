import React, { useEffect, useState } from 'react'

import companyIcon from '../../images/Svg/companyIcon.svg'
import demoDashboard from '../../images/png/demoDashhboard.png'

import InputLogin from '../../components/InputLogin'
import ButtonLogin from '../../components/ButtonLogin'

import api from '../../services/api'


const Landing = () =>{

    const [mail,setMail] = useState()
    const [password,setPassword] = useState()

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
        paddingTop:"12.625rem",
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
    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
        }
        

    const login = async () => {


        if(mail == undefined){

            setMailError("Informe um email")

        }
        
        if(password == undefined){

            setPasswordError("Informe uma senha")

        }

        if(mail == undefined || password == undefined){

            return false
        }


        const response = await api.post("sessions",{

            mail:mail,
            password:password

        })
        

        if(response.status == 200){
            setMessageError()
            localStorage.setItem("@PROJECT_ID",response.data.user.project_id)
            localStorage.setItem("@MAIL",mail)
            localStorage.setItem("@TOKEN",response.data.token)

            window.location.href="/functionalities"

        }else{

            setMessageError("Email ou senha inválidos!")

        }



    }

    const redirecToRegisterPage = () => {
        

        window.location.href="/register"

    }
    

    useEffect(() => {

        if(mail != undefined){

            setMailError()

        }

        if(password != undefined){

            setPasswordError()

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
            


        if(String(password).length > 0){

            if(String(password).length < 8){

                setPasswordError("Senha deve ter pelo menos 8 caracteres")
                setBtnDisble(true)

            }else{

                setBtnDisble(false)

            }

        }
       

        

    },[mail,password])


    return(

        <div style={container}>

        <div style={column1}>

        <div style={containerText}>
        <img src={companyIcon}/>
        <h1 style={textPrimary} className="textPrimaryLanding" >Seja bem-vindo a Startpn!</h1>
        <p style={textDescription} className="textDescriptionlanding">A solução mais completa para você criar seu <br/> aplicativo ou software de forma simples.</p>
        </div>

        <img src={demoDashboard} style={{objectFit:"cover"}}/>
    
        </div>

        <div style={column2}>

        <p className="textLoginLanding">Faça o login</p>
        {messageError != undefined 
        
        ?
        <p className="textLoginError">Email ou senha inválidos!</p>
        :
        <></>
        }
        <InputLogin name={"Email"} error={mailError} onChange={(e) => setMail(e.target.value)}/>
        <InputLogin name={"Senha"} error={passwordError} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="8+ Caracteres"/>
        <ButtonLogin disabled={btnDisable} onClick={() => login()}/>

        <div style={containerRegister} onClick={() => redirecToRegisterPage()}>
        <p style={textPrimaryNotRegister} className="textPrimaryNotRegister">Não e cadastrado?</p>
        <p className="textSecondaryNotRegister">Cadastre-se</p>
        </div>

        </div>

     
        </div>

    )

}

export default Landing