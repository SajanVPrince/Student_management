import {useState } from "react"
import axios from 'axios'

function Add(){
    const [title,setTitle]=useState('')
    const [dis,setDis]=useState('')

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://127.0.0.1:8000/api/task/',{title,dis}).then((res)=>{
            setTitle('')
            setDis('')
        }).catch(error=>console.log(error.message))
    }

    return(
            <form onSubmit={handleSubmit}>
                <input type="number" name="roll_no" id="roll_no" value={roll_no} onChange={(e)=>setTitle(e.target.value)} />
                <input type="text" name="name" id="name"  value={name} onChange={(e)=>setDis(e.target.value)} />
            <input type="number" name="age" id="age" value={age} onChange={(e)=>setTitle(e.target.value)} />  
            <input type="email" name="email" id="email"  value={email} onChange={(e)=>setDis(e.target.value)} />
            <input type="number" name="phone" id="phone" value={phone} onChange={(e)=>setTitle(e.target.value)} />           
                <input type="submit" value="add" className="btn btn-outline-success" />
            </form>
    )
}
export default Add
