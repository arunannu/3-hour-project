import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = () => {
  const [enteredId, setEnteredId] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredProduct, setEnteredProduct] = useState("");
  const [selectCategary, setSelectCategary] = useState("");
  const [allDetails, setAllDetails] = useState([]);
  const idInputHandler = (event) => {
    setEnteredId(event.target.value);
  };
  const priceInputHandler = (event) => {
    setEnteredPrice(event.target.value);
  };
  const productInputHandler = (event) => {
    setEnteredProduct(event.target.value);
  };
  const categaryHandler = (event) => {
    setSelectCategary(event.target.value);
  };
  const formSubmit = (event) => {
    event.preventDefault();
    if (enteredId && enteredPrice && enteredProduct && selectCategary) {
      const newEntry = {
        id: Math.random(),
        enteredId: enteredId,
        enteredPrice: enteredPrice,
        enteredProduct: enteredProduct,
        selectCategary: selectCategary,
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
          <option>Food</option>
          <option>Electronic</option>
          <option>SkinCare</option>
        </select>
        <button type="submit">Add Product</button>
      </form>
      <div></div>
      {allDetails.map((curElem) => {
        return (
          <div className="list" id={curElem.id}>
            <pre>
              ID: {curElem.enteredId} Price: {curElem.enteredPrice}
              Product: {curElem.enteredProduct} categary:{" "}
              {curElem.selectCategary}
            </pre>
          </div>
        );
      })}
    </div>
  );
};
export default ExpenseForm;
