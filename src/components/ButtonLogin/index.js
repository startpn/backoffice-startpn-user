import React from 'react'

const ButtonLogin = ({onClick,disabled}) =>{

    const button = {

        background:"#1172EB",
        width:"185px",
        height:"48px",
        border:"none",
        outline:"none",
        borderRadius:"60px",
        color:"white",

    }
    
    return(

        <button style={button} onClick={onClick} disabled={disabled} className="textButtonLogin">
            Login
        </button>

    )

}

export default ButtonLogin