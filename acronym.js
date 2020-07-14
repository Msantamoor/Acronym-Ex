//
// This is only a SKELETON file for the 'Acronym' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const parse = (phrase) => {
  const phr = phrase.replace("_", "").split("")
  const acronym = [phr[0]]
  for(let i = 0; i < phr.length; i++){
    if(phr[i] == " " || phr[i] == "-"){
      acronym.push(phr[i+1])
  }
}
  console.log(acronym)
  return acronym.join("").toUpperCase().replace(/[^\w]/gi, '')
}
