import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([]);
  const [query, setQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((res) => res.json())
      .then((data) => setStocks(data))
      .catch((error) => console.log(error));
  }, []);

  const handleBuyStock = (stock) => setPortfolio([...portfolio, stock]);

  const handleFilter = (query) => setQuery(query);

  const handleSort = (order) => setSortOrder(order);

  const filteredStocks = stocks
    .filter((stock) => stock.type.toLowerCase().includes(query.toLowerCase()))
    .sort((a, b) => {
      if (sortOrder === "Alphabetically") {
        return a.ticker.localeCompare(b.ticker);
      } else if (sortOrder === "Price") {
        return a.price - b.price;
      } else {
        return 0;
      }
    });

  const handleSellStock = (id) => {
    const updatedPortfolio = portfolio.filter((stock) => stock.id !== id);
    setPortfolio(updatedPortfolio);
  };

  return (
    <div>
      <SearchBar onFilter={handleFilter} onSort={handleSort} />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={filteredStocks} onBuyStock={handleBuyStock} />
        </div>
        <div className="col-4">
          <PortfolioContainer
            portfolio={portfolio}
            onSellStock={handleSellStock}
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;