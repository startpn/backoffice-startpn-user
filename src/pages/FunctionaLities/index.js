import React,{useState,useEffect,useContext} from 'react'

import ThreeColumLayout from '../../layouts/ThreeColumLayout'
import InputSearchhProjetFunctionalities from '../../components/InputSearchProjetFunctionalities'
import mobileIconSidebar from '../../images/Svg/MobileIconSidebar.svg'
import weMobileIcon from '../../images/Svg/weMobileIcon.svg'
import Functionalitie from '../../components/Functionalitie'
import PreviewFunctionalitie from '../../components/PreviewFunctionalitie'

import api from '../../services/api'

import ModalCreateProject from '../../components/ModalCreateProject'

import {CartContext} from '../../context/cart'
import {ComponentContext} from '../../context/component'
import "skeleton-screen-css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';


const FunctionaLities = () => {
    
  const [items,setItems] = useState([])
  const [cartData,setCartData] = useState([])
  const [arrowTop,setArrowTop] = useState(false)

  const [image,setImage] = useState()
  const [nameComponent,setNameComponent] = useState()
  const [priceComponent,setPriceComponent] = useState()

  const [daysToDevelop,setDaysToDevelop] = useState()
  const [itemsInCart,setItemsInCart] = useState()
  const [nameProject,setNameProject] = useState()

  const [projects,setProjects] = useState([])
  const [projectDelete,setProjectDelete] = useState(false)
  const [typeProject,setTypeProject] = useState()

  const [nameProjectChange,setNameProjectChange] = useState()
  const [typeProjectChange,setTypeProjectChange] = useState()

  const [filterCategory,setFilterCategory] =  useState([])

  const {updateCart,selectUserItens,updateComponent} = useContext(CartContext)
  const {imageBase64,name,animation,description,developTime,price} = useContext(ComponentContext)

    
    const sidebar = {
        position:"fixed",
        zIndex:"3",
        background:"white",
        top:"0",
        width:"300px",
        overflowY: "auto",
        height:"100vh",
        paddingTop:"5rem",
        borderRight:"1px solid #D7D7D7",
        borderLeft:"1px solid #D7D7D7",

    }

    const sidebar4 = {
      position:"fixed",
      top:"0",
      
      right:0,
      overflowY: "scroll",
      height:"100vh",
      paddingTop:"5rem",
      paddingBottom:"2.4rem",
      borderRight:"1px solid #D7D7D7",
      borderLeft:"1px solid #D7D7D7",

    }

    const containerFunctionalities = {

        display:"flex",
        flexDirection:"column",
        aligItems:"center",
        

    }

    const header = {

        display:"flex",
        borderBottom:"1px solid #D7D7D7",
        paddingLeft:"1rem",
        height:"3.6rem",
        

    }

    const containerText = {

      display:"flex",
      aligItems:"center",
      justifyContent:"space-between",

      borderBottom:"1px solid #D7D7D7",
      paddingLeft:"1rem",
      height:"2.5rem",
    }

    const headerColumn4 = {

      display:"flex",
      justifyContent:"space-between",
      borderBottom:"1px solid #D7D7D7",
      paddingLeft:"1rem",
      height:"4.6rem",
      marginBottom:"1.188rem",

      
    }

    const typeOption = {

      border:"1px solid #D7D7D7",
      width:"14.25rem",
      display:"flex",
      aligItems:"center",
      paddingLeft:"0.53rem",
      height:"57px",
      borderRadius:"10px",
      marginBottom:"1.188rem",

    }

    const infoProject = {
      zIndex:"1",
      borderBottom:"1px solid #D7D7D7",
      width:"14.25rem",
      display:"flex",
      aligItems:"center",
      paddingLeft:"0.53rem",
      marginBottom:"1.188rem",
    }

    const listProjects = {

      border:"1px solid #D7D7D7",
      width:"14.25rem",


    }

    const numberFeatures = {

      display:"flex",
      paddingTop:"0.2rem",
      justifyContent:"center",
      aligItems:"center",
      background:"#1172EB",
      width:"3.125rem",
      height:"28px",
      borderRadius:"15px",
      color:"white"
    }

    const footer = {

      position:"fixed",
      bottom:0,
      width:"100%",
      height:'89px',
      display:"flex",
      justifyContent:"space-between",
      paddingLeft:"32rem",
      paddingRight:"2rem",
      alignItems:"center",
      borderTop:"1px solid #e6e6e6",
      zIndex:"1",
      background:"white"
    }

    const btnFinish = {

      width:"170px",
      display:"flex",
      paddingTop:"0.9rem",
      alignItems:"center",
      justifyContent:"center",
      height:"40px",
      background:"#1172EB",
      borderRadius:"60px",
      border:"none",
      outline:"none"

    }



    const getItemsInCart =  async () => {

      const projectChange = localStorage.getItem("@PROJECT_CHANGE_ID")
      
      if(projectChange){


        const response = await api.post(`cart/user/`,{

          "id":projectChange,
          "mail":localStorage.getItem("@MAIL")
  
        })
        

        const responseInfoComponent = await api.post(`cart/value/`,{

          mail:localStorage.getItem("@MAIL"),
          project_id:projectChange

        })

        setPriceComponent(responseInfoComponent.data.price)
        setDaysToDevelop(responseInfoComponent.data.developTime)
        setItemsInCart(responseInfoComponent.data.items)
  
  
  
  
        setCartData(response.data)

        return false
             
      }

      const response = await api.post(`cart/user/`,{

        "id":localStorage.getItem("@PROJECT_ID"),
        "mail":localStorage.getItem("@MAIL")

      })
           
      const responseInfoComponent = await api.post(`cart/value/`,{


        
        mail:localStorage.getItem("@MAIL"),
        project_id:localStorage.getItem("@PROJECT_ID")
        
      })

      setPriceComponent(responseInfoComponent.data.price)
      setDaysToDevelop(responseInfoComponent.data.developTime)
      setItemsInCart(responseInfoComponent.data.items)




      setCartData(response.data)

    }

    const getAllCategorys =  async () => {


      const response = await api.get("categorys")

      setItems(response.data)

    }

    const getCategory = async () => {

      if(filterCategory != undefined && String(filterCategory).length >=3){


        const response = await api.get(`category/name/${filterCategory}`)

        if(response.status == 400){

          setItems([])
          return false

        }

        setItems(response.data)
  
      }


    }

    const loadImage = async () => {

      setImage(imageBase64)
      setNameComponent(name)

    }

    const getProject = async () => {

      const project = localStorage.getItem("@PROJECT_CHANGE_ID")
   
      if(project){

        const response = await api.post("project/info",{
  
          mail:localStorage.getItem("@MAIL"),
          project_id:project
        })

        setTypeProjectChange(response.data[0].type_project)      
        setNameProjectChange(response.data[0].name)

      }

    }

    const getInfoProject = async (changeToId) => {

      if(changeToId != undefined){
        
        const response = await api.post("project/info",{
  
          mail:localStorage.getItem("@MAIL"),
          project_id:changeToId
        })

        setTypeProject(response.data[0].type_project)      
        setNameProject(response.data[0].name)

        localStorage.setItem("@PROJECT_CHANGE_ID",changeToId)
        window.location.href="/functionalities"

        return false

      }
      
      const responseInfo = await api.get(`project/all/${localStorage.getItem("@MAIL")}`)

      const response = await api.post("project/info",{

        mail:localStorage.getItem("@MAIL"),
        project_id:responseInfo.data[0].project_id
      })

      
      setTypeProject(response.data[0].type_project)      
      setNameProject(response.data[0].name)

    }

    const getProjects = async () => {

      const response = await api.get(`project/all/${localStorage.getItem("@MAIL")}`)

      setProjects(response.data)

    }

    const createNewProject = async () => {

      const response = await api.post("project",{
      
      "name":"Novo Projeto",
      "mail":localStorage.getItem("@MAIL"),
      "description":"Test",
      "velocity":"0",
      "scale_service":"false",
      "type_project":"web"

      })

      localStorage.setItem("@PROJECT_ID",response.data.projectId)

  
      if(response.status == 200){
        window.location.href="/functionalities"

      }
    
    }

    const removeProject = async (id) => {

      const response = await api.delete(`/project/${id}`)
      
      if(response.status == 200){

        notify("Projeto deletado com sucesso!")
        const responseInfo = await api.get(`project/all/${localStorage.getItem("@MAIL")}`)
        localStorage.setItem("@PROJECT_ID",responseInfo.data[0].project_id)
        setProjectDelete(!projectDelete)
      }

      


    }

    
    const notify = (message) => toast(message);

    useEffect(() => {
      getProjects()

    },[])

    useEffect(() => {

      getProjects()

    },[projectDelete])

    useEffect(() => {
      getAllCategorys()
    },[])

    useEffect(() => {

      getInfoProject()
      
    },[])

    useEffect(() => {

      getInfoProject()
      
    },[projectDelete])

    useEffect(() => {
      getItemsInCart()
    },[updateCart,updateComponent])

    useEffect(() =>{

      loadImage()

    },[imageBase64])

    useEffect(() => {

      getProject()


    },[])

    useEffect(() => {

      getCategory()
      
    },[filterCategory])

    return(

      
      <>
        <ToastContainer />

      <ThreeColumLayout 

      typeHeader={'functionalities'}

      colum2Data={
        
        <div style={sidebar}>

        <div style={header} >
        <InputSearchhProjetFunctionalities onChange={(e) => setFilterCategory(e.target.value)} placeholder={'Pesquisar'} width={"220px"} height={"40x"}/>

        <div style={{marginLeft:"0.9rem",marginTop:"0.15rem"}}>
        
        <svg widt="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="0.5" width="34" height="34" rx="17" fill="white" stroke="#D7D7D7"/>
        <path d="M23.515 11.4703C23.1985 11.1684 22.7781 11 22.3409 11C21.9037 11 21.4833 11.1684 21.1667 11.4703L15.0887 17.5516C14.8996 17.5152 14.7075 17.497 14.5149 17.4973C14.1234 17.4962 13.7357 17.5728 13.374 17.7228C13.0123 17.8728 12.684 18.0931 12.4079 18.371C11.3666 19.4156 11.0879 22.7251 11.0412 23.3777L11 24L11.621 23.9566C12.2718 23.912 15.5801 23.6346 16.6224 22.5904C16.9672 22.2442 17.2218 21.8185 17.3636 21.3507C17.5055 20.8828 17.5303 20.3873 17.4359 19.9076L23.515 13.8214C23.8256 13.5091 24 13.0865 24 12.6458C24 12.2052 23.8256 11.7825 23.515 11.4703ZM15.8556 21.8227C15.3512 22.3271 13.5414 22.6697 12.1818 22.8163C12.3352 21.4046 12.6932 19.6214 13.1748 19.1387C13.5361 18.8129 14.0086 18.6384 14.4947 18.6511C14.9808 18.6638 15.4435 18.8628 15.7873 19.207C16.1312 19.5513 16.33 20.0145 16.3427 20.5012C16.3554 20.9879 16.181 21.4609 15.8556 21.8227ZM22.7493 13.0536L16.9891 18.8211C16.775 18.4967 16.4985 18.2183 16.1756 18.0023L21.9336 12.237C22.0431 12.1322 22.1888 12.0737 22.3403 12.0737C22.4918 12.0737 22.6375 12.1322 22.7471 12.237C22.8009 12.2904 22.8436 12.3539 22.8729 12.4239C22.9021 12.4939 22.9172 12.569 22.9174 12.6448C22.9176 12.7207 22.9029 12.7958 22.874 12.866C22.8452 12.9361 22.8028 12.9999 22.7493 13.0536Z" fill="#1172EB"/>
        </svg>
        
        </div>
        </div>

        <row></row>


     
        <div style={containerFunctionalities}>

        
        {items.map(item => {


          return(
            <div key={item.id}>
            <Functionalitie id={item.id} price={item.price} type={item.name} name={item.name}  />
            </div>
          )


        })}          




        </div>
        

        </div>

      }


      colum3Data={
        
      
        <div style={{display:"flex",width:"100%",flexDirection:"column",alignItems:"center", justifyContent:"center", position:"relative",height:"100vh"}}>
        
        
        <div style={{width:"100%",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
        {animation == true 
        
        ?

        <div>
        <div class="ssc ssc-card" style={{width:"480px",height:"520px"}}>
        <div class="ssc-wrapper">
        <div class="ssc-square mb"></div>
        <div class="flex align-center justify-between">
        <div class="w-40">
        <div class="ssc-line w-70 mbs"></div>
        <div class="ssc-line w-100 mbs"></div>
        </div>
        <div class="ssc-head-line w-50"></div>
        </div>
        </div>
        <div class="ssc-hr"></div>
        <div class="ssc-wrapper">
        <div class="ssc-line w-90 mbs"></div>
        <div class="ssc-line w-30 mbs"></div>
        <div class="ssc-line w-70 mbs"></div>
        <div class="ssc-line w-50 mbs"></div>
        </div>
        <div class="ssc-hr"></div>
        <div class="ssc-wrapper">
        <div class="ssc-head-line"></div>
        </div>
        </div>
        </div>
        :
        image == undefined ? <></> :<img  style={{objectFit:'contain',width:'300px',height:"300px",borderRadius:'5px'}} src={"data:image/png;base64,"+ image }/>


        }

  
        {animation == true 
        
        ?
        <></>
        :

        image != undefined 
        
        ?
        

        <>
        <p className="textNameImageComponent">{nameComponent}</p>

        <div style={{width:"520px"}}>
        <p className="textPreviewComponent" style={{textAlign:"center"}}>{description}</p>
        </div>
        <div style={{display:"flex",justifyContent:"space-around",width:"220px",marginBottom:"2.5rem"}}>
        
        <div>
        <p className="textInfoProjectTimePrimary">Tempo</p>
        <p className="textInfoProjectTimeSecondary">{developTime} Dias</p>
        
        </div>
        
        <svg width="2" height="59" viewBox="0 0 2 59" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.20898 59L1.20898 7.74861e-07" stroke="#C1C1C1" stroke-width="0.8"/>
        </svg>

             
        <div>
        <p className="textInfoProjectTimePrimary">Valor</p>
        <p className="textInfoProjectTimeSecondary">{price != undefined ? Number(price).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) : <></>}</p>
        </div>

        </div>
        </>
        :
        <></>
        }


        </div>


    
        <footer  style={footer}>

        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",width:"580px",paddingTop:"0.438rem"}}>

        <div>
        <p className="textValueProject">Valor</p>
        <p className="textInfoProject">{priceComponent != undefined ? priceComponent.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) : <></>}</p>
        </div>

        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.125 6.125H7.875V0.875C7.875 0.391754 7.48325 0 7 0C6.51675 0 6.125 0.391754 6.125 0.875V6.125H0.875C0.391754 6.125 0 6.51675 0 7C0 7.48325 0.391754 7.875 0.875 7.875H6.125V13.125C6.125 13.6082 6.51675 14 7 14C7.48325 14 7.875 13.6082 7.875 13.125V7.875H13.125C13.6082 7.875 14 7.48325 14 7C14 6.51675 13.6082 6.125 13.125 6.125Z" fill="black"/>
        </svg>

        
        <div style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",height:"30px"}}>
        <p  className="textValueProject">Startpn Scale</p>
        <p>-</p>
        </div>


        <svg width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.0625 2.84131H0.9375C0.419736 2.84131 0 2.39359 0 1.84131C0 1.28903 0.419736 0.841309 0.9375 0.841309H14.0625C14.5803 0.841309 15 1.28903 15 1.84131C15 2.39359 14.5803 2.84131 14.0625 2.84131Z" fill="#6B6B6B"/>
        <path d="M14.0625 7.15869H0.9375C0.419736 7.15869 0 6.71097 0 6.15869C0 5.60641 0.419736 5.15869 0.9375 5.15869H14.0625C14.5803 5.15869 15 5.60641 15 6.15869C15 6.71097 14.5803 7.15869 14.0625 7.15869Z" fill="#6B6B6B"/>
        </svg>


        <div style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",height:"30px"}}>
        <p  className="textValueProject">Custo total</p>
        <p className="textInfoProject">{priceComponent != undefined ? priceComponent.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) : <></>}</p>
        </div>

          
        <svg width="2" height="59" viewBox="0 0 2 59" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.20898 59L1.20898 7.74861e-07" stroke="#C1C1C1" stroke-width="0.8"/>
        </svg>


        <div style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",height:"30px"}}>
        <p  className="textValueProject">Desenvolvimento</p>
        <p className="textInfoProject">{daysToDevelop != undefined ? daysToDevelop : 0} dias úteis</p>
        </div>


        </div>

        <button style={btnFinish}>
          <p className="textBtnFinish">Prosseguir</p>

        </button>

        </footer> 
        </div>
      }


      colum4Data={
        
        <div style={sidebar4}>
        <div style={headerColumn4}>

        <div class="dropdown">


        <div style={typeOption}  data-toggle="dropdown" >
        
        {typeProjectChange == undefined 
        
        ?
        typeProject == "mobile" ? <img style={{width:"30px"}} src={mobileIconSidebar}/> :  <img src={weMobileIcon} style={{width:"30px"}}/> 
        :
        typeProjectChange == "mobile" ? <img style={{width:"30px"}} src={mobileIconSidebar}/> :  <img src={weMobileIcon} style={{width:"30px"}}/>
        }
          

        <div>
        {typeProjectChange == undefined  
        
        ?
        <p className="textTypeOptionSidebar" style={{marginLeft:"1.125rem",marginTop:"0.438rem"}}>{typeProject == "mobile" ? "Mobile" : "Web"}</p>
      
        :
        <p className="textTypeOptionSidebar" style={{marginLeft:"1.125rem",marginTop:"0.438rem"}}>{typeProjectChange == "mobile"? "Mobile" : "Web"}</p>

        }
        
        <div style={{display:"flex",alignItems:"center",height:"30px",marginTop:"-0.663rem"}}>
        <p className="textTypeOptionProject" style={{marginLeft:"1.125rem",}}>{nameProject != undefined && nameProjectChange == undefined  ? nameProject : nameProjectChange}</p>

        <div style={{position:"relative",top:"-13px",left:"10px"}}>              
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.3817 0.622052C12.0134 0.254367 11.5143 0.0478516 10.9939 0.0478516C10.4735 0.0478516 9.9744 0.254367 9.60615 0.622052L0.79648 9.43172C0.544199 9.68258 0.344168 9.98098 0.207958 10.3096C0.071748 10.6383 0.00206412 10.9907 0.0029378 11.3465V12.4586C0.0029378 12.6022 0.0600061 12.74 0.161588 12.8416C0.263171 12.9432 0.400946 13.0002 0.544605 13.0002H1.65665C2.01239 13.0012 2.36481 12.9317 2.69348 12.7955C3.02216 12.6594 3.32057 12.4595 3.57144 12.2072L12.3817 3.39701C12.7492 3.02878 12.9556 2.52978 12.9556 2.00953C12.9556 1.48928 12.7492 0.99028 12.3817 0.622052ZM2.80552 11.4413C2.50002 11.7448 2.08725 11.9156 1.65665 11.9169H1.08627V11.3465C1.08572 11.133 1.12752 10.9216 1.20925 10.7244C1.29098 10.5272 1.41101 10.3481 1.5624 10.1976L8.24819 3.51184L9.49402 4.75768L2.80552 11.4413ZM11.6152 2.63109L10.2578 3.98905L9.01194 2.74593L10.3699 1.38797C10.4517 1.30634 10.5488 1.24163 10.6556 1.19752C10.7624 1.15342 10.8769 1.13078 10.9924 1.13091C11.108 1.13103 11.2224 1.15392 11.3291 1.19826C11.4358 1.2426 11.5328 1.30752 11.6144 1.38932C11.696 1.47113 11.7607 1.5682 11.8048 1.67502C11.8489 1.78183 11.8716 1.89628 11.8714 2.01184C11.8713 2.1274 11.8484 2.24181 11.8041 2.34852C11.7598 2.45524 11.6948 2.55218 11.613 2.6338L11.6152 2.63109Z" fill="#23262F"/>
        </svg>
        </div>

        </div>

        </div>
        <div style={{marginTop:"0.663rem",position:"absolute",right:"15px"}}>

        <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.56565 7.50066L11.9814 1.6605C12.1067 1.52542 12.1758 1.3451 12.1758 1.15284C12.1758 0.960576 12.1067 0.780261 11.9814 0.645185L11.5826 0.215097C11.3228 -0.0647638 10.9005 -0.0647638 10.6411 0.215097L6.0933 5.11923L1.54047 0.209655C1.41512 0.0745794 1.248 -5.01267e-07 1.06981 -5.09441e-07C0.891412 -5.17624e-07 0.724298 0.0745794 0.59884 0.209655L0.200202 0.639743C0.0748424 0.774926 0.00578113 0.955134 0.00578113 1.1474C0.00578112 1.33966 0.0748424 1.51998 0.200202 1.65505L5.62085 7.50066C5.74661 7.63606 5.91451 7.71042 6.09301 7.71C6.27219 7.71042 6.44 7.63606 6.56565 7.50066Z" fill="#23262F"/>
        </svg>
        </div>
  

        </div>


        <div style={listProjects} class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        
        {projects.map(item => {

          return(

            <div style={infoProject} onClick={() => getInfoProject(item.project_id)}  >
            {item.type_project == "mobile" ? <img style={{width:"30px"}} src={mobileIconSidebar}/> :  <img src={weMobileIcon} style={{width:"30px"}}/>}

            <div>
            <p className="textTypeOptionSidebar" style={{marginLeft:"1.125rem",marginTop:"0.438rem"}}>{item.type_project}</p>
            
            <div style={{display:"flex",alignItems:"center",height:"30px",marginTop:"-0.663rem"}}>
            <p className="textTypeOptionProject" style={{marginLeft:"1.125rem",}}>{item.name != undefined ? item.name : <></>}</p>
            </div>

            </div>

            <div  onClick={() => removeProject(item.id)} style={{marginLeft:"1.135rem",marginTop:"0.663rem",position:"absolute",right:"15px",cursor:"pointer"}}>
              
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.6247 3.16667H14.1705C13.9868 2.2732 13.5006 1.4704 12.794 0.893568C12.0874 0.316738 11.2035 0.0011515 10.2913 0L8.70801 0C7.79585 0.0011515 6.91197 0.316738 6.20535 0.893568C5.49874 1.4704 5.01259 2.2732 4.82884 3.16667H2.37467C2.16471 3.16667 1.96335 3.25007 1.81488 3.39854C1.66642 3.54701 1.58301 3.74837 1.58301 3.95833C1.58301 4.16829 1.66642 4.36966 1.81488 4.51812C1.96335 4.66659 2.16471 4.75 2.37467 4.75H3.16634V15.0417C3.1676 16.0911 3.58504 17.0972 4.3271 17.8392C5.06916 18.5813 6.07525 18.9987 7.12468 19H11.8747C12.9241 18.9987 13.9302 18.5813 14.6723 17.8392C15.4143 17.0972 15.8318 16.0911 15.833 15.0417V4.75H16.6247C16.8346 4.75 17.036 4.66659 17.1845 4.51812C17.3329 4.36966 17.4163 4.16829 17.4163 3.95833C17.4163 3.74837 17.3329 3.54701 17.1845 3.39854C17.036 3.25007 16.8346 3.16667 16.6247 3.16667ZM8.70801 1.58333H10.2913C10.7824 1.58393 11.2612 1.73642 11.6622 2.01989C12.0632 2.30336 12.3666 2.70393 12.531 3.16667H6.46839C6.63272 2.70393 6.93618 2.30336 7.33715 2.01989C7.73812 1.73642 8.21696 1.58393 8.70801 1.58333ZM14.2497 15.0417C14.2497 15.6715 13.9995 16.2756 13.5541 16.721C13.1087 17.1664 12.5046 17.4167 11.8747 17.4167H7.12468C6.49479 17.4167 5.8907 17.1664 5.4453 16.721C4.9999 16.2756 4.74968 15.6715 4.74968 15.0417V4.75H14.2497V15.0417Z" fill="black"/>
            <path d="M7.91666 14.2503C8.12663 14.2503 8.32799 14.1669 8.47646 14.0185C8.62492 13.87 8.70833 13.6686 8.70833 13.4587V8.70866C8.70833 8.4987 8.62492 8.29733 8.47646 8.14887C8.32799 8.0004 8.12663 7.91699 7.91666 7.91699C7.7067 7.91699 7.50534 8.0004 7.35687 8.14887C7.20841 8.29733 7.125 8.4987 7.125 8.70866V13.4587C7.125 13.6686 7.20841 13.87 7.35687 14.0185C7.50534 14.1669 7.7067 14.2503 7.91666 14.2503Z" fill="black"/>
            <path d="M11.0837 14.2493C11.2936 14.2493 11.495 14.1659 11.6435 14.0175C11.7919 13.869 11.8753 13.6676 11.8753 13.4577V8.70768C11.8753 8.49772 11.7919 8.29636 11.6435 8.14789C11.495 7.99942 11.2936 7.91602 11.0837 7.91602C10.8737 7.91602 10.6723 7.99942 10.5239 8.14789C10.3754 8.29636 10.292 8.49772 10.292 8.70768V13.4577C10.292 13.6676 10.3754 13.869 10.5239 14.0175C10.6723 14.1659 10.8737 14.2493 11.0837 14.2493Z" fill="black"/>
            </svg>

            </div>
            <div style={{height:"5px"}}></div>
            </div>

          )

        })}
   

        </div>

        </div>

        <div style={{marginRight:"0.875rem",marginLeft:"0.938rem"}} onClick={() => createNewProject()}>
        <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="0.5" width="54" height="54" rx="7.5" fill="white" stroke="#D7D7D7"/>
        <path d="M36.1875 26.0208H29.3125V19.1458C29.3125 18.513 28.7995 18 28.1667 18C27.5338 18 27.0208 18.513 27.0208 19.1458V26.0208H20.1458C19.513 26.0208 19 26.5338 19 27.1667C19 27.7995 19.513 28.3125 20.1458 28.3125H27.0208V35.1875C27.0208 35.8203 27.5338 36.3333 28.1667 36.3333C28.7995 36.3333 29.3125 35.8203 29.3125 35.1875V28.3125H36.1875C36.8203 28.3125 37.3333 27.7995 37.3333 27.1667C37.3333 26.5338 36.8203 26.0208 36.1875 26.0208Z" fill="#23262F"/>
        </svg>
        </div>



        
                
        </div>

        <div style={containerText}>

          <p className="textFunctionalities">Funcionalidades</p>

          <div style={{marginRight:"0.875rem",marginLeft:"0.938rem"}}>

          <div style={numberFeatures}>
          <p className="textNumberFeatures">{itemsInCart}</p>
          </div>
          
          </div>

        </div>
     

        <div style={containerFunctionalities}>

        
        {cartData.map(item => {
          

        return(
          <div key={item.id}>
          <PreviewFunctionalitie category={item.category}  type={item.type}  id={item.componentSelect}   idToRemove={item.id} name={item.name}/>
          </div>
        )


        })}
          <div style={{height:"50px"}}></div>



        </div>
        

        </div>

      }
      
      />
    
      <ModalCreateProject/>

      </>
    )

}

export default FunctionaLities