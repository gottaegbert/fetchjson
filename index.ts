import axios from "axios"

const url = 'https://jsonplaceholder.typicode.com/todos/1';

const today = new Date();
today.getMonth();

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(response => {
  // console.log(response.data);
  const todo = response.data as Todo;
  const id = todo.id
  const title = todo.title
  const completed = todo.completed

  logTodo(id,title,completed)
});
const logTodo = (id: number, title:string, completed:boolean) => {    
    console.log(`
    THE TODO with ID : ${id}
    THE TODO's title :${title}
    IS it finished? : ${completed}
    today is : `
    )
}
  
