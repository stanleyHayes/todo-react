import {Dialog, DialogContent, Stack, Typography} from "@mui/material";
import {WarningAmberOutlined} from "@mui/icons-material";

const ConfirmDialog = ({open, handleClose, title, description}) => {
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogContent>
                <Stack spacing={2} direction="column">
                    <Stack direction="row" justifyContent="center">
                        <WarningAmberOutlined
                            sx={{
                                borderRadius: 0.25,
                                backgroundColor: "light.yellow",
                                color: "colors.yellow",
                                padding: 0.5,
                                fontSize: 48,
                                borderColor: "border.yellow",
                                borderStyle: "solid",
                                borderWidth: 1
                            }}
                        />
                    </Stack>
                    <Typography variant="h6" sx={{color: "text.primary"}}>
                        {title}
                    </Typography>
                    <Typography variant="h6" sx={{color: "text.secondary"}}>
                        {description}
                    </Typography>
                </Stack>
            </DialogContent>
        </Dialog>
    )
}

export default ConfirmDialog;