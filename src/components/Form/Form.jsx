import { useState } from "react";
import styles from "./Form.module.css";

const ShoppingForm = () => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    establishmentName: "",
    product: "",
    value: "",
    quantity: 0,
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
      <h2>Cadastro de Compras sem NFE</h2>
      <section className={styles.ShopInfoContainer}>
        <div className={styles.DateTime}>
          <label>
            Que dia comprou?
            <input
              type="date"
              value={formData.date}
              name="date"
              onChange={handleChange}
              min="2023-01-18"
            />
          </label>
          <label>
            Que horas comprou?
            <input
              type="time"
              value={formData.time}
              name="time"
              onChange={handleChange}
            />
          </label>
        </div>

        <div className={styles.ShopInfo}>
          <label>
            Onde Comprou?
            <input
              type="text"
              value={formData.establishmentName}
              name="establishmentName"
              onChange={handleChange}
            />
          </label>
          <label>
            Quem comprou?
            <input
              type="text"
              value={formData.buyerName}
              name="buyerName"
              onChange={handleChange}
            />
          </label>
        </div>
        <div className={styles.ReceiptContainer}>
          <label>
            Enviar Foto da Nota
            <input
              type="file"
              name="receiptImage"
              value={formData.receiptImage}
              onChange={handleImageChange}
              accept="image/*, application/pdf"
            />
          </label>
        </div>
      </section>

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
              type="number"
              name="value"
              value={formData.value}
              onChange={handleChange}
              min="0.05"
              step="0.01"
            />
          </label>
          <label>
            Quantidade:
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
            />
          </label>
        </div>
      </div>

      <div>
        <input
          type="submit"
          value="Cadastrar Nota"
          className={styles.SubmitButton}
        />
      </div>
    </form>
  );
};

export default ShoppingForm;
