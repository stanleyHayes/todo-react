import {Dialog, DialogContent} from "@mui/material";
import AddTodoForm from "./add-todo-form";

const TodoDialog = ({open, handleClose, action, handleTodoSubmit, todo}) => {
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogContent>
                <AddTodoForm
                    handleClose={handleClose}
                    handleTodoSubmit={handleTodoSubmit}
                    action={action}
                    todo={todo}
                />
            </DialogContent>
        </Dialog>
    )
}

export default TodoDialog;