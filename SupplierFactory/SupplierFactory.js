const AcmeFactory = require("./AcmeFactory");
const PatagoniaFactory = require("./PatagoniaFactory");
const PaperfliesFactory = require("./PaperfliesFactory");
class SupplierFactory{
  async createSupplier(supplierName){
    switch(supplierName){
      case "acme":
        return await new AcmeFactory().createSupplier()
      case "paperflies":
        return new PaperfliesFactory().createSupplier()
      case "patagonia":
        return new PatagoniaFactory().createSupplier()
      default:
        throw new Error("Invalid supplier name")
    }
  }
}
module.exports = SupplierFactory