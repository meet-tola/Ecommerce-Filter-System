import Product from "./Products/Product";
import Nav from "./components/Nav";
import Recommended from "./Products/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import { useState } from "react";

// Database
import products from "./db/data";
import Card from "./components/Card";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  //Search Filter
  const filterItems = products.filter(
    (product) =>
      product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !==
      -1
  );

  //Radio Filter
  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // Buttons Filter
  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredData = (products, selected, query) => {
    let filterProducts = products;

    // Filtering Input Items
    if (query) {
      filterProducts = filterItems;
    }

    //Selected Filter
    if (selected) {
      filterProducts = filterProducts.filter(
        ({ category, color, company, newPrice, title, filter }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected ||
          filter === selected
      );
    }

    return filterProducts.map(
      ({ img, title, star, reviews, newPrice, prevPrice, filter }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
          filter={filter}
        />
      )
    );
  };

  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <Nav query={query} handleInputChange={handleInputChange} />
      <Sidebar handleChange={handleChange} />
      <Recommended handleChange={handleChange} handleClick={handleClick} />
      <Product result={result} />
    </>
  );
};

export default App;


