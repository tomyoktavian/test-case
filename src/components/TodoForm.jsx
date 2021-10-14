import React, { useState } from 'react';
import { addTodo } from '../redux/actions';
import { v1 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';

function TodoInput() {
    let [title, setTitle] = useState('');
    let [description, setDescription] = useState('');
    let dispatch = useDispatch();
    var m = new Date();
    var dateString = m.getUTCFullYear() + "-" + (m.getUTCMonth() + 1) + "-" + m.getUTCDate() + " " + m.getUTCHours() + ":" + m.getUTCMinutes();

    const hendleClick = (e) => {
        e.preventDefault()
        dispatch(addTodo({
            id: uuid(),
            title: title,
            description: description,
            status: 0,
            createdAt: dateString
        }));
        setTitle('');
        setDescription('');
    }

    return (
        <div className="row">
            <div className="col-sm">
                <div class="card">
                    <div class="card-header">
                        <b>Buat List Baru</b>
                    </div>
                    <div class="card-body text-left">
                        <form onSubmit={hendleClick}>
                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <input
                                    id="title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    type="text" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <textarea
                                    id="description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    type="text" className="form-control" />
                            </div>
                            <button type="submit" className="btn btn-primary">Tambah</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoInput
