import react from 'react';

const Task = (props) => {
    return (
        <div className='card'>
            <p className='title'>{props.title}</p>
            <p>Due: {props.deadline}</p>
            <p className='description'>Description: {props.description}</p>
        </div>
    );
};

export default Task;