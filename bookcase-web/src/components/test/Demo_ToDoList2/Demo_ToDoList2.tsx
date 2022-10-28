/*
 * @Author: Dihan Li lidihan@hyperchain.cn
 * @Date: 2022-10-28 10:15:57
 * @LastEditors: Dihan Li lidihan@hyperchain.cn
 * @LastEditTime: 2022-10-28 10:23:36
 * @FilePath: /bookcase-web/src/components/test/Demo_ToDoList2/Demo_ToDoList2.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react';
import Card from './Card';
import './todo.less';


export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: [{
                key: 't1',
                data: {
                    todo: 'Learn react-motion',
                    completed: false
                }
            }]
        }
        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    addTodo(e) {
        e.preventDefault();
        let newTodo = {
            key: `t${new Date()}`,
            data: {
                todo: this.inputRef.value,
                completed: false
            }
        }
        this.setState({
            todos: [...this.state.todos, newTodo]
        })
        this.inputRef.value = '';
    }

    removeTodo( id ) {
        let todos = this.state.todos.filter( todo => todo.key  !== id );
        this.setState({
            todos: todos
        })
    }

    toggle( id ) {
        let todos = this.state.todos.map( todo => {
            if (todo.key === id) {
                todo.data.completed = !todo.data.completed;
            }
            return todo;
        });
        this.setState({
            todos: todos
        })
    }


    render() {

        const todos = this.state.todos.map( (todo, i) => {
            return <Card 
                        key={i}
                        toggle={ this.toggle }
                        removeTodo={ this.removeTodo } 
                        todo={ todo } /> 
        })

        return(
            <div className='app'>
                <h1>to-dos</h1>
                <div className='todos-wrap'>
                    <div className='right-arrow'></div> 
                    <div className='input-container'>
                        <form onSubmit={ this.addTodo }>
                            <input 
                                ref={ input => this.inputRef = input}
                                placeholder='add new to-do...'
                                className='todo-inp'
                                /> 
                        </form>   
                    </div>
                    <div>
                        { todos }
                    </div>  
                </div> 
            </div> 
        )
    }
}