//1--The substring() method returns the part of the string between the start and end indexes,
let str = "React";
console.log(str.substring(0, 3)); //Rea-->displays 0, 1, 2 index characters(upto 3 but 3 not consider)
console.log(str.substring(1, 5)); //eact
console.log(str.substring(0, 9)); //React
console.log(str.substring(-2, 4)); //Reac  --> negative values considered as "zero" only
console.log(str.substring(0)); //React--> single argument takes as starting point and returns upto end of the word

//The difference between substring() and substr()
/*The arguments of substring() represent the star and end indexes, while the arguments of substr() represent 
the starting index and the number of characters to include in the returned string.
--substr() is considered a legacy feature in ECMAScript and could be removed from future versions, so it is best to avoid using it if possible.*/

//Differences between substring() and slice()
console.log(str.substring(5, 3)); //ct
console.log(str.slice(5, 3)); // ""--> empty
console.log(str.slice(-4, 2)); //e-->  counts backwards
