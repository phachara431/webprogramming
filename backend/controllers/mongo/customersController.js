const customers = require("../../models/mongo/customers");

exports.index = async (req, res, next) => {

    let data = await customers.find();
    
    res.status(200).json(data);
 
};

exports.insert = async (req, res, next) => {

let data  = new customers({
    
        customerID: req.body.customerID,
        customerTitleName: req.body.customerTitleNam,
        customerFirstName: req.body.customerFirstName,
        customerLastName: req.body.customerLastName,
        customerAddress: req.body.customerAddress,
        customerTel: req.body.customerTel,
        customerEmail: req.body.customerEmail,
        customeruUsername: req.body.customeruUsername,
        customeruPassword: req.body.customeruPassword,

});

data .save();

res.status(200).json({
message: "บันทึกข้อมูลเรียบร้อยแล้ว"

});

};

exports.update = async (req, res, next) => {
const id = "61197516ef794f3e209e5d16";

const data = {
    customerID: "10000",
        
}

let update = await customers.updateOne(
  { _id: id },
{
    customerID: data.customerID,
    
}
);

if(update.nModified == 0){
    res.status(400).json({
error: "ไม่สามารถแก้ไขข้อมูลได้"
    });
} else{
    res.status(200).json({
        data: "แก้ไขข้อมูลเรียบร้อยแล้ว"
    });
}



};
exports.delete = async (req, res, next) => {

const id = "611958a0ee2c70355cd1f61f";

const data = await customers.deleteOne(
    { _id: id }
);
if(data.deletedCount === 0){
    res.status(400).json({
        error: "ไม่สามารถข้อมูลได้"
   });
} else {
    res.status(200).json({
        message: "ลบข้อมูลเรียบร้อยแล้ว"
    });
}

};