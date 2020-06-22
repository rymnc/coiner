import React, { useEffect, useState, useContext } from 'react'
import coinGecko from '../apis/coinGecko'
import { WatchListContext } from '../context/watchListContext'
import Coin from './Coin'

const CoinList = () => {

    const [coins,setCoins] = useState([])
    const [isLoading,setisLoading] = useState(false)

    const {watchList, setWatchList} = useContext(WatchListContext)
    console.log(watchList)

    useEffect(()=>{
        const fetchData = async () =>{

            setisLoading(true)

            const response  = await coinGecko.get("/coins/markets",{
                params:{
                    vs_currency: "usd",
                    ids: watchList.join(',')
                }
            })

            setCoins(response.data)
            setisLoading(false)
        }

        fetchData();
    },[])

    const renderCoins = () =>{
        if(isLoading){
            return <div>Loading</div>;
            
        } 

            return(
                <ul className="coinlist list-group-mt-2">
                    {coins.map((coin)=>{

                        return <Coin key={coin.id} coin={coin} />;

                    })}
                </ul>
            )
        
    }



    return (
        <div>
            {renderCoins()}
        </div>
    )
}

export default CoinList
