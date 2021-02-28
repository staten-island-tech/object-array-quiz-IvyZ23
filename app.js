const presidents = [
  { name: "Donald Trump", terms: 1, party: "R" },
  { name: "Barack Obama", terms: 2, party: "D" },
  { name: "George W. Bush", terms: 2, party: "R" },
  { name: "Bill Clinton", terms: 2, party: "D" },
  { name: "George H.W. Bush", terms: 1, party: "R" },
  { name: "Ronald Reagan", terms: 2, party: "R" },
  { name: "Jimmy Carter", terms: 1, party: "D" },
  { name: "Gerlad Ford", terms: 1, party: "R" },
  { name: "Richard Nixon", terms: 2, party: "R" },
  { name: "John F. Kennedy", terms: 1, party: "D" },
  { name: "Lyndon Johnson", terms: 2, party: "D" },
  { name: "Dwight Eisenhower", terms: 2, party: "R" }
];

//Challenge Questions
//1) Filter all presidents, leaving only the Democratic ones

const democratics = presidents.filter(function(democrat){
  if(democrat.party === 'D'){
    return true;
  }
}); 

console.table(democratics);

//2)Filter all presidents to leave only one term Republican presidents HINT use If statement

const oneRepublican = presidents.filter(function(president){
  if(president.terms === 1 && president.party === 'R'){
    return true;
  }
});

console.table(oneRepublican);

//3) return only the last three presidents

const lastThree = presidents.slice(9, 12);
console.log(lastThree);

//4) log all dems who served 2 terms. HINT use chain filter, filter and slice

const twoDemocrats = presidents.filter(function(twoTerm){
  if(twoTerm.terms === 2 && twoTerm.party === 'D'){
    return true;
  }
});

console.log(twoDemocrats); 

//BONUS write a script to check if LBJ was a 2 term president. IF he was then alert("LBJ served two terms") else alert "LBJ was one and done"

const lyndon = presidents.find(lyndon => lyndon.name === "Lyndon Johnson"); 

if (lyndon.terms === 2) {
  console.log('LBJ served two terms');
} else {
  console.log('LBJ was one and done');
}