import { useState } from "react";
import styles from "./Form.module.css";
import { FiUpload, FiSend } from "react-icons/fi";

// TODO consertar produto, deve ser um dicionário contendo nome, quantidade e valor

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
          <label title="Enviar arquivo contendo imagem da Nota Fiscal">
            <FiUpload />
            Foto da Nota
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
        <div className={styles.Produtos}>
          <label>
            Descrição:
            <input
              type="text"
              value={formData.product}
              name="product"
              onChange={handleChange}
            />
          </label>
          <label>
            Valor:
            <span>
              R$
              <input
                type="number"
                name="value"
                value={formData.value}
                onChange={handleChange}
                min="0.05"
                step="0.01"
              />
            </span>
          </label>
        </div>
      </div>

      <div>
        <label
          className={styles.SubmitButton}
          title="Clique para cadastrar a nota no sistema"
        >
          <FiSend />
          Cadastrar
          <input type="submit" value="Cadastrar Nota" />
        </label>
      </div>
    </form>
  );
};

export default ShoppingForm;
