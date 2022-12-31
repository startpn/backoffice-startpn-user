import React,{useState,useEffect} from 'react'

import MateusBarbosa from '../../images/Svg/mateusBarbosa.svg'
import backIcon from '../../images/png/backIcon.png'

import api from '../../services/api'

const HeaderFunctionalities = ({type}) =>{

    const [name,setName] = useState()

    const getData = async () => {

        const mail = localStorage.getItem("@MAIL")
        const response = await api.get(`user/${mail}`)        
        setName(response.data[0].name)

    }

    const setType = () => {

        localStorage.setItem("@TYPE","mobile")

    }

    useEffect(() =>{
        setType()
        getData()

    },[])

        
    const columnHeader = {

        position:"fixed",
        width:"100%",
        gridColumnStart: '1',
        gridColumnEnd: '3',
        gridRowStart: '1',
        zIndex:"4",
        background:"white",
        display:"flex",
        justifyContent: "space-between",
        alignItems:"center",
        gridRowEnd: '1',
        paddingLeft:"6.6rem",
        borderBottom:"1.9px solid #d7d7d7",
        height:"4.3rem",
        paddingRight:'3.25rem'
    }

    const userInfo = {

        display:"flex",
        alignItems:"center",
        paddingLeft:"1.1rem",
        justifyContent: "space-between",
        paddingRight:"1.1rem",
        width:"234px",
        background:"white",
        height:"45px",
        border:"1.9px solid #d7d7d7",
        borderRadius:"60px"

    }

    return(
        
        
        <header style={columnHeader}>

        {type == 'functionalities' 
        
        ?

        <>
        <img src={backIcon} style={{cursor:"pointer"}} onClick={() => window.location.href="/dashboard"}/>
        <p className="textHeaderThowColumnLayout">Funcionalidades</p>

        <div style={{marginLeft:"2.625rem",marginRight:"3.5rem"}}>
        <svg width="73" height="35" viewBox="0 0 73 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="0.5" width="72" height="34" rx="5.5" fill="white"/>
        <g filter="url(#filter0_b_2472_930)">
        <rect x="3" y="3" width="29" height="29" rx="5" fill="#1172EB"/>
        </g>
        <path d="M19.8646 26.25H15.3021C13.2056 26.25 11.5 24.5444 11.5 22.4479V11.8021C11.5 9.70561 13.2056 8 15.3021 8H19.8646C21.9611 8 23.6667 9.70561 23.6667 11.8021V22.4479C23.6667 24.5444 21.9611 26.25 19.8646 26.25ZM15.3021 9.52083C14.0444 9.52083 13.0208 10.5444 13.0208 11.8021V22.4479C13.0208 23.7056 14.0444 24.7292 15.3021 24.7292H19.8646C21.1223 24.7292 22.1458 23.7056 22.1458 22.4479V11.8021C22.1458 10.5444 21.1223 9.52083 19.8646 9.52083H15.3021ZM19.1042 22.4479C19.1042 22.0282 18.7635 21.6875 18.3437 21.6875H16.8229C16.4032 21.6875 16.0625 22.0282 16.0625 22.4479C16.0625 22.8677 16.4032 23.2083 16.8229 23.2083H18.3437C18.7635 23.2083 19.1042 22.8677 19.1042 22.4479Z" fill="white"/>
        <path d="M65.3876 19.8456V12.8611C65.3861 11.5723 64.8734 10.3368 63.9621 9.42549C63.0508 8.51419 61.8153 8.00154 60.5265 8H50.8043C49.5155 8.00154 48.2799 8.51419 47.3686 9.42549C46.4573 10.3368 45.9447 11.5723 45.9432 12.8611V19.8456C45.295 20.0738 44.7485 20.5242 44.4006 21.1168C44.0526 21.7094 43.9256 22.406 44.0421 23.0832C44.1585 23.7605 44.5109 24.3747 45.0368 24.817C45.5627 25.2593 46.2282 25.5013 46.9154 25.5H64.4154C65.1026 25.5013 65.768 25.2593 66.2939 24.817C66.8198 24.3747 67.1722 23.7605 67.2887 23.0832C67.4051 22.406 67.2781 21.7094 66.9302 21.1168C66.5822 20.5242 66.0358 20.0738 65.3876 19.8456ZM50.8043 9.94444H60.5265C61.3 9.94444 62.0419 10.2517 62.5889 10.7987C63.1359 11.3457 63.4432 12.0876 63.4432 12.8611V19.6667H59.4075C59.1247 19.6665 58.8453 19.728 58.5887 19.8468C58.3321 19.9657 58.1046 20.1391 57.9219 20.355L57.6818 20.6389H53.648L53.4088 20.355C53.2262 20.1391 52.9986 19.9657 52.7421 19.8468C52.4855 19.728 52.2061 19.6665 51.9233 19.6667H47.8876V12.8611C47.8876 12.0876 48.1949 11.3457 48.7419 10.7987C49.2889 10.2517 50.0307 9.94444 50.8043 9.94444ZM64.4154 23.5555H46.9154C46.6575 23.5555 46.4102 23.4531 46.2279 23.2708C46.0456 23.0885 45.9432 22.8412 45.9432 22.5833C45.9432 22.3255 46.0456 22.0782 46.2279 21.8959C46.4102 21.7135 46.6575 21.6111 46.9154 21.6111H51.9243L52.1634 21.895C52.346 22.1107 52.5734 22.2841 52.8298 22.4029C53.0862 22.5218 53.3654 22.5834 53.648 22.5833H57.6818C57.9645 22.5835 58.244 22.522 58.5005 22.4031C58.7571 22.2843 58.9846 22.1108 59.1673 21.895L59.4075 21.6111H64.4154C64.6732 21.6111 64.9205 21.7135 65.1028 21.8959C65.2852 22.0782 65.3876 22.3255 65.3876 22.5833C65.3876 22.8412 65.2852 23.0885 65.1028 23.2708C64.9205 23.4531 64.6732 23.5555 64.4154 23.5555Z" fill="black"/>
        <rect x="0.5" y="0.5" width="72" height="34" rx="5.5" stroke="#D7D7D7"/>
        <defs>
        <filter id="filter0_b_2472_930" x="-7" y="-7" width="49" height="49" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="5"/>
        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2472_930"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_2472_930" result="shape"/>
        </filter>
        </defs>
        </svg>
        </div>

        <div style={{marginRight:"10.563rem"}}>
        <svg width="382" height="35" viewBox="0 0 382 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="53.5293" y="13.897" width="100.976" height="6.17647" rx="3.08824" fill="#EFF0F7"/>
        <rect x="53.5293" y="13.897" width="50.4875" height="6.17647" rx="3.08824" fill="#1172EB"/>
        <rect x="226.563" y="13.897" width="100.976" height="6.17647" rx="3.08824" fill="#EFF0F7"/>
        <circle cx="17.5" cy="17.5" r="17.5" fill="#1172EB"/>
        <path d="M16.6996 22.2061V12.9261L14.8916 13.3421V12.0941L17.3716 11.0061H18.4596V22.2061H16.6996Z" fill="white"/>
        <circle cx="190.534" cy="17.5" r="17.5" fill="#EFF0F7"/>
        <path d="M187.424 22.147V21.203C188.181 20.6056 188.896 20.003 189.568 19.395C190.251 18.7763 190.853 18.1683 191.376 17.571C191.909 16.9736 192.325 16.387 192.624 15.811C192.933 15.235 193.088 14.6803 193.088 14.147C193.088 13.7523 193.019 13.3843 192.88 13.043C192.752 12.7016 192.539 12.4296 192.24 12.227C191.941 12.0136 191.536 11.907 191.024 11.907C190.533 11.907 190.123 12.019 189.792 12.243C189.461 12.4563 189.211 12.7443 189.04 13.107C188.88 13.4696 188.8 13.859 188.8 14.275H187.504C187.504 13.539 187.659 12.9096 187.968 12.387C188.277 11.8536 188.699 11.4483 189.232 11.171C189.765 10.8936 190.368 10.755 191.04 10.755C192.032 10.755 192.843 11.0376 193.472 11.603C194.112 12.1576 194.432 12.9896 194.432 14.099C194.432 14.7603 194.267 15.4163 193.936 16.067C193.605 16.707 193.184 17.331 192.672 17.939C192.16 18.5363 191.611 19.0963 191.024 19.619C190.448 20.1416 189.909 20.611 189.408 21.027H194.816V22.147H187.424Z" fill="#6F6C90"/>
        <circle cx="363.567" cy="17.5" r="17.5" fill="#EFF0F7"/>
        <path d="M363.092 22.339C362.378 22.339 361.732 22.211 361.156 21.955C360.58 21.6883 360.116 21.2936 359.764 20.771C359.423 20.2483 359.242 19.5976 359.22 18.819H360.58C360.591 19.459 360.815 20.0136 361.252 20.483C361.69 20.9416 362.303 21.171 363.092 21.171C363.882 21.171 364.474 20.9523 364.868 20.515C365.274 20.0776 365.476 19.5496 365.476 18.931C365.476 18.4083 365.348 17.9816 365.092 17.651C364.847 17.3203 364.511 17.075 364.084 16.915C363.668 16.755 363.21 16.675 362.708 16.675H361.876V15.539H362.708C363.434 15.539 363.999 15.3736 364.404 15.043C364.82 14.7123 365.028 14.2483 365.028 13.651C365.028 13.1496 364.863 12.739 364.532 12.419C364.212 12.0883 363.732 11.923 363.092 11.923C362.474 11.923 361.978 12.1096 361.604 12.483C361.231 12.8456 361.023 13.3043 360.98 13.859H359.62C359.652 13.251 359.812 12.7123 360.1 12.243C360.399 11.7736 360.804 11.411 361.316 11.155C361.828 10.8883 362.42 10.755 363.092 10.755C363.818 10.755 364.42 10.883 364.9 11.139C365.391 11.395 365.759 11.7363 366.004 12.163C366.26 12.5896 366.388 13.059 366.388 13.571C366.388 14.1363 366.234 14.6536 365.924 15.123C365.615 15.5816 365.151 15.891 364.532 16.051C365.194 16.1896 365.743 16.5043 366.18 16.995C366.618 17.4856 366.836 18.131 366.836 18.931C366.836 19.5496 366.692 20.1203 366.404 20.643C366.127 21.155 365.711 21.5656 365.156 21.875C364.602 22.1843 363.914 22.339 363.092 22.339Z" fill="#6F6C90"/>
        </svg>
        </div>


        <div class="dropdown">
        <button style={userInfo} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <img style={{position:'relative',right:'10px'}} src={MateusBarbosa}/>
        <p className="textClientInfoHeader">{name}</p>

        <svg width="8" height="8" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.182668 1.78582C0.0688405 1.57763 0.0688405 1.32582 0.182668 1.11763C0.446809 0.634515 1.14065 0.634515 1.40479 1.11763L2.41937 2.97328C3.12207 4.25852 4.96793 4.25852 5.67064 2.97327L6.68521 1.11763C6.94935 0.634515 7.64319 0.634515 7.90733 1.11763C8.02116 1.32582 8.02116 1.57763 7.90733 1.78582L6.67725 4.03563C5.53942 6.11672 2.55058 6.11672 1.41275 4.03563L0.182668 1.78582Z" fill="black"/>
        </svg>


        </button>

        
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Perfil</a>
            <a class="dropdown-item" href="#">Projetos</a>
            <a class="dropdown-item" href="#">Sair</a>
        </div>
        </div>

    
        </>
    
        :
        
        <>
        <p className="textHeaderThowColumnLayout">Projetos</p>

        <div class="dropdown">
        <button style={userInfo} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <img style={{position:'relative',right:'10px'}} src={MateusBarbosa}/>
        <p className="textClientInfoHeader">Mateus Barbosa</p>

        <svg width="8" height="8" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.182668 1.78582C0.0688405 1.57763 0.0688405 1.32582 0.182668 1.11763C0.446809 0.634515 1.14065 0.634515 1.40479 1.11763L2.41937 2.97328C3.12207 4.25852 4.96793 4.25852 5.67064 2.97327L6.68521 1.11763C6.94935 0.634515 7.64319 0.634515 7.90733 1.11763C8.02116 1.32582 8.02116 1.57763 7.90733 1.78582L6.67725 4.03563C5.53942 6.11672 2.55058 6.11672 1.41275 4.03563L0.182668 1.78582Z" fill="black"/>
        </svg>


        </button>

        
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Perfil</a>
            <a class="dropdown-item" href="#">Projetos</a>
            <a class="dropdown-item" href="#">Sair</a>
        </div>
        </div>

        </>


        }

       
        </header>
            
    )

}

export default HeaderFunctionalities