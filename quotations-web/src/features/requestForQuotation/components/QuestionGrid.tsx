import { Card, CardActionArea, CardActions, CardContent, Typography } from "@mui/material";
import { ReactNode } from "react";

interface QuestiongridProps {
    questionTitle: string;
    children: ReactNode;
}

export const Questiongrid: React.FC<QuestiongridProps> = ({ questionTitle, children }) => {
    return (
        <Card sx={{ width: '70vw' }}>
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
