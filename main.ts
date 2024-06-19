#! /usr/bin/env node

import inquirer from "inquirer";

let todos: string[] =[];
let Condition = true;

while(Condition){
let ans = await inquirer.prompt(
     [

        {   
            name: "select",
            message: "select an operation",
            type: "list",
            choices: ["Add", "update","view", "delete", "exit"],
        }
    ]);
 if(ans.select === "Add"){
    let addTodo =await inquirer.prompt({
        name: "todo",
        type: "input",
        message: "Add items in the list",
        validate: function (input){
            if(input.trim() == ""){
                return "Task cannot be empty. please enter a valid task.";
            } 
            return true;
        }
    })
    if(addTodo.todo.trim() !== ""){
    todos.push(addTodo.todo);
    todos.forEach(todo => console.log(todo))
    }
    }   
 if(ans.select === "update"){
    let updateTodo = await inquirer.prompt({
        name: "todo",
        type: "list",
        message: "update items in the list",
        choices: todos.map(items => items)
    })

    let addTodo =await inquirer.prompt({
        name: "todo",
        type: "input",
        message: "Add items in the list",
    })
    let newTodo = todos.filter(val => val !== updateTodo.todo);
    todos = [...newTodo,addTodo.todo];
    todos.forEach(todo => console.log(todo))

    } 
    
 if(ans.select === "view"){
    todos.forEach(todo => console.log(todo))

 } 

 if(ans.select === "delete"){
 let deleteTodo = await inquirer.prompt({
    name: "todo",
    type: "list",
    message: "select items to delete",
    choices: todos.map(items => items)
 })
 let newTodo = todos.filter(val => val !== deleteTodo.todo);
 todos = [...newTodo];
 todos.forEach(todo => console.log(todo))

}

 if(ans.select === "exit"){
    console.log("Exiting program...");
    Condition = false;
 }
}   









            