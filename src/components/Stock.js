import React from "react";

function Stock({ stock, onBuyStock, onSellStock }) {
  const handleClick = () => {
    if (onBuyStock) {
      onBuyStock(stock);
    } else if (onSellStock) {
      onSellStock(stock.id);
    }
  };
  return (
    <div>
      <div className="card" onClick={handleClick}>
        <div className="card-body">
          <h5 className="card-title">{stock.name}</h5>
          <p className="card-text">{stock.price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;