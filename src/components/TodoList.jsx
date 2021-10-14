import React from 'react'
import TodoItem from './TodoItem'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo } from '../redux/actions'
import axios from 'axios'

function TodoList() {
    let todos = useSelector(state => state);
    let dispatch = useDispatch();

    React.useEffect(() => {
        axios.get('https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list').then(res => {
            for (let i = 0; i < res.data.length; i++) {
                const data = res.data[i];
                dispatch(addTodo({
                    "id": data.id,
                    "title": data.title,
                    "description": data.description,
                    "status": data.status,
                    "createdAt": data.createdAt
                }))
            }
        })
    }, [dispatch])

    const todoBelumSleseai = todos.filter(todo => todo.status === 0);
    const todoSleseai = todos.filter(todo => todo.status === 1);

    return (
        <div className="my-4">
            <div className="row">
                <div className="col-sm">
                    <div class="card">
                        <div class="card-header">
                            Status Belum Selesai
                        </div>
                        <div class="card-body">
                            {todoBelumSleseai.map((todo, idx) => {
                                return <TodoItem key={idx} todo={todo} />;
                            })}
                        </div>
                    </div>
                </div>
                <div className="col-sm">
                    <div class="card">
                        <div class="card-header">
                            Status Selesai
                        </div>
                        <div class="card-body">
                            {todoSleseai.sort(function (a, b) { return new Date(b.createdAt) - new Date(a.createdAt) }).map((todo, idx) => {
                                return <TodoItem key={idx} todo={todo} />;
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoList
