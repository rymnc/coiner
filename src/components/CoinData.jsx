import React from "react";

const CoinData = ({ detail }) => {
  console.log("coindaata", detail);

  const renderData = () => {
    if (detail) {
      return (
        <div className="bg-white mt-3 p-2 rounded border row">
          <div className="col-sm">
            <div className="d-flex flex-column">
              <span className="span text-muted coin-data-category">
                Market Cap
              </span>
              <span>{detail.market_cap}</span>
            </div>
            
            <div className="d-flex flex-column">
              <span className="span text-muted coin-data-category">
                Total Supply
              </span>
              <span>{detail.total_supply===null?"Not Applicable":detail.total_supply}</span>
            </div>
          </div>

          <div className="col-sm">
            <div className="d-flex flex-column">
              <span className="span text-muted coin-data-category">
                Volume(24h)
              </span>
              <span>{detail.total_volume}</span>
            </div>
            
            <div className="d-flex flex-column">
              <span className="span text-muted coin-data-category">
                High(24h)
              </span>
              <span>{detail.high_24h}</span>
            </div>
          </div>

          <div className="col-sm">
            <div className="d-flex flex-column">
              <span className="span text-muted coin-data-category">
                Circulating Supply
              </span>
              <span>{detail.circulating_supply}</span>
            </div>
            
            <div className="d-flex flex-column">
              <span className="span text-muted coin-data-category">
                Low(24h)
              </span>
              <span>{detail.low_24h}</span>
            </div>
          </div>
        </div>
      );
    } else {
      return "Loading";
    }
  };
  return renderData();
};

export default CoinData;
