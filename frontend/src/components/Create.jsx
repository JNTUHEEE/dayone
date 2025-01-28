
import React, { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function Create() {

    const [originalURL,setOriginalURL] = useState('')
    const [newurl,setnewurl] = useState(null)

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post('https://dayone-hwpu.onrender.com/newurl',{originalURL}).then((res)=>{
            setnewurl(`${window.location.origin}/${res.data.newURL.shortid}`)
        })
        setOriginalURL("")
    }

  return (
    <>

        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='enter url' value={originalURL} onChange={(e)=>setOriginalURL(e.target.value)}  /> <br />
            <input type="submit" value="get shorturl" />
            {newurl && <p>{newurl}</p>}
        </form>
    </>
  )
}

export default Create
