const chooseStations = function(stations){
  const result = new Array();

  for(let station of stations){
    if(station[1] >= 20){
      if (station[2] === "school" || station[2] === "community centre"){
        result.push(station[0]);
      }
    }
  }
  return JSON.stringify(result);
}
let stations = [
  ['A', 10, 'school'],
  ['B', 9, 'restaurant'],
  ['C', 21, 'community centre'],
  ['D', 15, 'school'],
  ['E', 50, 'restaurant'],
  ['F', 20, 'school'],
  ['G', 40, 'community centre'],
  ['H', 50, 'school'],
]
console.log(chooseStations(stations))