const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema(
    {
        customerID: String,
        customerTitleName: String,
        customersFirstName: String,
        customerLastName: String,
        customersAddress: String,
        customersTel: String,
        customersEmail: String,
        customersuUsername: String,
        customersuPassword: String,
    },
    {
        timestamps: true,
        collection: "customers"
    }
);

module.exports = mongoose.model("customers", schema);