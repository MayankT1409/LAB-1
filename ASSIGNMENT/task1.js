//array task
const task = [
    {title:"uploading",status:"Completed",priority:5},
    {title:"downloading",status:"Pending",priority:4},
    {title:"Debugging",status:"Pending",priority:2}
]

//funcion to add the task in array
const addTask = (task,new_task) =>{
    task.push(new_task)
}

addTask(task,{title:"Copying",status:"Pending",priority:1})
console.log(task)


//fucntion to get the task according to the given status
const listByStatus = (task,status) => {
    return task.filter(task => task.status === status)
}

console.log(listByStatus(task,"Pending"))

//fucntion to display the highest priority
const highestPrioriy = (task) => {
    return task.reduce((highest,task) => task.priority > highest.priority ? task : highest)
}

console.log(highestPrioriy(task))

//display all the task by using the destructuring
const getMovies = (task) =>{
    return task.map((task)=> `TASK : ${task.title} , STATUS : ${task.status}`)
}

console.log(getMovies(task))

//display all the task by using the template literals
task.forEach(task => {
    console.log(`Title: ${task.title}, Status: ${task.status}, Priority: ${task.priority}`)
})