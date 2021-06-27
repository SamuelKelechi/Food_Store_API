const express = require('express');
const mongoose = require('mongoose');

const PORT = 3200

const app = express();
app.use(express.json());

mongoose.connect(
    "mongodb+srv://callmefarad:B577f2Ai8bh6txuT@blog.eenxj.mongodb.net/gameDB?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    }
);

mongoose.connection
.once("open", () => {
    console.log("connection successful");
})
.on("error", () => {
    console.log("Error trying to connect to the database");
});

app.get("/", (req, res) => {
    res.send("FOOD API");
});









app.listen(PORT, () => {
    console.log(`Server is now ready to listen at port ${PORT}`)
})