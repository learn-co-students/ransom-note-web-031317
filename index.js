let buildHistogram = magazine => {
  let histogram = {}

  for (let i = 0; i < magazine.length; i++){
    if (histogram[magazine[i]]){
      histogram[magazine[i]]++
    }else{
      histogram[magazine[i]] = 1
    }
  }
  return histogram
}


let canBuildNote = (magazine, note) => {
  let histogram = buildHistogram(magazine),
      splitNote = note.split('')

  for (let i = 0; i < splitNote.length; i++){
    if (!histogram[splitNote[i]] || histogram[splitNote[i]] < 0){
      return false
    }else{
      histogram[splitNote[i]]--
    }
  }
  return true
}
