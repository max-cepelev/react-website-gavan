import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router';
import ProgressInfo from '../progressInfo/ProgressInfo';
import {getData} from '../../services/ServiceFunctions'

export default function ProgressPage() {

    const [data, setData] = useState(null)

    const params = useParams();

    const id = parseInt(params.id) - 1;

    useEffect(()=> {
        getData('../progress.json')
        .then(res => {
            setData(res)
        })
        .catch(e => {
            alert(e)
        })
    },[])

    return (
        <>
            {data && <ProgressInfo {...data[id]}/>}
        </>
    )
}
