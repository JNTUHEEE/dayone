import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Url() {
    let { id } = useParams()
    let navigate = useNavigate()

    const [path, setPath] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        setError(null)
        
        axios.get(`https://dayone-hwpu.onrender.com/${id}`)
            .then((res) => {
                if (res.data.url) {
                    window.location.href = `${res.data.url}`
                } else {
                    setError("URL not found.")
                }
            })
            .catch((err) => {
                setError("An error occurred while fetching the URL.")
                console.error(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [id])  // Re-run the effect if the 'id' changes

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>{error}</div>
    }

    return (
        <div>Redirecting...</div>
    )
}

export default Url
