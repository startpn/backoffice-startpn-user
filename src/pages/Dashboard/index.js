import React from 'react'

import ThowColumnLayout from '../../layouts/ThowColumnLayout'
import InputSearchProject from '../../components/InputSearchProject'

import Card from '../../components/Card'

const Dashboard = () => {



    const rowCards = {

      display:"flex",
      width:"100%",
      flexWrap:"wrap",
      justifyContent: "space-between",
    }

    const btn = {

      width:"198px",
      height:"45px",
      background:"#1172EB",
      borderRadius:"60px",
      border:"none",
      outline:"none"

    }
    
    return(

      

      <ThowColumnLayout

      colum2Data={
        
        <div>

        <div style={{display:"flex",justifyContent:"space-between"}}>
        <InputSearchProject placeholder={"Pesquisar projeto..."}/>
        <button className="textBtnDashboard" style={btn}>Criar novo projeto</button>
        </div>

        <div style={rowCards}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>

        </div>
        

        </div>

      }

      
      
      />

    )

}

export default Dashboard