const Supplier = require('./Supplier')
class AcmeSupplier extends Supplier{
  constructor(){
    super()
    this.endpoint = "https://5f2be0b4ffc88500167b85a0.mockapi.io/suppliers/acme"
  }
  getHotelsFromAcme(){
    return this.hotels
  }
}
module.exports = AcmeSupplier