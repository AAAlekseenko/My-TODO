import React from 'react';
import './AddTask.scss'

class AddTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    handleOnChange = (e) => {
        return this.setState({text: e.target.value});
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        if (this.state.text.length === 0) {
            return;
        }
        const newTaskItem = {
            title: this.state.text,
            id: Date.now(),
            checked: false, 
        };

        this.props.handleAddTask(newTaskItem);
        this.setState({text: ''});
    }
    
    

    render() {
        return (
            <form className='add-task__form'>
                <input 
                    onChange={this.handleOnChange}
                    value={this.state.text}
                />
                <button
                    onClick={this.handleOnSubmit}

                >
                    Add Task
                </button>
                <button
                    type="button"
                    onClick={this.props.handleDelAllCheckItems}
                >
                    Delete checked task
                </button>
            </form>
        );
    }
}

export default AddTask;