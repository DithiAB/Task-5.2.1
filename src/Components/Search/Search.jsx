import {useState} from 'react'
import { Country } from './Country'
import Result from './Result'
import './Search.css'

const Search = () => {
    const[datas, setDatas]= useState("")
    const search=(data)=>{
    return data.filter((item)=>item.Country.toLowerCase().includes(datas))
    }
  return (
    <div className='main'>
        <div className='search'>
        <input  type="text" placeholder='Search here....' onChange={(e)=>setDatas(e.target.value)}/>
        <p> <i class="fa-solid fa-magnifying-glass"></i></p>
        </div>
        <Result data={search(Country)}/>
    </div>
  )
}

export default Search