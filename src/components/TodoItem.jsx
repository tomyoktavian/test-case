import React from 'react'
import UpdateModal from "./UpdateModal";

function TodoItem({ todo }) {
    return (
        <>
            <div class="card mt-2">
                <div class="card-body">
                    <div className="row mx-2 align-items-center">
                        <div className="col text-left">
                            <h4>{todo.title}</h4>
                            <p>{todo.description}</p>
                            <i><small>{todo.createdAt}</small></i>
                        </div>
                        <UpdateModal todo={todo} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default TodoItem
