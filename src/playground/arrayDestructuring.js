const address = ["1 1st Street", "Pallet Town", "Kanto", "777"];

const [, city, state] = address;

console.log(`You are in ${city}, ${state}.`);

const otherAddress = [];

const [, , region = "Johto"] = otherAddress;

console.log(`You are in ${region}`);
