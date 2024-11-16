class PatagoniaAdapter{
  constructor(patagoniaSupplier){
    this.patagoniaSupplier = patagoniaSupplier
  }
  mappingData(){
      this.patagoniaSupplier.hotels = this.patagoniaSupplier.hotels.map((hotel) => {
      const {
        lat,
        lng,
        address,
        destination,
        info,
        ...rest
      } = hotel;
      return {
      ...rest,
      destination_id: destination,
      location: {
        lat,
        lng,
        address,
      },
      description: info}
    })
  }
}
module.exports = PatagoniaAdapter