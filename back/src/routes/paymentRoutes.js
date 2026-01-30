const {Router} = require('express');
const { createOrder, webhook } = require("../controllers/paymentController.js");

const payRouter = Router();

payRouter.post("/create-order", createOrder);

payRouter.get("/success", (req, res) => res.send( "Pago exitoso" ));


payRouter.get("/payment", (req, res) => {
    // Lógica para procesar el pago
    res.status(200).send({ message: "Pago procesado exitosamente" });
});


payRouter.get("/failure", (req, res) => {
    // Lógica para manejar el pago fallido
    res.status(200).send({ message: "Pago fallido" });
}); 

payRouter.get("/pending", (req, res) => {
    // Lógica para manejar el pago pendiente
    res.status(200).send({ message: "Pago pendiente" });
});


payRouter.post("/webhook", webhook);

module.exports = payRouter;