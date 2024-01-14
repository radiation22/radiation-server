// OzKHOz2cHw98lqvW
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Radiation server is running");
});

// d8F4dx1qpkEIx4Di

const uri =
  "mongodb+srv://radiationcorporation2:d8F4dx1qpkEIx4Di@cluster0.qoqnn5v.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    const blogCollection = client.db("Radiation").collection("Blog");
    const chatCollection = client.db("Radiation").collection("chat");
    const orderCollection = client.db("Radiation").collection("order");
    const ordersCollection = client.db("Radiation").collection("orders");
    const userCollection = client.db("Realstate").collection("users");
    // get method for find all property
    app.get("/allBlog", async (req, res) => {
      const query = {};
      const product = await blogCollection.find(query).toArray();
      res.send(product);
    });
    // get method for finding the specific userProperty
    app.get("/myProperty", async (req, res) => {
      const email = req.query.email;
      const query = { email: email };
      const cursor = propertyCollection.find(query);
      const ticket = await cursor.toArray();
      res.send(ticket);
    });
    // get method for finding the specific user only
    app.get("/users", async (req, res) => {
      const email = req.query.email;
      const query = { email: email };
      const cursor = userCollection.find(query);
      const ticket = await cursor.toArray();
      res.send(ticket);
    });
    app.post("/addBlog", async (req, res) => {
      const review = req.body;
      const result = await blogCollection.insertOne(review);

      res.send(result);
    });
    app.post("/addOrder", async (req, res) => {
      const review = req.body;
      const result = await orderCollection.insertOne(review);

      res.send(result);
    });
    app.post("/addOrders", async (req, res) => {
      const review = req.body;
      const result = await ordersCollection.insertOne(review);

      res.send(result);
    });
    app.post("/addChat", async (req, res) => {
      const review = req.body;
      const result = await chatCollection.insertOne(review);

      res.send(result);
    });
    // post method for adding user
    app.post("/users", async (req, res) => {
      const user = req.body;
      const result = await userCollection.insertOne(user);
      res.send(result);
    });
    // find details with id information
    app.get("/details/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await propertyCollection.findOne(query);
      res.send(result);
    });
    //delete property if he want
    app.delete("/myReviews/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await propertyCollection.deleteOne(query);
      res.send(result);
    });
  } finally {
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
