import { useState } from "react";

const Task = ({taskTitle,taskCompleted,isClicked, deleteTaskFunction}) => {
    console.log(taskCompleted);
    const [isTaskClicked,setIsTaskClicked] = useState(taskCompleted)
    return(
        <>
        <li style={isTaskClicked ? {textDecoration: 'line-through'} : {textDecoration: 'none'} } onClick={() => {
            setIsTaskClicked(!isTaskClicked) 
            isClicked(taskTitle)} } >{taskTitle} </li>
        <button id={taskTitle} onClick={() => deleteTaskFunction(taskTitle) } >Eliminar</button>
        </>
    )
}

export default Task