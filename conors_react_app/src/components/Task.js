import react from 'react';

const Task = (props) => {
    return (
        <div className="card" style={{backgroundColor: props.done ? 'lightgrey' : '#5bb4c4'}}>
            <p className='title'>{props.title}</p>
            <p>Due: {props.deadline}</p>
            <p className='description'>Description: {props.description}</p>
            <p 
            className='priority' 
              style={{
                backgroundColor: props.priority === "Low" ? "yellow" : 
                     props.priority === "Medium" ? "green" : 
                     props.priority === "High" ? "red" : "transparent"
                     }}
>
  Priority: {props.priority}
</p>

            <button onClick={props.markDone} className='doneButton'>Done</button>
            <button onClick={props.deleteTask} className='deleteButton'>Delete</button>
        </div>
    );
};

export default Task;