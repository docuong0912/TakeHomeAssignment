const Supplier = require("./Supplier");

class PatagoniaSupplier extends Supplier{
  constructor(){
    super()
    this.endpoint = "https://5f2be0b4ffc88500167b85a0.mockapi.io/suppliers/patagonia"
  }
}
module.exports = PatagoniaSupplier