/*
 * @Author: Dihan Li lidihan@hyperchain.cn
 * @Date: 2022-10-28 10:21:18
 * @LastEditors: Dihan Li lidihan@hyperchain.cn
 * @LastEditTime: 2022-10-28 10:25:01
 * @FilePath: /bookcase-web/src/components/test/Demo_ToDoList2/Card.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import './card.less';


export default function Card({ todo, toggle, removeTodo }) {
    return (
        <div className='card-container'>
            <div 
                onClick={ () => toggle(todo.key) }
                className={ todo.data.completed ? 'check toggle-green' : 'check' }
                ></div> 
            <div 
                className={ todo.data.completed ? 'todo completed' : 'todo'}
                >{ todo.data.todo }</div> 
            <div 
                onClick={ () => removeTodo(todo.key) }
                className='remove'>X</div> 
        </div> 
    )
}