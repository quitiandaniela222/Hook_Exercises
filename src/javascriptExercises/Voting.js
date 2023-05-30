// Statement:Given a person's age, check if they are eligible to vote. If the person is 18 or older, return "Eligible to vote", otherwise return "Not eligible to vote".
//Your task is to implement the function 'checkVotingEligibility' which takes a person's age as an argument and returns the corresponding string based on their eligibility to vote.

function checkVotingEligibility(age) {
    if (age >= 18) {
        return "Eligible to vote";
    } else {
        return "Not eligible to vote";
    }
}


console.log(checkVotingEligibility(20));
console.log(checkVotingEligibility(16));