const isoString = new Date("01-10-2022 GMT").toISOString();

let newDateString = isoString.split("T")[0].slice(0, 7)
console.log(newDateString)
//
// .split('T')[0].slice(0, 7),