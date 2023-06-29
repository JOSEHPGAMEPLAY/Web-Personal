import { useState } from "react";
import axios from "axios";


import './Contacto.css'

export default function Contacto() {

    // Input Change Handling
  const [inputs, setInputs] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const handleOnChange = (event) => {
    event.persist();
    setInputs((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  // Server State Handling

  const handleOnSubmit = (event) => {
    event.preventDefault();

    axios({
      method: "POST",
      url: "https://formbold.com/s/3j2q8",
      data: inputs
    })
      .then((r) => {
        console.log("hello");
        alert("Correo Enviado");
      })
      .catch((r) => {
        console.log("error");
      });

  };

  return (
    <div className="contacto entrada">
      <h1>CONTACTO</h1>
      <form onSubmit={handleOnSubmit}>
        <label
            htmlFor="email"
          >
            Direccion Email:
          </label>
        <input
          onChange={handleOnChange}
          value={inputs.email}
          id="email"
          type="email"
          name="email"
          className="Femail rounded-md "
          placeholder="example@domain.com"
        />
        <label
            htmlFor="subject"
          >
            Asunto:
        </label>
        <input
          onChange={handleOnChange}
          value={inputs.subject}
          id="subject"
          type="text"
          name="subject"
          className="Femail rounded-md "
          placeholder="Ingresa el sunto"
        />
        <label
            htmlFor="subject"
          >
            Mensaje:
        </label>
        <textarea
          onChange={handleOnChange}
          value={inputs.message}
          id="message"
          name="message"
          className="Femail rounded-md border-gray-500 "
          placeholder="Ingresa tu mensaje"
        />
        <button type="submit" 
        className="m-3 hover:shadow-form hover:bg-[#443eb9] rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
        >Contactar</button>
      </form>
    </div>
  )
}
