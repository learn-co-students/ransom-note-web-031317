let buildHistogram = magazine => {
  let histogram = {}
  magazine.forEach( (letter, index) => {
    if(histogram[magazine[index]]) {
      histogram[magazine[index]]++
    } else {
      histogram[magazine[index]] = 1
    }
  })
  return histogram
}

// let canBuildNote = (magazine, note) => {
//   let histogram = buildHistogram(magazine, note),
//       splitNote = note.split('')
//
//   splitNote.forEach( (letter, index) => {
//     if (!histogram[splitNote[index]] || histogram[splitNote[index]] < 0) {
//       return false
//     } else {
//       histogram[splitNote[index]]--
//     }
//   })
//   return true
// }

let canBuildNote = (magazine, note) => {
  let histogram = buildHistogram(magazine),
       splitNote = note.split('')

  for (let i = 0; i < splitNote.length; i++){
    if (!histogram[splitNote[i]] || histogram[splitNote[i]] < 0){
      return false
    } else {
      histogram[splitNote[i]]--
    }
  }
  return true
}
