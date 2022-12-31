import React, { useState,useEffect,useContext } from 'react'

import paymentIcon from '../../images/Svg/paymentIcon.svg'
import SubFunctionalite from '../../components/SubFunctionalite'
import api from '../../services/api'
import {CartContext} from '../../context/cart'

const Functionalitie = ({type,name,onClick}) => {

  const [arrowTop,setArrowTop] = useState(false)
  const [itemsCart,setItemsCart] = useState([])
  const [height,setHeight] = useState()
  
  const [items,setItems] = useState([])
  const [selectItems,setSelectItems] = useState([])

  const {selectUserItens,updateCart,storageAllComponents} = useContext(CartContext)

    const functionalitie = {

      width:"100%",
      height:arrowTop != false ?  "96px":  "66px",
      paddingBottom:"2.25rem",
      borderBottom:"1px solid #D7D7D7"
        
        
    }

    const getComponentsSelect = async (category,arrow) => {

      if(arrow == false){
        return false
      }

      setArrowTop(!arrowTop)

      
      const selectItens = await api.post("cart/category",{
  
        "category":category,
        "mail":localStorage.getItem("@MAIL"),

      })
      

      setSelectItems(selectItens.data.items)

    }

    const getAllComponents =  async () => {

      const response = await api.get(`components/category/${type}`)      

      if(String(response).length == 0){

        setItems([])

      }
      setItems(response.data)
      
    }

    const storageAllComponentsByCategory = (category) => {
      
      storageAllComponents(category)

    }

    

    useEffect(() => {
      getAllComponents()

    },[])
    

    
    return(

      <>
    
    <button className='btn' onClick={() => getComponentsSelect(type)} style={functionalitie} type="button" data-toggle="collapse" data-target={"#"+type} aria-expanded="false" aria-controls="collapseExample">
 
    <div style={{display:"flex",alignItems:'center',justifyContent:"space-between"}}>
    
    <img src={paymentIcon} style={{marginLeft:"0.063rem"}}/>

    <div style={{height:'3.5rem'}}>
    <p className="textFunctionlitie">{name}</p>
    {arrowTop == true 
    
    ?
    
    <>
    <div style={{display:"flex",width:"250px",alignItems:"center"}}>
    <p className="textQuantitySelectFunction">Selecionados {selectUserItens.category == type ? selectUserItens.items : <></>} </p>
    <p onClick={() => storageAllComponentsByCategory(type)} className="textSelectAll" >Marca tudo</p>
    </div>

    </>
    :
    <></>

    }

    </div>



    {arrowTop == true 
    
    ?

    <div style={{marginLeft:"-1.419rem"}}>
    
    <svg width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.91011 0.418316C6.23841 0.406265 6.56587 0.459039 6.87377 0.573622C7.18166 0.688205 7.46396 0.862349 7.70451 1.0861L11.9296 5.02605C12.027 5.11686 12.0843 5.24263 12.0889 5.3757C12.0936 5.50877 12.0452 5.63824 11.9544 5.73562C11.8635 5.833 11.7378 5.89032 11.6047 5.89496C11.4716 5.89961 11.3422 5.8512 11.2448 5.7604L7.01972 1.82045C6.72884 1.54953 6.34232 1.40515 5.94506 1.41903C5.5478 1.4329 5.17229 1.60389 4.90101 1.89443L0.96107 6.11951C0.870261 6.21689 0.744488 6.27421 0.611419 6.27886C0.478349 6.2835 0.348884 6.2351 0.251504 6.14429C0.154124 6.05348 0.0968051 5.92771 0.0921582 5.79464C0.0875113 5.66157 0.135917 5.5321 0.226725 5.43472L4.16667 1.20964C4.39102 0.969658 4.66048 0.776246 4.95963 0.640465C5.25879 0.504683 5.58177 0.429195 5.91011 0.418316V0.418316Z" fill="black"/>
    </svg>
    </div>



    :
    
    <div style={{marginLeft:"-1.419rem"}}>
    <svg width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.61112 6.33611C6.28812 6.3367 5.96817 6.27253 5.66957 6.14727C5.37096 6.02201 5.09956 5.83812 4.87087 5.60611L0.854535 1.52111C0.761966 1.42696 0.709961 1.29926 0.709961 1.16611C0.709961 1.03296 0.761966 0.90526 0.854535 0.811108C0.947105 0.716957 1.07266 0.664062 1.20357 0.664062C1.33448 0.664062 1.46003 0.716957 1.5526 0.811108L5.56894 4.89611C5.84546 5.17701 6.2203 5.33479 6.61112 5.33479C7.00195 5.33479 7.37679 5.17701 7.65331 4.89611L11.6696 0.811108C11.7622 0.716957 11.8878 0.664063 12.0187 0.664062C12.1496 0.664062 12.2751 0.716957 12.3677 0.811108C12.4603 0.90526 12.5123 1.03296 12.5123 1.16611C12.5123 1.29926 12.4603 1.42696 12.3677 1.52111L8.35138 5.60611C8.12269 5.83812 7.85129 6.02201 7.55268 6.14727C7.25408 6.27253 6.93413 6.3367 6.61112 6.33611Z" fill="black"/>
    </svg>
    </div>
    }


    </div>
    

    </button>

    {items.map(item => {  
      return(
        <div key={item.id}>
        <SubFunctionalite id={item.id} name={item.name} price={item.price} category={item.category} description={item.description} develop_time={item.develop_time} arrowTop={arrowTop}/>
        </div>
      )

      })}
    
    </>
    )

}

export default Functionalitie