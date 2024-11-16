class MergeHotel{
  merge(data){
    return data.reduce((acc, val) => {
      if (!acc[val.id]) {
        acc[val.id] = { ...val };
      } else {
        this.mergeValues(acc[val.id], val);
      }
      return acc;
    }, {});
  }
  mergeValues(existing, newValue){
    for (const [key, value] of Object.entries(newValue)) {
      if (Array.isArray(value)) {
        this.handleArrayMerge(existing, key, value);
      } else if (this.isObject(value)) {
        this.handleObjectMerge(existing, key, value);
      } else {
        this.handlePrimitiveMerge(existing, key, value);
      }
    }
  }
  handleArrayMerge(existing, key, newArray){
    if (!Array.isArray(existing[key])) {
      existing[key] = []; 
    }
    existing[key] = Array.from(new Set([...existing[key], ...newArray])); 
  }
  isObject(value) {
    return typeof value === 'object' && value !== null;
  }
  handleObjectMerge(existing, key, newObject) {
    if (!this.isObject(existing[key])) {
      existing[key] = {}; 
    }
    existing[key] = { ...existing[key], ...newObject }; 
  }
  handlePrimitiveMerge(existing, key, value) {
    if (existing[key] == null) {
      existing[key] = value;
    }
  }
}
module.exports = MergeHotel