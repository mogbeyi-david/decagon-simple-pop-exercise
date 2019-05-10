function assignId(collection) {
  const lengthOfCollection = collection.length; // get the length of the collection
  // if there is currently no data in the collection, assign an id of 1 to the first item
  if (!lengthOfCollection) return 1;
  // Get the id of the last item and add 1 to it
  return collection[lengthOfCollection - 1].id + 1;
}

module.exports = assignId;