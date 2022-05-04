function nameSetter(name, age) {
  console.log('hello ' + name + ' ' + age);
  return name +  ' ' + age;
}

nameSetter('Code Mafia', 10);
const returnVal = nameSetter('Code Mafia2', 20);
console.log(returnVal);
