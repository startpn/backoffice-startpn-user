import React,{createContext,useState} from 'react'

import api from '../services/api'

export const ComponentContext = createContext({})

function ComponentProvider({children}){

    const [imageBase64,setImageBase64] = useState()
    const [name,setName] = useState()
    const [description,setDescription] = useState(false)

    const [animation,setAnimation] = useState(false)
    const [developTime,setDevelopTime] = useState()
    const [price,setPrice] = useState()

    const loadImage = async (imageBase64,description) => {

        setAnimation(true)

        
        
        const response = await api.get(`component/${imageBase64}`)

        const typeComponent = localStorage.getItem("@TYPE")

        console.log(typeComponent)

        if(response.status == 200){

            setTimeout(() => {

            setAnimation(false)
            setImageBase64(typeComponent == "mobile" ? response.data[0].mobile_icon : response.data[0].desktop_icon)
            setName(response.data[0].name)

            setDevelopTime(response.data[0].develop_time)
            setDescription(description)
            setPrice(response.data[0].price)

            },[3000]);

        }


        
        
    }


    
    return(
    <ComponentContext.Provider value={{loadImage,imageBase64,name,animation,description,developTime,price}}>
        {children}
    </ComponentContext.Provider>
    )

}

export default ComponentProvider