import {Box, Button, Container, Divider, Grid, MenuItem, Select, Stack, Typography} from "@mui/material";
import { useEffect, useState} from "react";
import Todo from "../../components/shared/todo";
import Empty from "../../components/shared/empty";
import TodoDialog from "../../components/shared/todo-dialog";

const HomePage = () => {
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState("all");
    const [action, setAction] = useState("new");
    const [todoDialogOpen, setTodoDialogOpen] = useState(false);
    const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
    const [selectedTodo, setSelectedTodo] = useState(null);
    const handleFilterChange = event => {
        setFilter(event.target.value);
    }

    const handleAddTodoClick = () => {
        setTodoDialogOpen(true);
        setAction("new");
    }

    const handleTodoSubmit = todo => {
        setTodos([todo, ...todos]);
    }

    const handleDeleteClick = () => {
        setConfirmDialogOpen(true);
    }

    const confirmDelete = t => {
        setTodos(todos.filter(todo => todo.title === t.title));
    }

    return (
        <Box sx={{minHeight: "100vh", backgroundColor: "background.default", py: 8}}>
            <Container maxWidth="md">
                <Grid spacing={4} container={true} alignItems="center" justifyContent="space-between">
                    <Grid item={true} xs={12} md={6}>
                        <Typography variant="h4" sx={{color: "text.primary"}}>
                            Todos ({todos.length})
                        </Typography>
                    </Grid>
                    <Grid item={true} xs={12} md={3}>
                        <Button
                            size="large"
                            onClick={handleAddTodoClick}
                            color="secondary"
                            disableElevation={true}
                            variant="outlined"
                            fullWidth={true}>
                            Add Todo
                        </Button>
                    </Grid>
                </Grid>

                <Divider variant="fullWidth" sx={{my: 8}}/>


                {todos.length === 0 ? (
                    <Box>
                        <Empty
                            title="Nothing todo"
                            description="You've got nothing doing huh?"
                            action={
                                <Button
                                    onClick={handleAddTodoClick}
                                    color="secondary"
                                    disableElevation={true}
                                    variant="outlined"
                                    fullWidth={true}>
                                    Add Todo
                                </Button>
                            }
                        />
                    </Box>
                ) : (
                    <Stack direction="column" spacing={1}>
                        {todos.map((todo, index) => {
                            return (
                                <Box key={index}>
                                    <Todo
                                        setAction={setAction}
                                        setSelectedTodo={setSelectedTodo}
                                        setDeleteTodo={handleDeleteClick}
                                        todo={todo}
                                    />
                                </Box>
                            )
                        })}
                    </Stack>
                )}
            </Container>

            {todoDialogOpen && (
                <TodoDialog
                    todo={selectedTodo}
                    handleTodoSubmit={handleTodoSubmit}
                    action={action}
                    handleClose={() => setTodoDialogOpen(false)}
                    open={todoDialogOpen}
                />
            )}
        </Box>
    )
}

export default HomePage;