import React, { useState } from 'react'


import LoadingScreen from "./LoadingScreen"

function FullPageLoader() {
    const [loading,setLoading]=useState(false);
    return [
        (loading)?(
            <LoadingScreen/>
        ):null,
        ()=>setLoading(true),
        ()=>setLoading(false)
    ]
}

export default FullPageLoader