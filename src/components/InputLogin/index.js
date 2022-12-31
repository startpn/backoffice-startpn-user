import React from 'react'

const InputLogin = ({name,placeholder,type,onChange,error}) =>{

    const input = {

        background:"#ebebeb",
        border:"none",
        width:"432px",
        height:"48px",
        borderRadius:"60px",
        outline:"none",
        paddingLeft:"30px",
        marginBottom:"30px"

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

export default InputLogin