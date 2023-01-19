import React, { useState } from "react";

function FormExample() {
  const [formData, setFormData] = useState({
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString(),
    establishment: "",
    product: "",
    value: "",
    buyerName: "",
    receiptImage: null,
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleImageChange = (event) => {
    setFormData({
      ...formData,
      receiptImage: event.target.files[0],
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // Perform form validation here
    // Send form data to server if validation is successful
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Data:
        <input
          type="text"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Hora:
        <input
          type="text"
          name="time"
          value={formData.time}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Estabelecimento:
        <input
          type="text"
          name="establishment"
          value={formData.establishment}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Produto:
        <input
          type="text"
          name="product"
          value={formData.product}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Valor:
        <input
          type="text"
          name="value"
          value={formData.value}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Nome do comprador:
        <input
          type="text"
          name="buyerName"
          value={formData.buyerName}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Foto da nota:
        <input type="file" name="receiptImage" />
      </label>
    </form>
  );
}

export default FormExample;
