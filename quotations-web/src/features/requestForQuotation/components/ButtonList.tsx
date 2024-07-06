import { Button } from "@mui/material";
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
        <>
            <ul className="mealTypeButtons">
                {mealItems.map(({ id, name }) => (
                    <li key={id}>
                        <Button
                            className={selectedItemId === id ? "selected" : ""}
                            name="mealType"
                            value={id}
                            onClick={() => handleItemClick(id)}>
                            {name}
                        </Button>
                    </li>
                ))}
            </ul>
        </>
    );
}
