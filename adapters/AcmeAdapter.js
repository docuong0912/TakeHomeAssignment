class AcmeAdapter{
  constructor(acmeSupplier){
    this.acmeSupplier = acmeSupplier
  }
    mappingData(){
      this.acmeSupplier.hotels = this.acmeSupplier.hotels.map(hotel => {
        const {
          Latitude,
          Longitude,
          City,
          Country,
          DestinationId,
          Address,
          ...rest
        } = hotel
        const restLowerCase = Object.fromEntries(
          Object.entries(rest).map(([key, value]) => [key.toLowerCase(), value])
        );
        return{
          ...restLowerCase,
          destination_id: DestinationId,
          location:{
            lat: Latitude,
            lng: Longitude,
            city: City,
            country: Country,
            address: Address
          }
        }
      })
  }
}
module.exports = AcmeAdapter