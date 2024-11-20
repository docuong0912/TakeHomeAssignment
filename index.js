const SupplierFactory = require("./SupplierFactory/SupplierFactory");
const HotelService = require("./services/HotelService");
const MergeHotel = require("./strategies/MergeHotel");
(async () => {
  const args = process.argv.slice(2);
  const hotelIds = args[0];
  const destinationIds = args[1];
  const factory = new SupplierFactory();
  const suppliers = await Promise.all([factory.createSupplier("acme"), factory.createSupplier("paperflies"), factory.createSupplier("patagonia")])
  const service = new HotelService(suppliers);
  service.setMergingStrategy(new MergeHotel())
  const hotel = service.getHotels(hotelIds, destinationIds)
console.log(JSON.stringify(Object.values(hotel), null, 2))
})();