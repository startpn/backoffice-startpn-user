import React, { useEffect, useState,useContext } from 'react'

import api from '../../services/api'
import {CartContext} from '../../context/cart'

const PreviewFunctionalitie = ({id,type,name,idToRemove,category}) => {

  function deleteItemCart(idItem,category){
    removeItemCart(idItem,category)
}

  const {removeItemCart} = useContext(CartContext)

  const [arrowTop,setArrowTop] = useState(false)
  const [image,setImage] = useState()
  const [price,setPrice] = useState()

  const [daysToDevelop,setDaysToDevelop] = useState()

  const [nameComponent,setNameComponent] = useState()

    const functionalitie = {

      width:"100%",
      height:arrowTop != false ?  "96px":  "66px",
      paddingBottom:"2.25rem",
      height:"90px",
      borderBottom:"1px solid #D7D7D7"
        
        
    }


    const getInfo = async () => {

      const response = await api.get(`component/${id}`)
      const type = localStorage.getItem("@TYPE")

      setImage(type == "mobile" ? response.data[0].mobile_icon : response.data[0].desktop_icon)
      setNameComponent(response.data[0].name)
      console.log(response.data[0].name)
      setPrice(response.data[0].price)

      setDaysToDevelop(response.data[0].develop_time)
    }

    useEffect(() => {

      getInfo()

    },[id])


    return(

      <>
    
    <button   className='btn'   style={functionalitie} type="button">
   

    <div style={{display:"flex",alignItems:'center',width:"290px",justifyContent:"space-between"}}>
    
    <div>
    <img  style={{objectFit:'contain',width:'35px',height:"76px",borderRadius:'5px'}} src={"data:image/png;base64,"+ image }/>
    </div>
    <div style={{height:'4.5rem',display:"flex",width:"400px",alignItems:"center",justifyContent:"space-between"}}>
    
    <div style={{marginLeft:"1.25rem",width:"210px"}}>
    <p className="textFunctionlitieCartPrimary">{nameComponent}</p>
    <p className="textFunctionlitieCartSecondary">{String(daysToDevelop).length > 1 ? `${daysToDevelop} dias` : `${daysToDevelop} dias`} {price != undefined ? Number(price).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) : <></>}</p>
    </div>



    </div>
      
      <div onClick={() => deleteItemCart(idToRemove,category)}>
      <svg width="23" height="23" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_2407_959)">
      <path d="M16.6247 3.4069H14.1705C13.9868 2.51343 13.5006 1.71063 12.794 1.1338C12.0874 0.556972 11.2035 0.241386 10.2913 0.240234L8.70801 0.240234C7.79585 0.241386 6.91197 0.556972 6.20535 1.1338C5.49874 1.71063 5.01259 2.51343 4.82884 3.4069H2.37467C2.16471 3.4069 1.96335 3.49031 1.81488 3.63877C1.66642 3.78724 1.58301 3.9886 1.58301 4.19857C1.58301 4.40853 1.66642 4.60989 1.81488 4.75836C1.96335 4.90682 2.16471 4.99023 2.37467 4.99023H3.16634V15.2819C3.1676 16.3313 3.58504 17.3374 4.3271 18.0795C5.06916 18.8215 6.07525 19.239 7.12468 19.2402H11.8747C12.9241 19.239 13.9302 18.8215 14.6723 18.0795C15.4143 17.3374 15.8318 16.3313 15.833 15.2819V4.99023H16.6247C16.8346 4.99023 17.036 4.90682 17.1845 4.75836C17.3329 4.60989 17.4163 4.40853 17.4163 4.19857C17.4163 3.9886 17.3329 3.78724 17.1845 3.63877C17.036 3.49031 16.8346 3.4069 16.6247 3.4069ZM8.70801 1.82357H10.2913C10.7824 1.82417 11.2612 1.97666 11.6622 2.26013C12.0632 2.5436 12.3666 2.94416 12.531 3.4069H6.46839C6.63272 2.94416 6.93618 2.5436 7.33715 2.26013C7.73812 1.97666 8.21696 1.82417 8.70801 1.82357ZM14.2497 15.2819C14.2497 15.9118 13.9995 16.5159 13.5541 16.9613C13.1087 17.4067 12.5046 17.6569 11.8747 17.6569H7.12468C6.49479 17.6569 5.8907 17.4067 5.4453 16.9613C4.9999 16.5159 4.74968 15.9118 4.74968 15.2819V4.99023H14.2497V15.2819Z" fill="black"/>
      <path d="M7.91666 14.4906C8.12663 14.4906 8.32799 14.4072 8.47646 14.2587C8.62492 14.1102 8.70833 13.9089 8.70833 13.6989V8.94889C8.70833 8.73893 8.62492 8.53757 8.47646 8.3891C8.32799 8.24063 8.12663 8.15723 7.91666 8.15723C7.7067 8.15723 7.50534 8.24063 7.35687 8.3891C7.20841 8.53757 7.125 8.73893 7.125 8.94889V13.6989C7.125 13.9089 7.20841 14.1102 7.35687 14.2587C7.50534 14.4072 7.7067 14.4906 7.91666 14.4906Z" fill="black"/>
      <path d="M11.0837 14.4906C11.2936 14.4906 11.495 14.4072 11.6435 14.2587C11.7919 14.1102 11.8753 13.9089 11.8753 13.6989V8.94889C11.8753 8.73893 11.7919 8.53757 11.6435 8.3891C11.495 8.24063 11.2936 8.15723 11.0837 8.15723C10.8737 8.15723 10.6723 8.24063 10.5239 8.3891C10.3754 8.53757 10.292 8.73893 10.292 8.94889V13.6989C10.292 13.9089 10.3754 14.1102 10.5239 14.2587C10.6723 14.4072 10.8737 14.4906 11.0837 14.4906Z" fill="black"/>
      </g>
      <defs>
      <clipPath id="clip0_2407_959">
      <rect width="19" height="19" fill="white" transform="translate(0 0.240234)"/>
      </clipPath>
      </defs>
      </svg>
      </div>

    </div>
      

    </button>
    
    </>
    )

}

export default PreviewFunctionalitie