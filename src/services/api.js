import {create} from 'apisauce'

const api = create({

    baseURL:'http://54.164.60.74:3000/'
})

/*

 Send Token to API
 
*/

api.addAsyncRequestTransform(response => async() =>{
    
    const token = localStorage.getItem('@TOKEN')
    
    if(token){

        response.headers['Authorization']  = `Bearer ${token}`

    }

})




export default api