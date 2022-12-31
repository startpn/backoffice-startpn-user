import React from 'react'

const InputRegister = ({name,placeholder,onChange,error,type}) =>{

    const input = {

        background:"#ebebeb",
        border:"none",
        width:"200px",
        height:"48px",
        borderRadius:"60px",
        outline:"none",
        paddingLeft:"30px",
        marginBottom:"30px",
        marginRight:"30px"

    }

    const column1 = {
        position:"relative",

        display:"flex",
        flexDirection:"column"

    }


    return(
        
        <div style={column1}>
        <label className="labelInputLogin">{name}</label>
        <input className="inputLogin" onChange={onChange} type={type} placeholder={placeholder} style={input}/>
        
        {error != false 
        
        ?
        <p className="errorMessageLogin">{error}</p>
        
        :
        <></>
        }

        </div>
    )

}

export default InputRegister