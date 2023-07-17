import './item-container.css';

const TaskItem = ({ task }) => {
  return (
    <div className='item-container'>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
    </div>
  );
};

export default TaskItem;
