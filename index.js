const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const port = 9000;
require("dotenv").config();
const atlasPass = process.env.ATLAS_DB_PASSWORD;
const atlasDBname = process.env.ATLAS_DB_NAME;
const uri = `mongodb+srv://CluckUser:${atlasPass}@clustercluck.pvmri.mongodb.net/ClusterCluck?retryWrites=true&w=majority`;

app.use(cors());
app.use(express.json());

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("monogodb connected"))
  .catch(error => console.log(error));

app.listen(port, () => console.log(`listening on port ${port}`));
