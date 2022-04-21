import { useEffect } from 'react'
import { useState } from 'react'
import RecipeList from '../../components/RecipeList'
import { projectFirestore } from '../../firebase/config'

//styles
import './Home.css'

export default function Home() {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(false)
    
    useEffect(() => {
        setIsPending(true)

        const unsub = projectFirestore.collection('recipes').onSnapshot(snapshot => {
            if (snapshot.empty) {
                setError('No recipes to load')
                setIsPending(false)
            } else {
                let results = []
                snapshot.docs.forEach(doc => {
                    results.push({...doc.data(), id: doc.id})
                })
                setData(results)
                setIsPending(false)
            }
        }, (err) => {
            setError(err.message)
            setIsPending(false)
        })

        return () => unsub()

    }, [])

    return (
        <div className='home'>
            {error && <p className='error'>{error}</p>}
            {isPending && <p className='loading'>Loading...</p>}
            {data && <RecipeList recipes={data}/>}
        </div>
    )
}