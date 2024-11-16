class HotelService{
  constructor(suppliers, strategy){
    this.suppliers = suppliers
  }
  setMergingStrategy(mergeStrategy){
    this.mergeStrategy = mergeStrategy
  }
  filterHotels(hotelStr, destinationStr){
    const hotelIds = hotelStr === 'none' ? null : hotelStr.split(',')
    const destinationIds = destinationStr === 'none' ? null : destinationStr.split(',').map(did => parseInt(did))
    return this.suppliers.map(supplier => supplier.filterHotels(hotelIds, destinationIds))
  }
  mergeHotels (data) {
    const flatData = data.flat()
    return this.mergeStrategy.merge(flatData)
  }
}
module.exports = HotelService