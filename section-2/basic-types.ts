// const person: {
//   name: string;
//   age: number;
// } = {
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: 'Gabriel',
//   age: 25,
//   hobbies: ['counter-strike', 'coocking'],
//   role: [2, 'author'],
// };

enum Role { ADMIN = 5, READ_ONLY, AUTHOR };

const person = {
  name: 'Gabriel',
  age: 25,
  hobbies: ['counter-strike', 'coocking'],
  role: Role.ADMIN,
};

// person.role.push('admin');
// person.role[1] = 10;
// person.role = [0, 'admin', 'test'];

let favoriteActivities: string[];
favoriteActivities = ['coocking'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.AUTHOR) {
  console.log('is author');
}
