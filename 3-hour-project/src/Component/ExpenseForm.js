import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = () => {
  const [enteredQuniqueId, setQniqueId] = useState("");
  const [choosePrice, setChoosePrice] = useState("");
  const [chooseDish, setChooseDish] = useState("");
  const [chooseTable, setChooseTable] = useState("");
  const [allDetails, setAllDetails] = useState([]);
  const idInputHandler = (event) => {
    setQniqueId(event.target.value);
  };
  const priceInputHandler = (event) => {
    setChoosePrice(event.target.value);
  };
  const productInputHandler = (event) => {
    setChooseDish(event.target.value);
  };
  const categaryHandler = (event) => {
    setChooseTable(event.target.value);
  };
  const formSubmit = (event) => {
    event.preventDefault();
    if (enteredQuniqueId && choosePrice && chooseDish && chooseTable) {
      const newEntry = {
        id: Math.random(),
        enteredQuniqueId: enteredQuniqueId,
        choosePrice: choosePrice,
        chooseDish: chooseDish,
        chooseTable: chooseTable,
      };
      setAllDetails([...allDetails, newEntry]);
    } else {
      alert("Please fill the data");
    }
  };

  return (
    <div>
      <form onSubmit={formSubmit}>
        <label htmlFor="productId">Prodect ID:</label>
        <input type="number" onChange={idInputHandler} />
        <br />
        <label htmlFor="sellinPrice">Selling Price:</label>
        <input type="number" onChange={priceInputHandler} />
        <br />
        <label htmlFor="productName">Product Name:</label>
        <input type="text" onChange={productInputHandler} />
        <br />
        <label htmlFor="chooseCategary">Choose Categary:</label>
        <select name="product" id="catagary" onChange={categaryHandler}>
          <br />
          <option>Table1</option>
          <option>Table2</option>
          <option>Table3</option>
        </select>
        <button type="submit">Add to Bill</button>
      </form>
      <div></div>
      {allDetails.map((curElem) => {
        return (
          <div className="list" id={curElem.id}>
            <pre>
              OrderID: {curElem.enteredQuniqueId} Price: {curElem.choosePrice}{" "}
              Dish: {curElem.chooseDish} Table: {curElem.chooseTable}
            </pre>
          </div>
        );
      })}
    </div>
  );
};
export default ExpenseForm;
