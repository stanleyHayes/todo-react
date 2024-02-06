import {Card, CardContent, Stack, Typography} from "@mui/material";
import {DeleteForeverOutlined, DoneAllOutlined, EditOutlined} from "@mui/icons-material";

const Todo = ({todo, setSelectedTodo, setAction, setDeleteTodo}) => {
    const {title, description, completed} = todo;
    const handleEditClick = () => {
        setSelectedTodo(todo);
        setAction("edit");
    }


    return (
        <Card
            elevation={0}
            sx={{
                backgroundColor: completed ? "background.completed" : "background.paper"
            }}>
            <CardContent>
                <Stack spacing={1}>
                    <Typography variant="h6" sx={{color: "text.primary"}}>
                        {title}
                    </Typography>
                    <Typography variant="h6" sx={{color: "text.secondary"}}>
                        {description}
                    </Typography>
                    <Stack direction="row" spacing={1} justifyContent="flex-end">
                        <DoneAllOutlined
                            sx={{
                                borderRadius: 0.25,
                                backgroundColor: "light.green",
                                color: "colors.green",
                                padding: 0.5,
                                fontSize: 32,
                                borderColor: "border.green",
                                borderStyle: "solid",
                                borderWidth: 1
                            }}
                        />
                        <EditOutlined
                            sx={{
                                borderRadius: 0.25,
                                backgroundColor: "light.default",
                                color: "colors.default",
                                padding: 0.5,
                                fontSize: 32,
                                borderColor: "border.default",
                                borderStyle: "solid",
                                borderWidth: 1
                            }}
                            onClick={handleEditClick}
                        />
                        <DeleteForeverOutlined
                            sx={{
                                borderRadius: 0.25,
                                backgroundColor: "light.red",
                                color: "colors.red",
                                padding: 0.5,
                                fontSize: 32,
                                borderColor: "border.red",
                                borderStyle: "solid",
                                borderWidth: 1
                            }}
                        />
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    )
}

export default Todo;