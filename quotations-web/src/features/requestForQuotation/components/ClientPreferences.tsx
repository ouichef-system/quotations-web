import { Button, Checkbox, Divider, FormControlLabel, FormGroup, Grid } from "@mui/material";
import TextField from "@mui/material/TextField/TextField";
import { useState } from "react";

interface ClientPreferencesProps {
    onItemSelected: (value: ClientPreferences) => void;
    onHandleComplete: () => void;
}

export interface ClientPreferences {
    cuisinePreferences?: CuisinePreferencesChek[];
    chefPreference?: string;
    dietaryRestrictions?: string;
}

interface CuisinePreferencesChek {
    isChecked: boolean;
    cuisinePreference?: string;
}

export const ClientPreferences = ({ onItemSelected, onHandleComplete }: ClientPreferencesProps) => {

    const [clientDetails, setClientDetails] = useState<ClientPreferences>({
        cuisinePreferences: [
            { isChecked: false, cuisinePreference: "No tengo preferencia" },
            { isChecked: false, cuisinePreference: "Cocina italiana" },
            { isChecked: false, cuisinePreference: "Cocina criolla" },
            { isChecked: false, cuisinePreference: "Cocina española" },
            { isChecked: false, cuisinePreference: "Cocina japonesa" },
            { isChecked: false, cuisinePreference: "Cocina mexicana" },
            { isChecked: false, cuisinePreference: "Cocina vegetariana" },
            { isChecked: false, cuisinePreference: "Otra (especificar)" }
        ],
        chefPreference: "",
        dietaryRestrictions: ""
    });

    const handleSubmit = () => {
        onItemSelected(clientDetails);
        onHandleComplete();
    };

    const onPreferenceChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
        const updatedCuisine = event.target.name;
        const updatedChecked = event.target.checked;

        setClientDetails(prevState => {
            const updatedPreferences = prevState.cuisinePreferences?.map(preference => {
                if (preference.cuisinePreference === updatedCuisine) {
                    return { ...preference, isChecked: updatedChecked };
                }
                return preference;
            });

            return {
                ...prevState,
                cuisinePreferences: updatedPreferences
            };
        });
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = event.target;
        setClientDetails(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    return (
        <Grid justifyContent="flex-start" alignItems="flex-start" container spacing={{ xs: 1, sm: 2, md: 2 }} columns={{ xs: 1, sm: 8, md: 12 }}>
            <Grid item xs={1} sm={4} md={12}>
                <Divider>¿Alguna preferencia culinaria?</Divider>
            </Grid>
            <Grid item xs={1} sm={2} md={6}>
                <FormGroup>
                    {clientDetails.cuisinePreferences?.map((preference, index) => (
                        <FormControlLabel
                            key={index}
                            control={<Checkbox onChange={onPreferenceChecked} name={preference.cuisinePreference} checked={preference.isChecked} />}
                            label={preference.cuisinePreference}
                        />
                    ))}
                </FormGroup>
            </Grid>
            <Grid item xs={1} sm={4} md={12}>
                <Divider>¿Alguna restricción alimenticia?</Divider>
            </Grid>
            <Grid item xs={1} sm={4} md={12}>
                <TextField multiline rows={4} id="dietaryRestrictions" label="Restricción alimenticia" variant="outlined" value={clientDetails.dietaryRestrictions} onChange={handleChange} fullWidth />
            </Grid>
            <Grid item xs={1} sm={4} md={12}>
                <Button onClick={handleSubmit} type="submit" variant="contained">Siguiente paso</Button>
            </Grid>
        </Grid>
    );
}

