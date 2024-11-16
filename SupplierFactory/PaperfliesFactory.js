const PaperfliesSupplier = require("../Suppliers/PaperfliesSupplier");
const PaperfliesAdapter = require("../adapters/PaperfliesAdapter");
class PaperfliesFactory{
  async createSupplier(){
    const supplier = new PaperfliesSupplier()
    await supplier.init()
    const adapter = new PaperfliesAdapter(supplier)
    adapter.mappingData()
    return supplier
  }
}
module.exports = PaperfliesFactory