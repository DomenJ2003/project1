import { useRef } from "react";
import "./modal.css";

function AddTodoModal({ visible, setVisible, addTodo }) {
  if (!visible) {
    return <></>;
  }

  const titleRef = useRef(null);
  const descRef = useRef(null);

  const saveTodo = ()=>{
    const title = titleRef.current.value
    const description = descRef.current.value
    addTodo(title, description)
    setVisible(false)
  }


  return (
    <div className="my-modal-container">
      <div class="modal" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Modal title</h5>
              <button
                type="button"
                class="btn-close"
                data-mdb-dismiss="modal"
                aria-label="Close"
                onClick={() => setVisible(false)}
              ></button>
            </div>
            <div class="modal-body">
              <div>
                <label class="form-label" for="todo-title">
                  Title
                </label>
                <input ref={titleRef} type="text" id="todo-title" class="form-control" />
              </div>
              <div>
                <label class="form-label" for="todo-descripton">
                  Description
                </label>
                <textarea
                    ref={descRef}
                  class="form-control"
                  id="todo-descripton"
                  rows="4"
                ></textarea>
              </div>
            </div>
            <div class="modal-footer">
             
              <button type="button" class="btn btn-primary" onClick={saveTodo}>
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
