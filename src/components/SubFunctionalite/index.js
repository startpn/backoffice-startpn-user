import React,{useState,useEffect,useContext} from 'react'
import paymentIcon from '../../images/Svg/paymentIcon.svg'
import checkIcon from '../../images/Svg/checkComponent.svg'

import api from '../../services/api'

import {CartContext} from '../../context/cart'
import {ComponentContext} from '../../context/component'


const SubFunctionalite = ({id,idProject,name,price,category,description,arrowTop,removeItem,develop_time}) => {

    const {addItemToCart,removeItemCart,updateCart} = useContext(CartContext)
    const {loadImage} = useContext(ComponentContext)

    const [check,setCheck] = useState(false)
    const [showComponent,setShowComponent] = useState(false)

    const [cartItems,setCartItems] = useState([])
    

    function addItemCart(idItem,category){
        
        addItemToCart(idItem,category)
    }

    function deleteItemCart(idItem,category,idProject){ 
        removeItemCart(idItem,category)
        setCheck("trash")
    }

    function showImage(idImage){

        loadImage(idImage,description,price)
    }

    const getItemsInCart = async () => {

        const projectChange = localStorage.getItem("@PROJECT_CHANGE_ID")
        

        if(projectChange){
            
            const response = await api.post("cart/user/",{

                "mail":localStorage.getItem("@MAIL"),
                "id":projectChange
        
            })
    
            if(response.status == 200){
    
                setCartItems(response.data)
    
            }

            
            return false
        }

        const response = await api.post("cart/user/",{

            "mail":localStorage.getItem("@MAIL"),
            "id":localStorage.getItem("@PROJECT_ID")
    
        })

        if(response.status == 200){

            setCartItems(response.data)


        }


    }


    useEffect(() => {

        getItemsInCart()

    },[])


    useEffect(() =>{

        getItemsInCart()

    },[updateCart])


    return(
      
        arrowTop == true 
    
            ?
            
        
            <div id={category}>
                
            <div  class="card card-body" style={{background:"#F9F9FA",borderRadius:"0px",height:"79px",border:"none",borderBottom:"1px solid #D7D7D7"}}>
        
            <div style={{display:"flex",alignItems:'center', justifyContent:"space-between"}}>

            {showComponent == true 
            
            ?
            <div className="borderLeftSubFunctionalitie"></div>
        
            :
            <></>

            }



        <img src={paymentIcon} style={{width:"19px"}}/>

          {cartItems.length > 0 
           
           ?
           cartItems.map(item => {


            
            if(item.componentSelect == id){
                
                return(
                
                <div key={item.id}>
                

                <img src={checkIcon} style={{zIndex:"1",background:"#F9F9FA",marginLeft:"-24px",width:"24px"}}/>
    
        
                <div style={{cursor:"pointer",marginLeft:"9px",position:"absolute",right:"21px",top:"29px",zIndex:"3",background:"white"}} onClick={() => { deleteItemCart(id,category); setCheck(!check)}}>

                <svg width="20" height="20" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_2415_2634)">
                <path d="M12.2498 2.33333H10.4415C10.3061 1.67499 9.9479 1.08345 9.42724 0.658418C8.90657 0.233386 8.25529 0.000848472 7.58317 0L6.41651 0C5.74439 0.000848472 5.09311 0.233386 4.57244 0.658418C4.05178 1.08345 3.69356 1.67499 3.55817 2.33333H1.74984C1.59513 2.33333 1.44675 2.39479 1.33736 2.50419C1.22796 2.61358 1.1665 2.76196 1.1665 2.91667C1.1665 3.07137 1.22796 3.21975 1.33736 3.32914C1.44675 3.43854 1.59513 3.5 1.74984 3.5H2.33317V11.0833C2.3341 11.8566 2.64169 12.5979 3.18847 13.1447C3.73525 13.6915 4.47658 13.9991 5.24984 14H8.74984C9.5231 13.9991 10.2644 13.6915 10.8112 13.1447C11.358 12.5979 11.6656 11.8566 11.6665 11.0833V3.5H12.2498C12.4046 3.5 12.5529 3.43854 12.6623 3.32914C12.7717 3.21975 12.8332 3.07137 12.8332 2.91667C12.8332 2.76196 12.7717 2.61358 12.6623 2.50419C12.5529 2.39479 12.4046 2.33333 12.2498 2.33333ZM6.41651 1.16667H7.58317C7.945 1.16711 8.29783 1.27947 8.59328 1.48834C8.88873 1.69721 9.11233 1.99237 9.23343 2.33333H4.76626C4.88735 1.99237 5.11095 1.69721 5.4064 1.48834C5.70185 1.27947 6.05468 1.16711 6.41651 1.16667ZM10.4998 11.0833C10.4998 11.5475 10.3155 11.9926 9.98728 12.3208C9.65909 12.649 9.21397 12.8333 8.74984 12.8333H5.24984C4.78571 12.8333 4.34059 12.649 4.0124 12.3208C3.68421 11.9926 3.49984 11.5475 3.49984 11.0833V3.5H10.4998V11.0833Z" fill="#23262F"/>
                <path d="M5.83333 10.5002C5.98804 10.5002 6.13641 10.4387 6.24581 10.3293C6.35521 10.2199 6.41666 10.0715 6.41666 9.91683V6.41683C6.41666 6.26212 6.35521 6.11375 6.24581 6.00435C6.13641 5.89495 5.98804 5.8335 5.83333 5.8335C5.67862 5.8335 5.53025 5.89495 5.42085 6.00435C5.31146 6.11375 5.25 6.26212 5.25 6.41683V9.91683C5.25 10.0715 5.31146 10.2199 5.42085 10.3293C5.53025 10.4387 5.67862 10.5002 5.83333 10.5002Z" fill="#23262F"/>
                <path d="M8.16684 10.5002C8.32155 10.5002 8.46992 10.4387 8.57932 10.3293C8.68872 10.2199 8.75017 10.0715 8.75017 9.91683V6.41683C8.75017 6.26212 8.68872 6.11375 8.57932 6.00435C8.46992 5.89495 8.32155 5.8335 8.16684 5.8335C8.01212 5.8335 7.86375 5.89495 7.75435 6.00435C7.64495 6.11375 7.5835 6.26212 7.5835 6.41683V9.91683C7.5835 10.0715 7.64495 10.2199 7.75435 10.3293C7.86375 10.4387 8.01212 10.5002 8.16684 10.5002Z" fill="#23262F"/>
                </g>
                <defs>
                <clipPath id="clip0_2415_2634">
                <rect width="14" height="14" fill="white"/>
                </clipPath>
                </defs>
                </svg>
                </div>
                </div>
                
                )

            }



           })
           
           :

           <></>
           }

        
            <div style={{height:'3.5rem',paddingLeft:"0.5rem"}}>
            <p className="textSubFunctionlitie">{name}</p>
            {arrowTop == true 
            
            ?
            
            <div style={{display:"flex",width:"220px"}}>
            <p className="textValueFunction">{String(develop_time) ==  1 ? `${develop_time} dia` : `${develop_time} dias`}</p>
            <p className="textDevelopFunction">{price != undefined ? Number(price).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) : <></>}</p>

            </div>
            :
            <></>
        
            }
            </div>
        

        
        
            {arrowTop == true 
            
            ?
        

            <div style={{display:"flex"}}>


            
            <div style={{cursor:"pointer",marginLeft:"-60px"}} onClick={() => {setShowComponent(!showComponent); showImage(id,description)}}>

            <svg width="30" height="30" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="1" width="23" height="23" rx="4.5" fill="white" stroke="#D7D7D7"/>
            <g clip-path="url(#clip0_2414_2488)">
            <path d="M19.5442 11.3867C18.5748 9.80793 16.3698 7.15918 12.4998 7.15918C8.62985 7.15918 6.42485 9.80793 5.45547 11.3867C5.1558 11.8714 4.99707 12.43 4.99707 12.9998C4.99707 13.5697 5.1558 14.1282 5.45547 14.6129C6.42485 16.1917 8.62985 18.8404 12.4998 18.8404C16.3698 18.8404 18.5748 16.1917 19.5442 14.6129C19.8439 14.1282 20.0026 13.5697 20.0026 12.9998C20.0026 12.43 19.8439 11.8714 19.5442 11.3867ZM18.4786 13.9586C17.6461 15.3123 15.7617 17.5904 12.4998 17.5904C9.23797 17.5904 7.3536 15.3123 6.5211 13.9586C6.34306 13.6705 6.24876 13.3385 6.24876 12.9998C6.24876 12.6611 6.34306 12.3292 6.5211 12.0411C7.3536 10.6873 9.23797 8.40918 12.4998 8.40918C15.7617 8.40918 17.6461 10.6848 18.4786 12.0411C18.6566 12.3292 18.7509 12.6611 18.7509 12.9998C18.7509 13.3385 18.6566 13.6705 18.4786 13.9586Z" fill="black"/>
            <path d="M12.5 9.875C11.8819 9.875 11.2777 10.0583 10.7638 10.4017C10.2499 10.745 9.8494 11.2331 9.61288 11.8041C9.37635 12.3751 9.31447 13.0035 9.43505 13.6096C9.55563 14.2158 9.85325 14.7727 10.2903 15.2097C10.7273 15.6467 11.2842 15.9444 11.8903 16.0649C12.4965 16.1855 13.1249 16.1236 13.6959 15.8871C14.2669 15.6506 14.755 15.25 15.0983 14.7361C15.4417 14.2222 15.625 13.6181 15.625 13C15.624 12.1715 15.2944 11.3772 14.7086 10.7914C14.1228 10.2056 13.3285 9.87599 12.5 9.875ZM12.5 14.875C12.1292 14.875 11.7666 14.765 11.4583 14.559C11.15 14.353 10.9096 14.0601 10.7677 13.7175C10.6258 13.3749 10.5887 12.9979 10.661 12.6342C10.7334 12.2705 10.912 11.9364 11.1742 11.6742C11.4364 11.4119 11.7705 11.2334 12.1342 11.161C12.4979 11.0887 12.8749 11.1258 13.2175 11.2677C13.5601 11.4096 13.853 11.65 14.059 11.9583C14.265 12.2666 14.375 12.6292 14.375 13C14.375 13.4973 14.1775 13.9742 13.8258 14.3258C13.4742 14.6774 12.9973 14.875 12.5 14.875Z" fill="black"/>
            </g>
            <defs>
            <clipPath id="clip0_2414_2488">
            <rect width="15" height="15" fill="white" transform="translate(5 5.5)"/>
            </clipPath>
            </defs>
            </svg>
            </div>


        

            {check == true
            
            ?

            <div style={{cursor:"pointer",marginLeft:"5px"}}  onClick={() => {addItemCart(id,category); setCheck(!check)}} >
            <svg width="30" height="30" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="1" width="23" height="23" rx="4.5" fill="white" stroke="#D7D7D7"/>
            <path d="M18.125 11.625H12.875V6.375C12.875 5.89175 12.4832 5.5 12 5.5C11.5168 5.5 11.125 5.89175 11.125 6.375V11.625H5.875C5.39175 11.625 5 12.0168 5 12.5C5 12.9832 5.39175 13.375 5.875 13.375H11.125V18.625C11.125 19.1082 11.5168 19.5 12 19.5C12.4832 19.5 12.875 19.1082 12.875 18.625V13.375H18.125C18.6082 13.375 19 12.9832 19 12.5C19 12.0168 18.6082 11.625 18.125 11.625Z" fill="black"/>
            </svg>
            </div>
            :
            
            <div style={{cursor:"pointer",marginLeft:"5px"}}  onClick={() => {addItemCart(id,category); setCheck(!check)}} >
            <svg width="30" height="30" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="1" width="23" height="23" rx="4.5" fill="white" stroke="#D7D7D7"/>
            <path d="M18.125 11.625H12.875V6.375C12.875 5.89175 12.4832 5.5 12 5.5C11.5168 5.5 11.125 5.89175 11.125 6.375V11.625H5.875C5.39175 11.625 5 12.0168 5 12.5C5 12.9832 5.39175 13.375 5.875 13.375H11.125V18.625C11.125 19.1082 11.5168 19.5 12 19.5C12.4832 19.5 12.875 19.1082 12.875 18.625V13.375H18.125C18.6082 13.375 19 12.9832 19 12.5C19 12.0168 18.6082 11.625 18.125 11.625Z" fill="black"/>
            </svg>
            </div>

            }

   
            
            </div>
        

            :
            <></>
            }

        
            </div>
              
        
            <div style={{height:"10px"}}></div>
            </div>
            
            </div>

            :
            <></>


    )    

}

export default SubFunctionalite