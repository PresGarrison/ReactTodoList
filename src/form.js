import React, { Component } from 'react';

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            listItems: [],
            newItems: " "
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleChange(evt){
        this.setState({newItems:evt.target.value});
    }

    handleSubmit(evt){
        evt.preventDefault();
        // this.state.listItems.push(this.state.newItems)
        let submitArray = [...this.state.listItems];
        submitArray.push(this.state.newItems)
        this.setState({listItems:submitArray})
        this.setState({newItems:" "});
    }

    handleDelete(evt){
        evt.preventDefault();
    //     CANT FIGURE OUT THE LOGIC YET. WILL RETURN TO FINISH THIS LATER
        alert("this will be the delete button")
    }

    render(){
        return (
            <div className="form">
                <h1>Todo List</h1>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type='text' 
                        value={this.state.newItems} 
                        onChange={this.handleChange} 
                    />
                    {this.state.listItems.map((i) => 
                        <li style={{listStyle:"none"}}> 
                            {i} <span onClick={this.handleDelete}> 
                                    {/* trash can icon */}
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                    </svg>
                                </span>
                        </li>
                    )}
                </form>
            </div>
        )
    }
}

export default Form;