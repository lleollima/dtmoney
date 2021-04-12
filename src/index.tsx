import React from "react";
import ReactDOM from "react-dom";
import { createServer, Model } from "miragejs";
import App from "./App";

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Freelancer website",
          type: "deposit",
          amount: 8000,
          category: "DEV",
          createdAt: new Date("2021-03-20 09:20:00"),
        },
        {
          id: 2,
          title: "Aluguel",
          type: "withdraw",
          amount: 1100,
          category: "CASA",
          createdAt: new Date("2021-03-10 09:20:00"),
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });
    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create("transaction", data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
