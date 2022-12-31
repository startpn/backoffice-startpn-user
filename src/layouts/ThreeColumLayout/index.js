import React from 'react'
import Sidebar from "../../components/Sidebar";
import HeaderFunctionalities from '../../components/HeaderFunctionalities';
const ThreeColumLayout = ({colum2Data,colum3Data,colum4Data,page,typeHeader}) =>{
    

    const container_three_column = {

        'display': 'grid',
        'gridTemplateColumns': '1fr 1fr 1fr',
    }

    const column1 = {

        gridColumnStart: '1',
        gridColumnEnd: '2',
        gridRowStart: '1',
        gridRowEnd: '1'
    }

    const column2 = {
    

        gridColumnStart: '1',
        gridColumnEnd: '2',
        paddingLeft:"5.6em",
        
        paddingRight:"2.7em",


    }

    const column3 ={
        
        gridColumnStart: '3',
        gridColumnEnd: '2',
        
    }


    const column4 ={

        gridColumnStart: '3',
        gridColumnEnd: '3',
        paddingLeft:"5.6em",

    }
    
    

    return(
        <div style={container_three_column}>

        <HeaderFunctionalities type={typeHeader}/>

        <div style={column1}>
        <Sidebar page={page}/>
        </div>{/* End column1*/}


        <div style={column2}>
    
        {colum2Data}

        </div>{/* End column2 */}


        <div style={column3}>
    
        {colum3Data}

        </div>{/* End column2 */}
        

    
        <div style={column4}>
    
        {colum4Data}

        </div>{/* End column2 */}

        

        </div> 
    )

}

export default ThreeColumLayout