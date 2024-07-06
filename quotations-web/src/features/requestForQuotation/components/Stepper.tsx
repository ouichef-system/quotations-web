import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Questiongrid } from './QuestionGrid';
import { QuestionsTitlesArray } from './RequestQuotation';
import { ClientInformationInput } from './ClientInformationInput';
import { ClientPreferences } from './ClientPreferences';
import { EventDetails } from './EventDetails';
import { EventFinalConfirmation } from './EventFinalConfirmation';
import { IRequestForQuotation } from '../interfaces/IRequestForQuotation';
import { StepContent, StepLabel } from '@mui/material';

interface StepperProps {
    steps: QuestionsTitlesArray;
    requestForQuotation: IRequestForQuotation;
}

export const HorizontalNonLinearStepper: React.FC<StepperProps> = ({ steps, requestForQuotation }) => {

    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState<{
        [k: number]: boolean;
    }>({});

    const totalSteps = () => {
        return steps.length;
    };

    const completedSteps = () => {
        return Object.keys(completed).length;
    };

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    const allStepsCompleted = () => {
        return completedSteps() === totalSteps() - 1;
    };

    const handleNext = () => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ? // It's the last step, but not all steps have been completed,
                // find the first step that has been completed
                steps.findIndex((_step, i) => !(i in completed))
                : activeStep + 1;
        setActiveStep(newActiveStep);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStep = (step: number) => () => {
        setActiveStep(step);
    };

    const handleComplete = () => {
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
    };

    const handleReset = () => {
        setActiveStep(0);
        setCompleted({});
    };

    const returnFinalizationComponent = () => {

        let component;

        if (isLastStep()) {
            component = (
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                        <button type="submit" disabled={!allStepsCompleted()} className="submit-button">
                            Submit
                        </button>
                    </Typography>
                    <Box sx={{ flex: '1 1 auto' }} />
                    <Button onClick={handleReset}>Reiniciar selección</Button>
                </Box>
            )
        } else {
            component = (<Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}>
                    Paso anterior
                </Button>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button onClick={handleReset}>Volver al inicio</Button>
            </Box>)
        }

        return component;
    };

    return (
        <Box sx={{ maxWidth: '100%', overflowX: 'auto' }}>
            <Stepper nonLinear activeStep={activeStep} orientation="vertical">
                {steps.map((step, index) => (
                    <Step key={step.stepName} completed={completed[index]}>
                        <StepLabel color="inherit">
                            {step.stepName}
                        </StepLabel>
                        <StepContent>
                            {steps[activeStep].questions.map(({ id, questionTitle, handler }) => {
                                let componentToRender;

                                if (id === 2) {
                                    componentToRender = <EventDetails onItemSelected={handler} onHandleComplete={handleComplete} />;
                                } else if (id === 1) {
                                    componentToRender = <ClientInformationInput onItemSelected={handler} onHandleComplete={handleComplete} />;
                                } else if (id === 4) {
                                    componentToRender = <ClientPreferences onItemSelected={handler} onHandleComplete={handleComplete}></ClientPreferences>
                                } else if (id === 5) {
                                    componentToRender = <EventFinalConfirmation requestForQuotation={requestForQuotation} />;
                                }

                                return (
                                    <Questiongrid key={id} questionTitle={questionTitle}>
                                        {componentToRender}
                                    </Questiongrid>
                                );
                            })}
                            {returnFinalizationComponent()}
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
   