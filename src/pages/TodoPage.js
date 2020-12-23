import React from 'react';
// import ReactDOM from 'react-dom';
import {hot} from 'react-hot-loader/root';
import './TodoPage.scss';
import TaskList from '../components/task-list/TaskList.js';

function TodoPage() {
    return (
        <div>
            {/* <AddTask /> */}
            <TaskList />
        </div>
    );
}

export default hot(TodoPage);
