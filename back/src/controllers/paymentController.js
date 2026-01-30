import mercadopago from "mercadopago";
import dotenv from "dotenv";
dotenv.config();

// Crear cliente con tu access token
const client = new mercadopago.MercadoPagoConfig({
    accessToken: process.env.MP_ACCESS_TOKEN,
});

export const createOrder = async (req, res) => {
  try {
    console.log("REQ BODY:", req.body); // debug

    const { cart, total, date } = req.body;
    if (!cart || cart.length === 0) {
      throw new Error("No hay elementos en el carrito");
    }

    const preference = new mercadopago.Preference(client);

    const items = cart.map(item => ({
      id: item.id,
      title: item.title || `Producto ${item.id}`,
      quantity: Number(item.quantity),
      unit_price: parseFloat(item.price), // ojo: en tu frontend se llama "price", no "unit_price"
      currency_id: "PEN",
    }));

    const result = await preference.create({
      body: {
        items,
        back_urls: {
          success: "http://localhost:3000/success",
          failure: "http://localhost:3000/failure",
          pending: "http://localhost:3000/pending",
        },
        notification_url: "https://ecomarketsenati.onrender.com/webhook",
      },
    });
    console.log('data del create',result.init_point);
    
    res.json(result.init_point); // devuelve init_point y demás
  } catch (error) {
    console.error(error);
    res.status(500).send("Error creando orden");
  }
};

export const webhook = async (req, res) => {

    const payment = req.query;

    try {
        if (payment.type === "payment") {
            const data = await mercadopago.payment.findById(payment['data.id']);
            console.log(data);
        }
        res.sendStatus(204);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500).json({ error: "Error en el webhook" });
    }
}