// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactory = (num, array) => {
  return {
    specimenNum: num,
    dna: array,
    mutate(){
      // array to hold base options
      const dnaBases = ['A', 'T', 'C', 'G']
      // pulls a random "base" index from the object DNA sequence
      let randomBase = Math.floor(Math.random() * this.dna.length);
      // indicator to stop while loop for iterating indefinitely
      let mutated = false;
      // while loop to generate
      while (mutated === false){
        // pulls random base index from dnaBases to compare w/ randomBase
        let randDnaBase = Math.floor(Math.random() * dnaBases.length);
        // check for identical bases, switch if not
        if (this.dna[randomBase] === dnaBases[randDnaBase]){
          mutated = false;
        } else{
          this.dna[randomBase] = dnaBases[randDnaBase];
          mutated = true;
        }
      }
      return this.dna;
    },
    compareDNA(object){
      // variable to hold number of identical bases
      let identicalBase = 0;
      // for loop through both sequence indexes to search for identical bases, record if true
      for (let i = 0; i <= 14; i++){
        // check for identical values
        if (this.dna[i] === object.dna[i]){
          identicalBase += 1;
        }
      }
      // variable to hold percentage of similarity
      let simPercent = (identicalBase / 15) * 100;
      console.log(`specimen #${this.specimenNum} and specimen #${object.specimenNum} have ${simPercent.toFixed()}% DNA in common.`)
    },
    willLikelySurvive(){
      // variable to hold number of bases that are 'C' or 'G'
      let cOrG = 0;
      // for loop through dna sequence checking for either 'C' or 'G'
      for (let i = 0; i <= 14; i++){
        // add 1 to counter if index value = C or G
        if (this.dna[i] === 'C' || this.dna[i] === 'G'){
          cOrG += 1;
        }
      }
      // variable to hold percentage value
      let cOrGPercent = (cOrG / 15) * 100;
      // return true if 60% or above, otherwise false
      return cOrGPercent >= 60;
    }
  };
}

// empty array to store viable pAequor subjects
const viableCandidates = [];
// counter variable for pAequor subject numbers
let subjectNum = 1;
// while loop to continue creating pAequor subjects until viableCandidates is full
while (viableCandidates.length < 30){
  // generate subject
  let subject = pAequorFactory(subjectNum, mockUpStrand());
  // test if will survive
  if (subject.willLikelySurvive()){
    // add subject to viableCandidates array
    viableCandidates.push(subject);
    // increase subject number
    subjectNum += 1;
  } else{
  }
}

console.log(viableCandidates);
// for (let object of viableCandidates){
//   console.log(object.willLikelySurvive());
// }

// const strandOne = pAequorFactory(1, mockUpStrand());
// console.log(strandOne.willLikelySurvive());
// const strandTwo = pAequorFactory(2, mockUpStrand());
// strandOne.compareDNA(strandTwo);
// console.log(newStrand.dna);
// console.log(newStrand.mutate());
