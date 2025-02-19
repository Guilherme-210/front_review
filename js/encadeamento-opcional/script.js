// Codigo da aula 
const user = {
  name: "John Doe",
  email: "doejohn@email.com",
  friends: [
    {
      name: "Mary",
      address: {
        street: "Some Street",
        number: 89,
      },
    },
  ],
  age: 42,
  phone: {
    countryCode: "+55",
    ddd: "22",
    number: "998765432",
  },
}

console.log(user.friends[0].phone?.ddd)
console.log(user?.brothers?.length)
console.log(user.brothers?.[5].name)

// Exemplo extra
const person = {
  name: "Alice",
  job: {
    title: "Developer",
    company: "TechCorp"
  }
};

console.log(person.job?.title); // "Developer"
console.log(person.address?.street); // undefined