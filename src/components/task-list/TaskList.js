import React from 'react';
import './TaskList.scss'
import AddTask from '../add-task/AddTask.js';
import TaskItem from './task-item/TaskItem';

class TaskList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
        }    
    }
    componentDidMount() {
        this.parseLocalStor();
    }

    saveLocalStor = (items) => { 
        localStorage.setItem('todo-list', JSON.stringify(items))
        
        
   }

   parseLocalStor = () => {
    try {
        let items = localStorage.getItem('todo-list');
        if(!items) return; 
        items = JSON.parse(items);
        if(items.length) this.setState({items});

    } catch (e) {
        return alert(Error);
    }
   }
 

    handleItems = (item) => {
        const items = [...this.state.items, item]
        this.setState({items})
        this.saveLocalStor(items);
    }

    handleChangeItem = (item) => {
        const items = this.state.items.map(elem => {
            if (elem.id === item.id) {
                return item;
            }
            return elem;
        });

        this.setState({items});
        this.saveLocalStor(items);
    }

    handleDeleteItem = (id) => {
        const items = this.state.items.filter(item => item.id !== id);
        this.setState({items});
        this.saveLocalStor(items);
    }

    handleDelAllCheckItems = () => {
        const items = this.state.items.filter(item => item.checked !== true);
        this.setState({items});
        this.saveLocalStor(items);
    }



    render() {
        return (
            <div className='todo__body'>
                <AddTask handleAddTask={this.handleItems} handleDelAllCheckItems={this.handleDelAllCheckItems} />
                {this.state.items.map(item =>  <TaskItem 
                    item={item} 
                    handleChangeItem={this.handleChangeItem} 
                    key={item.id} 
                    handleDeleteItem={this.handleDeleteItem}
                />)}
            </div>
        );
    }
}

export default TaskList;