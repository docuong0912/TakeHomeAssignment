class PaperfliesAdapter{
  constructor(paperfliesSupplier){
    this.paperfliesSupplier = paperfliesSupplier
  }
  mappingData(){
      this.paperfliesSupplier.hotels = this.paperfliesSupplier.hotels.map(hotel => {
      const {
        hotel_id,
        hotel_name,
        details,
        ...rest
      } = hotel
      return{
        ...rest,
        id: hotel_id,
        name: hotel_name,
        description: details
      }
    })
  }
}
module.exports = PaperfliesAdapter