const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.set("useUnifiedTopology", true);
mongoose.set("useNewUrlParser", true);
mongoose.set("useCreateIndex", true);

const StudentsSchema = new Schema({
  StudenNo: {
    type: String,
    required: true,
    unique: true
  },
  name: String,
  surName: String,
  password: String,
  mail: {
    required: true,
    unique: true,
    type: String
  },
  phoneNumber: String,
  registrationDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("student", StudentsSchema);
