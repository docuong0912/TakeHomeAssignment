const AcmeSupplier = require("../Suppliers/AcmeSupplier");
const AcmeAdapter = require( "../adapters/AcmeAdapter")
class AcmeFactory{
  async createSupplier(){
    const supplier = new AcmeSupplier()
    await supplier.init()
    const adapter = new AcmeAdapter(supplier)
    adapter.mappingData()
    return supplier
  }
}
module.exports = AcmeFactory