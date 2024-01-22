import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Grid } from '@mui/material';
import { techStacks } from '../constants';

const AchievementDetails = (props) => {
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
        props.setShowDetails(false);
    };

    useEffect(() => {
        setOpen(props.open)
    }, [props.open])

    return (
        <Dialog
            open={open}
            fullWidth={true}
            maxWidth="lg"
            onClose={handleClose}
            scroll="paper"
        >
            <DialogTitle>
                <Grid container spacing={2} justifyContent="space-between" alignItems={"center"}>
                    <Grid item>
                        {props.achievement.name}
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" onClick={handleClose}>Close</Button>
                    </Grid>
                </Grid>
            </DialogTitle>
            <DialogContent dividers={true} sx={{ height: "100vh" }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Grid container spacing={2} justifyContent={"flex-end"}>
                            {
                                props.achievement.techStacks.map((achievementTechStack) => {
                                    const TechStackIcon = techStacks.find((techStack) => techStack.id === achievementTechStack).icon;
                                    return (
                                        <Grid item key={achievementTechStack}>
                                            <TechStackIcon />
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <img src={require(`../images/${props.achievement.imagePath}`).default} width="100%" />
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Grid container justifyContent="space-between" alignItems="center">
                    <Grid item>
                        <Button variant="outlined" disabled={props.achievementIndex == 0} onClick={() => props.showAnotherAchievement(props.achievementIndex - 1)}>Previous</Button>
                    </Grid>
                    <Grid item>
                        {
                            props.achievement.type === "project" ?
                                <Button size="medium" variant="outlined" target="_blank" href={props.achievement.visitUrl} endIcon={<OpenInNewIcon />}>Visit</Button> :
                                <Button size="medium" variant="outlined" target="_blank" href={props.achievement.validationUrl} endIcon={<OpenInNewIcon />}>Validate</Button>
                        }
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" disabled={props.achievementIndex == props.totalAchievements - 1} onClick={() => props.showAnotherAchievement(props.achievementIndex + 1)}>Next</Button>
                    </Grid>
                </Grid>
            </DialogActions>
        </Dialog>
    );
}

export default AchievementDetails;