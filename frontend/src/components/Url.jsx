import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Url() {

    let {id} = useParams()
    let navigate = useNavigate()

    const [path,setPath] = useState(null)
    useEffect(()=>{
        axios.get(`https://dayone-hwpu.onrender.com/${id}`).then((res)=>{
            if(res.data.url){
                window.location.href = `${res.data.url}`
            }
        })
    },[])

  return (
    <div>Url</div>
  )
}

export default Url
