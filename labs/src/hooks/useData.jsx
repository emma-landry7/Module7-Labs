import { useState, useEffect } from "react";

export function useData(url) {
    const [data, setData] = useState(null)

    useEffect(() => {
        if(url) {
            let ignore = false;
            fetch(url 
            //     {
            //     method: "GET",
            //     mode: 'no-cors',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     }
            // }
            )
                .then(response => response.json())
                .then(json => {
                    if(!ignore) {
                        setData(json)
                    }
                })
            
            return () => {
                ignore = true
                console.log('Cleanup effect')
            }
        }
    }, [url])

    return data
}