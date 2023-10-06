import React from "react";

const Calculadoras = () => {
  return (
    <>
    <header>
      <div className="calculadoras">
        <h1>Nuestras complejas calculadoras!</h1>
        <section id="calculations" class="py-5">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-md-4 mb-4 bg-light p-2  shadow rounded-2 m-2">
                <h2>Calculadora de Diferencia de Edad</h2>
                <form id="ageCalculator">
                  <div class="mb-3">
                    <label for="userAge" class="form-label">
                      Ingresa tu Edad:
                    </label>
                    <input
                      type="number"
                      class="form-control"
                      id="userAge"
                      required
                    />
                  </div>
                  <button type="submit" class="btn btn-primary">
                    Calcular
                  </button>
                </form>
                <p id="ageDifference"></p>
              </div>
              <div class="col-md-4 mb-4 bg-light p-2 shadow rounded-2 m-2">
                <h2>Calculadora de Precio x Unidad</h2>
                <form id="costCalculator">
                  <div class="mb-3">
                    <label for="quantity" class="form-label">
                      Cantidad:
                    </label>
                    <input
                      type="number"
                      class="form-control"
                      id="quantity"
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
                      required
                    />
                  </div>
                  <button type="submit" class="btn btn-primary">
                    Calcular
                  </button>
                </form>
                <p id="totalCost"></p>
              </div>
            </div>
          </div>
        </section>
        <p>
          Esta página revela nuestras mejores calculadoras hechas 100% usando
          JavaScript.
        </p>
      </div>
    </header>
    </>
  );
};

export default Calculadoras;
