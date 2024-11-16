class Supplier{
  constructor(){
    this.hotels = []
    this.endpoint = ''
  }
  async fetchHotels(){
    try{
      const res = await fetch(this.endpoint)
      const hotel = await res.json();
      this.hotels = hotel;
    }
    catch (error) {
      console.error("Error fetching hotels:", error);
    }
  }
  async init(){
    await this.fetchHotels()
  }
  filterHotels(hotelIds, destinationIds){
    const hotel = this.hotels.filter(h => hotelIds?.includes(h.id) && destinationIds?.includes(h.destination_id))
    return !hotelIds && !destinationIds ? this.hotels : hotel
  }
}
module.exports = Supplier