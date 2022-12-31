import React from 'react'

import desktopIcon from '../../images/Svg/desktopIcon.svg'
import mobileIcon from '../../images/Svg/mobileIcon.svg'

const Card = () => {

    const card = {

        width:"360px",
        height:"470px",
        border:"1px solid #d7d7d7",
        borderRadius:"15px",
        marginBottom:"4.9rem"

    }

    const headerCard = {



    }

    const infoHeader = {

        paddingTop:"1.375rem",
        paddingLeft:"1.313rem",
        borderBottom:"1px solid #d7d7d7",
    }

    const rowInfoClient = {

        display:"flex",
        alignItems:"center",
        marginTop:"1.813rem"

    }
    
    const features = {

        display:"flex",
        alignItems:"center",
        marginTop:"1.678rem",


    }
    
    const infoFeature = {
        border:"1px solid #d7d7d7",
        width:"145.71px",
        paddingTop:"0.875rem",
        paddingLeft:"0.997rem",
        paddingBottom:"0.688rem",

        height:"70px",
        borderRadius:"10px",
    }

    const infoDateFeature = {

        border:"1px solid #d7d7d7",
        width:"145.71px",
        paddingTop:"0.875rem",
        paddingLeft:"0.997rem",
        paddingBottom:"0.688rem",
        height:"70px",
        borderRadius:"10px",
        marginLeft:"1.662rem"
    }

    const btn = {

        width:"319.09px",
        height:"40px",
        background:"#1172EB",
        color:"white",
        border:"none",
        outline:"none",
        borderRadius:"60px",
        marginTop:"1.938rem"
    }
   
    return(

        
        <div style={card}>

        <div style={headerCard}>
        
        <div style={infoHeader}>
        <p className="nameProjectInfoHeaderCard">Nome do projeto</p>
        
        <div style={{display:"flex",alignItems:"center"}}>
        <p className="nameSecondaryProjectInfoHeaderCard">aplicativo CRM</p>
        <svg width="13" style={{position:'relative',top:'-11px',left:'10px'}} height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.3787 0.622052C12.0105 0.254367 11.5114 0.0478516 10.991 0.0478516C10.4706 0.0478516 9.97147 0.254367 9.60322 0.622052L0.79355 9.43172C0.541269 9.68258 0.341238 9.98098 0.205028 10.3096C0.0688183 10.6383 -0.000865571 10.9907 8.11483e-06 11.3465V12.4586C8.11483e-06 12.6022 0.0570764 12.74 0.158659 12.8416C0.260241 12.9432 0.398016 13.0002 0.541675 13.0002H1.65372C2.00946 13.0012 2.36188 12.9317 2.69055 12.7955C3.01923 12.6594 3.31764 12.4595 3.56851 12.2072L12.3787 3.39701C12.7462 3.02878 12.9527 2.52978 12.9527 2.00953C12.9527 1.48928 12.7462 0.99028 12.3787 0.622052ZM2.80259 11.4413C2.49709 11.7448 2.08432 11.9156 1.65372 11.9169H1.08334V11.3465C1.08279 11.133 1.12459 10.9216 1.20632 10.7244C1.28805 10.5272 1.40808 10.3481 1.55947 10.1976L8.24526 3.51184L9.49109 4.75768L2.80259 11.4413ZM11.6123 2.63109L10.2548 3.98905L9.00901 2.74593L10.367 1.38797C10.4488 1.30634 10.5459 1.24163 10.6527 1.19752C10.7595 1.15342 10.8739 1.13078 10.9895 1.13091C11.1051 1.13103 11.2195 1.15392 11.3262 1.19826C11.4329 1.2426 11.5298 1.30752 11.6115 1.38932C11.6931 1.47113 11.7578 1.5682 11.8019 1.67502C11.846 1.78183 11.8686 1.89628 11.8685 2.01184C11.8684 2.1274 11.8455 2.24181 11.8012 2.34852C11.7568 2.45524 11.6919 2.55218 11.6101 2.6338L11.6123 2.63109Z" fill="#23262F"/>
        </svg>
        </div>

        </div>
        
        <div style={{paddingLeft:"1.313rem"}}>

        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",width:"310px",marginTop:"1.875rem"}}>
    


        <p  className="textInDevelopementCard" >Em desenvolvimento</p>
        <p className="percentageDevelopementCard">25%</p>
        </div>
        <div class="progress" style={{width:"310px",height:'8px'}}>
            
        <div class="progress-bar" role="progressbar" style={{width: '25%',height:'8px'}} aria-valuenow="25" aria-valuemin="0" ar6ia-valuemax="100"></div>
        </div>
        
        <div style={{marginTop:"2.438rem"}}>
        <img src={desktopIcon}/>
        <img src={mobileIcon} style={{marginLeft:"0.972rem"}}/>
        </div>

        <div style={features}>

        <div style={infoFeature}>
        <p className="textNumberFeaturesCard">N° Features</p>
        <p className="textCountNumberFeaturesCard">20/25</p>
        </div>

        <div style={infoDateFeature}>
        <p className="textDateCard">Entrega</p>
        <p className="textNumberDateCard">25/04/2022</p>
        </div>

        </div>

        <button className="textBtnCard" style={btn}>Acompanhar projeto</button>

        </div>

        </div>

        </div>

    )

}

export default Card