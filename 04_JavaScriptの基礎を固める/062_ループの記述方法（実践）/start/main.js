const todos = [
  {
    id: 1,
    title: 'go to school',
    completed: true
  },
  {
    id: 2,
    title: 'go to museum',
    completed: true
  },
  {
    id: 3,
    title: 'go to shopping',
    completed: false
  }
]

for(let i = 0; i < todos.length; i++) {
  let todo = todos[i];
  if(todo.completed == true) {
    console.log(i, todo.title);
  }
}

// for in ver
for(let i in todos) {
  let todo = todos[i];
  if(todo.completed == true) {
    console.log(i, todo.title);
  }
}

// for of ver
for(let todo of todos) {
  if(todo.completed == true) {
    console.log(todo.title);
  }
}