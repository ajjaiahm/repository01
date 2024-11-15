import React from "react";
import { useState } from "react";
import axios from "axios";
export default function Pcpage(){
const [sid,setSid]=useState('');
const [sname,setSname]=useState('');
const [working,setWorking]=useState('');

const sidH=(e)=>{
    setSid(e.target.value);
}

const nameH=(e)=>{
    setSname(e.target.value);
}

const workH=(e)=>{
  
    const v=e.target.value;
   
    
    setWorking(v);
}
const subH=async (e)=>{
    e.preventDefault();
    // setSid('');
    // setSname("");
    // setWorking('');
    const newPc={sid,sname,working};
    try{
        const res=await 
        axios.post("http://localhost:8080/pcs",newPc)
    }
    catch(error){
        console.error("error came!!!",error);
    }
}
return(
    <div className="u">
    <div className="con">
        <div>
        <h1 id="h">PcRegistration</h1>
        </div>
        <form>
           
            <input onChange={sidH}  placeholder="System Id" className="input" value={sid} type="text"/>


            <input onChange={nameH} className="input" placeholder="System Name" value={sname} type="text"/>


          
            {/* <input onChange={workH} className="input" placeholder="Working" value={working} type="number"/> */}
           
            <input  onChange={workH}  type="radio" className="t" name="working" value={true}/> 
            <label For="working" >Working </label>
            

            <input onChange={workH}  type="radio" className="f" name="working" value={false}/> 
            <label For="working" >Not-Working </label>
            

            <button onClick={subH} className="btn" type="submit">Save</button>


            </form>
            </div></div>
    );
}