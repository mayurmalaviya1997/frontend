import React ,{useState, useEffect, createContext} from 'react'

import {Link} from 'react-router-dom'

const axios = require('axios');


export const UserData = createContext();

const Home =()=> {

    const[state, setState] = useState('');
    const[data, setData] = useState([]);

    useEffect(  ()=>{
        axios.get('https://rickandmortyapi.com/api/character')
        .then( function(response){
            setData(response.data.results)
        } ).catch(  ()=>{

        })
        
    },[])

    const passData=(dd)=>{
        const mayur = data.filter(item => item.id ==dd).map( (i)=>{
            <UserData.Provider value={i}>
                {alert(i)}
                <Cart/>
            </UserData.Provider>

        })
    }


  return (
    <div>
        <h1>rick morty</h1>
        <table border="1" style={{width:"100vw"}}>
            <tr>
        {
            data.map( (item,key)=>{
                return(

                    <div key={key}>
                            <td style={{width:"200px", height:"50px", textAlign:"center", verticalAlign:"middle" }}>{item.name}</td>

                            <td style={{width:"200px", height:"50px", textAlign:"center", verticalAlign:"middle" }}>{item.status}</td>

                            <td style={{width:"200px", height:"50px", textAlign:"center", verticalAlign:"middle" }}>{item.gender}</td>

                            <td style={{width:"200px", height:"50px", textAlign:"center", verticalAlign:"middle" }}>{item.location.name}</td>

                            <td style={{width:"200px", height:"50px", textAlign:"center", verticalAlign:"middle" }}>
                            <button onClick={ ()=> {passData(item.id)} } > 
                                <Link to="/cart" >go to</Link >
                            </button>
                            </td>
                    </div>
                )})
        }
            </tr>
        </table>
    </div>
  )
}

export default Home