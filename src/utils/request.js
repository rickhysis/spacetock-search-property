import {
    useState,
    useEffect
} from "react";

export function updateOptions(options) {
    const update = { ...options };
    const headers = {
        ...update.headers,
        "Content-Type": "text/plain; charset=UTF-8",
    }

    update.cache = 'no-cache';
    update.mode = process.env.NODE_ENV === "production" ? 'same-origin' : 'cors';
    update.headers = typeof Headers !== 'undefined' ? new Headers(headers) : headers;
    
    return update;  
}

export function useFetch(url, options) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    
    async function fetchUrl() {
        const response = await fetch(url, updateOptions(options));
        const json = await response.json();
        
        setData(json);
        setLoading(false);
    }
    useEffect(() => {
        fetchUrl()
    }, [url]);

    return [data, loading];
}