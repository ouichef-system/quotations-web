import { Card, CardActionArea, CardActions, CardContent, Typography, useMediaQuery, useTheme } from "@mui/material";
import { ReactNode } from "react";

interface QuestiongridProps {
    questionTitle: string;
    children: ReactNode;
}

export const Questiongrid: React.FC<QuestiongridProps> = ({ questionTitle, children }) => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Card sx={{ width: isSmallScreen ? '100%' : '70vw', maxWidth: '100%' }}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {questionTitle}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                {children}
            </CardActions>
        </Card>
    );
}
