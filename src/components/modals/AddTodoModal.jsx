import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {HIDE_TODO_MODAL} from '../../actions/types';

import "./modal.css";

function AddTodoModal({ addTodo }) {
  
  const isModelVisible = useSelector(state=> state.todo.todoModalVisible);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const dispatch = useDispatch();
  
  if (!isModelVisible) {
    return <></>;
  }


  const saveTodo = ()=>{
    const title = titleRef.current.value
    const description = descRef.current.value
    addTodo(title, description)
    dispatch({type: HIDE_TODO_MODAL})
  }


  return (
    <div className="my-modal-container">
      <div className="modal" >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button
                type="button"
                className="btn-close"
                data-mdb-dismiss="modal"
                aria-label="Close"
                onClick={() =>  dispatch({type: HIDE_TODO_MODAL})}
              ></button>
            </div>
            <div className="modal-body">
              <div>
                <label className="form-label" htmlFor="todo-title">
                  Title
                </label>
                <input ref={titleRef} type="text" id="todo-title" className="form-control" />
              </div>
              <div>
                <label className="form-label" htmlFor="todo-descripton">
                  Description
                </label>
                <textarea
                    ref={descRef}
                  className="form-control"
                  id="todo-descripton"
                  rows="4"
                ></textarea>
              </div>
            </div>
            <div className="modal-footer">
             
              <button type="button" className="btn btn-primary" onClick={saveTodo}>
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddTodoModal;
