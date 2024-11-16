const Supplier = require("./Supplier");

class PaperfliesSupplier extends Supplier{
  constructor(){
    super()
    this.endpoint = "https://5f2be0b4ffc88500167b85a0.mockapi.io/suppliers/paperflies"
  }
  
}
module.exports = PaperfliesSupplier