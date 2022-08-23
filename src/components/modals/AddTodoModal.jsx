import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { HIDE_TODO_MODAL, TODO_ADD, TODO_EDIT } from "../../actions/types";
import { uuid } from "./../../utils";

import "./modal.css";

function AddTodoModal() {
  const isModelVisible = useSelector((state) => state.todo.todoModalVisible);
  let currentTitle = useSelector((state) => state.todo.currentTitle);
  let currentDescription = useSelector(
    (state) => state.todo.currentDescription
  );
  let currentIdent = useSelector((state) => state.todo.currentIdent);

  const titleRef = useRef(null);
  const descRef = useRef(null);
  const dispatch = useDispatch();

  if (!isModelVisible) {
    return <></>;
  }

  const saveTodo = () => {
    if (currentTitle === "") {
      const title = titleRef.current.value;
      const description = descRef.current.value;
      const ident = uuid();
      const date = new Date();
      //addTodo(title, description)
      dispatch({
        type: TODO_ADD,
        payload: {
          title,
          description,
          date_created: date.toJSON(),
          ident,
          done: false,
        },
      });
      dispatch({ type: HIDE_TODO_MODAL });
      return;
    } else {
      const title = titleRef.current.value;
      const description = descRef.current.value;
      dispatch({
        type: TODO_EDIT,
        payload: {
          title,
          description,
          ident: currentIdent,
        },
      });
    }
  };

  return (
    <div className="my-modal-container">
      <div className="modal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button
                type="button"
                className="btn-close"
                data-mdb-dismiss="modal"
                aria-label="Close"
                onClick={() => dispatch({ type: HIDE_TODO_MODAL })}
              ></button>
            </div>
            <div className="modal-body">
              <div>
                <label className="form-label" htmlFor="todo-title">
                  Title
                </label>
                <input
                  defaultValue={currentTitle}
                  ref={titleRef}
                  type="text"
                  id="todo-title"
                  className="form-control"
                />
              </div>
              <div>
                <label className="form-label" htmlFor="todo-descripton">
                  Description
                </label>
                <textarea
                  defaultValue={currentDescription}
                  ref={descRef}
                  className="form-control"
                  id="todo-descripton"
                  rows="4"
                ></textarea>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                onClick={saveTodo}
              >
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
