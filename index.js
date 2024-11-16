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
  const filteredHotel = service.filterHotels(hotelIds, destinationIds)
  const mergedHotel = service.mergeHotels(filteredHotel)
console.log(JSON.stringify(Object.values(mergedHotel), null, 2))
})();