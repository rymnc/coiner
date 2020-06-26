import React from "react";
import { useParams } from "react-router-dom";
import HistoryChart from "../components/HistoryChart";
import CoinData from "../components/CoinData";
import { useEffect,useState } from "react";
import coinGecko from "../apis/coinGecko";

const CoinDetailPage = () => {
  const { id } = useParams();

  const [coinData,setCoinData] = useState({})

  const [isLoading,setIsLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
        setIsLoading(true)
        const result = await Promise.all([
            coinGecko.get(`/coins/${id}/market_chart`, {
                params: {
                  vs_currency: "usd",
                  days: "1",
                },
              }),
              coinGecko.get(`/coins/${id}/market_chart`, {
                params: {
                  vs_currency: "usd",
                  days: "7",
                },
              }),
              coinGecko.get(`/coins/${id}/market_chart`, {
                params: {
                  vs_currency: "usd",
                  days: "365",
                },
              }),
              coinGecko.get(`/coins/markets`, {
                params: {
                  vs_currency: "usd",
                  ids: id,
                },
              })
        ])
        
        console.log(result)
      
      setCoinData({days: result[0].data.prices, weeks: result[1].data.prices, years: result[2].data.prices, detail: result[3].data[0]})
      setIsLoading(false)
    };
    fetchData();
    
  }, []);

  const renderData = () => {

    if(isLoading){
        return "Loading..."
    }
    return (
      <div className="coinlist">
        <HistoryChart />
        <CoinData />
      </div>
    );
  };

  return renderData();
};

export default CoinDetailPage;
