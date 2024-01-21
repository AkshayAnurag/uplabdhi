import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Box, Button, Card, CardActions, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import LifetimeValidity from '../images/lifetime_validity.png';
import AchievementDetails from "./achievementDetails";

const AchievementsViewer = () => {
    const { roleId, achievementTypeId } = useSelector((state) => state.view);
    const { achievements } = useSelector((state) => state.data);

    const [ showDetails, setShowDetails ] = useState(false);
    const [ selectedAchievement, setSelectedAchievement ] = useState({});;

    const getFilteredAchievements = () => {
        return achievements.filter(
            (achievement) => (achievementTypeId === "__all__" ? true : achievement.type === achievementTypeId) && (roleId === "__all__" ? true : achievement.roles.includes(roleId))
        )
    }

    const getAchievementValidity = (achievement) => {
        if (achievement.type === "project") {
            return <Box sx={{ height: 22 }}></Box>   // No validity for projects
        }

        return (
            <Grid container spacing={1} columns={{ xs: 2, sm: 8, md: 12 }} sx={{ height: 30 }}>
                <Grid item xs={1} sm={4} md={6}>
                    <Typography>
                        {achievement.validFrom} {achievement.validTill ? '- ' + achievement.validTill : ""}
                    </Typography>
                </Grid>
                <Grid item xs={1} sm={4} md={6} sx={{ mt: -1, pr: -2 }}>
                    {achievement.validTill ? null : <img src={LifetimeValidity} width="100" />}
                </Grid>
            </Grid>
        )
    }

    const showAchievementDetails = (achievement) => {
        setSelectedAchievement(achievement);
        setShowDetails(true);
    }

    return (
        <>
            <Grid container spacing={10} sx={{ px: 3, py: 4 }} columns={{ xs: 2, sm: 8, md: 12 }}>
                {getFilteredAchievements().map((achievement) => {
                    return (
                        <Grid item xs={2} sm={2} md={3} key={achievement.name}>
                            <Card raised sx={{ width: 400, height: 280 }}>
                                <CardHeader title={achievement.name} subheader={getAchievementValidity(achievement)} />
                                <CardContent>
                                    <Box sx={{ height: 110 }}>
                                        <Grid container spacing={1} columns={{ xs: 2, sm: 8, md: 12 }}>
                                            <Grid item xs={2} sm={4} md={4}>
                                                <img src={require(`../images/${achievement.thumbnailPath}`).default} width="200" />
                                            </Grid>
                                            <Grid item xs={2} sm={4} md={8}>

                                            </Grid>
                                        </Grid>
                                    </Box>
                                </CardContent>
                                <CardActions>
                                    <Button size="medium" variant="contained" color="success" onClick={() => { showAchievementDetails(achievement) }}>View details</Button>
                                    {
                                        achievement.type === "project" ?
                                            <Button target="_blank" size="medium" variant="contained" color="success" href={achievement.visitUrl}>Visit</Button> :
                                            <Button size="medium" variant="contained" color="success">Validate</Button>
                                    }
                                </CardActions>
                            </Card>
                        </Grid>
                    );
                })}
            </Grid>

            <AchievementDetails open={showDetails} achievement={selectedAchievement} setShowDetails={setShowDetails}/>
        </>
    );
}

export default AchievementsViewer;