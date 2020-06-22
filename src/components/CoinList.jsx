import React, { useEffect, useState } from 'react'
import coinGecko from '../apis/coinGecko'

const CoinList = () => {

    const [coins,setCoins] = useState([])

    useEffect(()=>{
        const fetchData = async () =>{

            const data  = await coinGecko.get("/coins/markets",{
                params:{
                    vs_currency: "usd",
                    ids: "bitcoin,ethereum"
                }
            })

            console.log(data.data)
        }

        fetchData();
    },[])




    return (
        <div>
            
        </div>
    )
}

export default CoinList
