import { useState } from "react";

const FormCheckout = ({ checkConfirm }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [direction, setDirection] = useState("");

  const clickConfirm = (event) => {
    event.preventDefault();

    const userData = {
      name,
      email,
      phone,
      direction,
    };

    checkConfirm(userData);
  };

  return (
    <div className="formCheckout">
      <h1>Confirmacion de Compra</h1>
      <form onSubmit={clickConfirm}>
        <div className="name">
          <label>
            <input
              type="text"
              value={name}
              onChange={({ target }) => setName(target.value)}
              placeholder="Nombre y Apellido"
            />
          </label>
        </div>
        <div className="email">
          <label>
            <input
              type="text"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              placeholder="Email"
            />
          </label>
        </div>
        <div className="phone">
          <label>
            <input
              type="text"
              value={phone}
              onChange={({ target }) => setPhone(target.value)}
              placeholder="Telefono"
            />
          </label>
        </div>
        <div className="direction">
          <label>
            <input
              type="text"
              value={direction}
              onChange={({ target }) => setDirection(target.value)}
              placeholder="Direccion de entrega"
            />
          </label>
        </div>
        <div className="clickConfirm">
          <button onClick={clickConfirm}>
            Confirmar Compra
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormCheckout;
