import React, { useState } from "react";

const Calculadoras = () => {
  const [userAge, setUserAge] = useState(0);
  const [ageDifference, setAgeDifference] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [cost, setCost] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  const calculateAgeDifference = () => {
    const currentYear = 25;
    const ageDifference = userAge - currentYear;
    setAgeDifference(ageDifference);
  };

  const calculateTotalCost = () => {
    const totalCost = quantity * cost;
    setTotalCost(totalCost);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    calculateAgeDifference();
    calculateTotalCost();
  };

  return (
    <header>
      <div className="calculadoras">
        <p>Bienvenido a las calculadoras más potentes del mercado Chileno en la actualidad</p>
        <section id="calculations" class="py-5">
          <div class="container">
            <div class="ss">
              <div class="calculadora1">
                <p>Calculadora de Diferencia de Edad</p>
                <form id="ageCalculator" onSubmit={handleSubmit}>
                  <div class="mb-3">
                    <label for="userAge" class="form-label">
                      Ingresa tu Edad:
                    </label>
                    <input
                      type="number"
                      class="form-control"
                      id="userAge"
                      value={userAge}
                      onChange={(e) => setUserAge(e.target.value)}
                      required
                    />
                  </div>
                  <button type="submit" class="btn btn-primary">
                    Calcular
                  </button>
                </form>
                <p id="ageDifference">Tu diferencia de edad es: {ageDifference} años</p>
              </div>
            </div>
            <div class="calculadora2">
                <p>Calculadora de Precio x Unidad</p>
                <form id="costCalculator" onSubmit={handleSubmit}>
                  <div class="mb-3">
                    <label for="quantity" class="form-label">
                      Cantidad:
                    </label>
                    <input
                      type="number"
                      class="form-control"
                      id="quantity"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      required
                    />
                  </div>
                  <div class="mb-3">
                    <label for="cost" class="form-label">
                      Precio:
                    </label>
                    <input
                      type="number"
                      class="form-control"
                      id="cost"
                      value={cost}
                      onChange={(e) => setCost(e.target.value)}
                      required
                    />
                  </div>
                  <button type="submit" class="btn btn-primary">
                    Calcular
                  </button>
                </form>
                <p id="totalCost">El costo total es: {totalCost}</p>
              </div>
          </div>
        </section>
        <p>
          Esta página revela nuestras mejores calculadoras hechas 100% usando
          JavaScript.
        </p>
      </div>
    </header>
  );
};

export default Calculadoras;
