import { useState } from "react"

const AddTaskForm = ({addTaskFunction}) => {
    const [task,setTask] = useState('')
    
    
    const handlerInputChange = (event) => {
        setTask(event.target.value)
    }
    
    return(
        <form 
        onSubmit={(event)=>{ 
        event.preventDefault()
        addTaskFunction(task)
        setTask('')}} 
        style={{display:'flex', flexDirection:'column'}}>
            <label htmlFor="taskInput"  style={{fontSize:'24px'}}>Add your task.</label>
            <input id="taskInput"  placeholder="Add a task" required onChange={handlerInputChange} value={task}  style={{marginTop:'20px'}} />
            <button type="submit" style={{marginTop:'20px'}} >Add</button>
        </form>
    )
}

export default AddTaskForm