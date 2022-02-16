import { useEffect, useState } from "react"

export const useFetch = (defaultVal, request, onError) => {

    const [data, setData] = useState(defaultVal)
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        const getRequest = async () => {
            setLoading(true)
            try {
                const res = await request()
                setData(res.data)
            } catch (e) {
                onError()
            } finally {
                setLoading(false)
            }

        }
        getRequest()

    }, [])

    console.log(data)

    return [loading, data]
}