import {useFormik} from "formik";
import {Button, FormControl, FormHelperText, InputLabel, OutlinedInput, Stack} from "@mui/material";
import * as yup from "yup";
const AddTodoForm = ({action, handleTodoSubmit, todo, handleClose}) => {
    const formik = useFormik({
        onSubmit: (values, formikHelpers) => {
            handleTodoSubmit({title: values.title, description: values.description, completed: false});
            formikHelpers.resetForm();
            handleClose();
        },
        initialValues: {
            title: action === "edit" ? todo?.title: "",
            description: action === "edit" ? todo?.description: ""
        },
        validateOnChange: true,
        validateOnBlur: true,
        validationSchema: yup.object({}).shape({
            title: yup.string().required('Title field required'),
            description: yup.string().required('Title field required'),
        })
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <Stack spacing={2} direction="column">
                <FormControl variant="outlined" fullWidth={true}>
                    <InputLabel htmlFor="title">Title</InputLabel>
                    <OutlinedInput
                        id="title"
                        name="title"
                        fullWidth={true}
                        required={true}
                        value={formik.values.title}
                        onChange={formik.handleChange}
                        size="medium"
                        error={Boolean(formik.touched.title && formik.errors.title)}
                        onBlur={formik.handleBlur}
                        type="text"
                        sx={{}}
                        placeholder="Enter todo title"
                        label="Title"
                        disabled={formik.isSubmitting}
                    />
                    {Boolean(formik.touched.title && formik.errors.title) && (
                        <FormHelperText variant="outlined" error={true}>
                            {formik.errors.title}
                        </FormHelperText>
                    )}
                </FormControl>

                <FormControl variant="outlined" fullWidth={true}>
                    <InputLabel htmlFor="description">Description</InputLabel>
                    <OutlinedInput
                        id="description"
                        name="description"
                        fullWidth={true}
                        required={true}
                        value={formik.values.description}
                        onChange={formik.handleChange}
                        size="medium"
                        error={Boolean(formik.touched.description && formik.errors.description)}
                        onBlur={formik.handleBlur}
                        type="text"
                        sx={{}}
                        multiline={true}
                        minRows={5}
                        placeholder="Enter todo description"
                        label="Description"
                        disabled={formik.isSubmitting}
                    />
                    {Boolean(formik.touched.description && formik.errors.description) && (
                        <FormHelperText variant="outlined" error={true}>
                            {formik.errors.description}
                        </FormHelperText>
                    )}
                </FormControl>
                <Button
                    fullWidth={true}
                    color="secondary"
                    type="submit"
                    variant="contained"
                    disableElevation={true}
                    size="large">
                    Add Todo
                </Button>
            </Stack>
        </form>
    )
}

export default AddTodoForm;