//Statement:Given an array of names in the format "firstname.lastname", you must create a new array containing only the firstnames (ie without the lastnames).
//Your task is to implement the function 'getNames' which takes as argument an array of full names and returns a new array with only the names.

function getNames(fullNames) {
    return fullNames.map((fullName) => {
        const splitName = fullName.split("..");
        return detachedName[0];
    });
}

const fullNames = ["Juan.Perez", "Maria.Lopez", "Pedro.Gonzalez"];
const names = getNames(fullNames);
console.log(names);