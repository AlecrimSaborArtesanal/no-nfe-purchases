import { useState } from "react";
import styles from "./Form.module.css";

const ShoppingForm = () => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    establishmentName: "",
    product: "",
    value: "",
    buyerName: "",
    receiptImage: [],
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
  };

  return (
    <form onSubmit={handleSubmit} className={styles.Form}>
      <div className={styles.ShopInfoContainer}>
        <div className={styles.DateTime}>
          <label>
            Data:
            <input
              type="date"
              value={formData.date}
              name="date"
              onChange={handleChange}
            />
          </label>
          <label>
            Hora:
            <input
              type="time"
              value={formData.time}
              name="time"
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="ShopInfo">
          <label>
            Nome Do Estabelecimento:
            <input
              type="text"
              value={formData.establishmentName}
              name="establishmentName"
              onChange={handleChange}
            />
          </label>
          <label>
            Nome do Comprador:
            <input
              type="text"
              value={formData.buyerName}
              name="buyerName"
              onChange={handleChange}
            />
          </label>
        </div>
      </div>

      <div className={styles.ProdutosContainer}>
        <h5>Produtos:</h5>
        <div className={styles.Produtos}>
          <label>
            Nome:
            <input
              type="text"
              value={formData.product}
              name="product"
              onChange={handleChange}
            />
          </label>
          <label>
            Valor:
            <input
              type="text"
              name="value"
              value={formData.value}
              onChange={handleChange}
            />
          </label>
        </div>
      </div>
      <label>
        Foto da nota:
        <input
          type="file"
          name="receiptImage"
          value={formData.receiptImage}
          onChange={handleImageChange}
        />
      </label>
      <input type="submit" value="Enviar" className={styles.SubmitButton} />
    </form>
  );
};

export default ShoppingForm;
