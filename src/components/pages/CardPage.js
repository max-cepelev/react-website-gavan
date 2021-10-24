
import { useState, useEffect } from 'react';
import LayoutInfo from '../layoutInfo/LayoutInfo'
import { useParams } from 'react-router';


export default function CardPage() {

    const [data, setData] = useState(null)

    const getData=(url)=>{
        fetch(url
        ,{
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
        )
        .then(res => {
            console.log(res)
            return res.json();
        })
        .then(json => {
            console.log(json);
            setData(json)
        });
    }

    useEffect(()=>{
        getData('../data.json')
    },[])

    const params = useParams();

    const id = parseInt(params.id) - 1;

    return (
        <>
            {data && <LayoutInfo {...data[id]}/>}
        </>
    )
}