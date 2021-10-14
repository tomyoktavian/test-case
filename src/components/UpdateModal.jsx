import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../redux/actions';

const UpdateModal = ({ todo }) => {
    const [title, setTitle] = useState(todo.title)
    const [description, setDescription] = useState(todo.description)
    const [status, setStatus] = useState(todo.status)
    let dispatch = useDispatch();
    var m = new Date();
    var dateString = m.getUTCFullYear() + "-" + (m.getUTCMonth() + 1) + "-" + m.getUTCDate() + " " + m.getUTCHours() + ":" + m.getUTCMinutes();

    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal)
    };

    const btnUpdate = () => {
        dispatch(updateTodo({
            ...todo,
            title: title,
            description: description,
            status: status,
            createdAt: dateString
        }))

        setModal(!modal)
    }

    return (
        <div>
            <Button color="primary" onClick={toggle}>Edit</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Update</ModalHeader>
                <ModalBody>
                    <form>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input
                                value={title}
                                onChange={(e) => {
                                    setTitle(e.target.value);
                                }}
                                type="text" className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea
                                id="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                type="text" className="form-control" />
                        </div>
                        <div className="form-check">
                            {status === 0 ?
                                <input className="form-check-input" type="checkbox" onChange={(e) => { e.target.checked ? setStatus(1) : setStatus(0) }} id="flexCheckDefault" />
                                :
                                <input className="form-check-input" type="checkbox" onChange={(e) => { e.target.checked ? setStatus(1) : setStatus(0) }} id="flexCheckDefault" checked />
                            }
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Selesai
                            </label>
                        </div>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={btnUpdate}>Update</Button>{' '}
                    {todo.status === 0 ?
                        <Button color="primary"
                            className="btn btn-danger m-2"
                            onClick={() => { dispatch(deleteTodo(todo.id)); setModal(!modal) }}
                        >Delete</Button>
                        :
                        <Button color="secondary"
                            disabled
                            className="btn btn-secondary  m-2"
                        >Delete</Button>
                    }
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default UpdateModal;