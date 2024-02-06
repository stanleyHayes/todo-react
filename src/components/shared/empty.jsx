import {Box, Card, CardContent, Grid, Stack, Typography} from "@mui/material";

const Empty = ({title, description, action}) => {
    return (
        <Card variant="outlined">
            <CardContent>
                <Stack spacing={2} direction="column">
                    <Typography align="center" variant="h4" sx={{color: "text.primary"}}>
                        {title}
                    </Typography>
                    <Typography align="center" variant="h6" sx={{color: "text.secondary"}}>
                        {description}
                    </Typography>
                    <Box>
                        <Grid container={true}  justifyContent="center">
                            <Grid xs={12} md="auto" item={true}>
                                {action}
                            </Grid>
                        </Grid>
                    </Box>
                </Stack>
            </CardContent>
        </Card>
    )
}

export default Empty;