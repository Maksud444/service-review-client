import { useEffect } from "react"

const useTitle = title =>{
    useEffect(() =>{
        document.title = `${title} - Kh-Organic`;
    },[title])
}

export default useTitle;