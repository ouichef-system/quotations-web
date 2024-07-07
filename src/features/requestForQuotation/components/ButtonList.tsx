import { Button, Grid } from "@mui/material";
import { MealTypeItem } from "../interfaces/MealTypeItem";
import { useState } from "react";

interface ButtonListProps {
    mealItems: MealTypeItem[];
    onItemSelected: (id: string) => void;
}

export const ButtonList = ({ mealItems, onItemSelected }: ButtonListProps) => {
    const [selectedItemId, setSelectedItemId] = useState<string | null>(null);

    const handleItemClick = (id: string) => {
        setSelectedItemId(id);
        onItemSelected(id);
    };

    return (
        <Grid container spacing={2} justifyContent="center">
            {mealItems.map(({ id, name }) => (
                <Grid key={id} item xs={12} sm={6} md={4} lg={3}>
                    <Button
                        className={selectedItemId === id ? "selected" : ""}
                        onClick={() => handleItemClick(id)}
                        fullWidth
                        style={ selectedItemId === id ? {
                            backgroundColor: "#75C659", // Custom background color
                            color: "#fff", // Text color
                            border: "1px solid #75C659", // Border style
                            borderRadius: "5px", // Rounded corners
                            padding: "10px 20px", // Padding
                            fontSize: "1rem", // Font size
                            fontWeight: 600, // Font weight
                            boxShadow: "none", // Remove box shadow if not needed
                            transition: "background-color 0.3s ease", // Smooth transition
                        } : {
                            border: "1px solid #75C659"
                        }}>
                        {name}
                    </Button>
                </Grid>
            ))}
        </Grid>
    );
};
