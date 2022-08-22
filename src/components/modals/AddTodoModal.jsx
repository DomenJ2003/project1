import "./modal.css";

function AddTodoModal({ visible, setVisible }) {
  if (!visible) {
    return <></>;
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
                  Example label
                </label>
                <input type="text" id="todo-title" class="form-control" />
              </div>
              <div>
                <label class="form-label" for="todo-descripton">
                  Message
                </label>
                <textarea
                  class="form-control"
                  id="todo-descripton"
                  rows="4"
                ></textarea>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-mdb-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
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
