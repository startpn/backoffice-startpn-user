import React,{createContext,useState,useEffect} from 'react'
import api from '../services/api'

export const  CartContext =  createContext({})

function CartProvider({children}){

    
    const [updateCart,setUpdateCart] = useState(false)
    const [updateComponent,setUpdateComponent] = useState(false)

    const [selectUserItens,setSelectUserItens] = useState([])

    async function addItemToCart (componentId,category) {

      const projectChange = localStorage.getItem("@PROJECT_CHANGE_ID")

      if(projectChange){
            
        const response = await api.post("cart/component",{

          "componentSelect":componentId,
          "project_id":projectChange,
          "mail":localStorage.getItem("@MAIL"),
          "category":category,
          "check":"true"
        })

        const selectItens = await api.post("cart/category",{
  
          "category":category,
          "mail":localStorage.getItem("@MAIL"),
  
        })
              
        setSelectUserItens({items:selectItens.data.items,category:category})
                    
          if(response.status == 200){
  
              setUpdateCart(!updateCart)
  
          }
          
          
  


        return false
      }
        
        const response = await api.post("cart/component",{

          "componentSelect":componentId,
          "project_id":localStorage.getItem("@PROJECT_ID"),
          "mail":localStorage.getItem("@MAIL"),
          "category":category,
          "check":"true"
        })


        
      
      const selectItens = await api.post("cart/category",{
  
        "category":category,
        "mail":localStorage.getItem("@MAIL"),

      })
            
      setSelectUserItens({items:selectItens.data.items,category:category})
                  
        if(response.status == 200){

            setUpdateCart(!updateCart)

        }
        
        

    }

    async function removeItemCart(componentId,category){



      const projectChange = localStorage.getItem("@PROJECT_CHANGE_ID")

      if(projectChange){
            
        const response = await api.post(`cart/delete`,{
          
          "id":componentId,
          "project_id":projectChange
          
        })


        
        if(response.status == 200){

          setUpdateCart(!updateCart)

      }        
            

      const selectItens = await api.post("cart/category",{
  
        "category":category,
        "mail":localStorage.getItem("@MAIL"),

      })
            
      setSelectUserItens({items:selectItens.data.items,category:category})




        return false
      }

      

      const response = await api.post(`cart/delete`,{
          
          "id":componentId,
          "project_id":localStorage.getItem("@PROJECT_ID")
          
        })


        
        if(response.status == 200){

          setUpdateCart(!updateCart)

      }        
            

      const selectItens = await api.post("cart/category",{
  
        "category":category,
        "mail":localStorage.getItem("@MAIL"),

      })
            
      setSelectUserItens({items:selectItens.data.items,category:category})





    }

    async function storageAllComponents(category){

      const projectChange = localStorage.getItem("@PROJECT_CHANGE_ID")

      if(projectChange){
            
        const response = await api.post("/cart/all/component",{

          "project_id":projectChange,
          "mail":localStorage.getItem("@MAIL"),
          "category":category
        })
        
  
        if(response.status == 200){

          window.location.href="/functionalities"
  
        }
        return false
      }

      const response = await api.post("/cart/all/component",{

        "project_id":localStorage.getItem("@PROJECT_ID"),
        "mail":localStorage.getItem("@MAIL"),
        "category":category
      })



      if(response.status == 200){

        window.location.href="/functionalities"

      }


    }


    return(

        <CartContext.Provider value={{addItemToCart,removeItemCart,storageAllComponents,updateCart,selectUserItens,updateComponent}}>
            {children}
        </CartContext.Provider>


    )

}

export  default CartProvider