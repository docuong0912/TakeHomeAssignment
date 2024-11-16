const PatagoniaAdapter = require("../adapters/PatagoniaAdapter");
const PatagoniaSupplier = require("../Suppliers/PatagoniaSupplier");
class PatagoniaFactory{
  async createSupplier(){
    const supplier = new PatagoniaSupplier()
    await supplier.init()
    const adapter = new PatagoniaAdapter(supplier)
    adapter.mappingData()
    return supplier
  }
}
module.exports = PatagoniaFactory