import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, Divider, Grid, Tooltip, Typography } from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AchievementDetails from "./achievementDetails";
import { techStacks } from "../constants";

const AchievementsViewer = () => {
    const { roleId, achievementTypeId } = useSelector((state) => state.view);
    const { achievements } = useSelector((state) => state.data);

    const [showDetails, setShowDetails] = useState(false);
    const [selectedAchievementIndex, setSelectedAchievementIndex] = useState(null);
    const [selectedAchievement, setSelectedAchievement] = useState(null);
    const [filteredAchievements, setFilteredAchievements] = useState([]);

    useEffect(() => {
        setFilteredAchievements(achievements.filter(
            (achievement) => (achievementTypeId === "__all__" ? true : achievement.type === achievementTypeId) && (roleId === "__all__" ? true : achievement.roles.includes(roleId))
        ));
    }, [achievementTypeId, roleId, achievements])

    const getAchievementValidity = (achievement) => {
        if (achievement.type === "project") {
            return <Box sx={{ height: 16 }}></Box>   // No validity for projects
        }

        return (
            <Box sx={{ height: 16 }}>
                <Typography>
                    Achieved on {achievement.validFrom} | {achievement.validTill ? 'Valid till ' + achievement.validTill : "No expiry"}
                </Typography>
            </Box>
        )
    }

    const showAchievementDetails = (achievement) => {
        setSelectedAchievementIndex(filteredAchievements.indexOf(achievement))
        setSelectedAchievement(achievement);
        setShowDetails(true);
    }

    const showAchievementDetailsByIndex = (achievementIndex) => {
        setSelectedAchievementIndex(achievementIndex)
        setSelectedAchievement(filteredAchievements[achievementIndex]);
        setShowDetails(true);
    }

    return (
        <>
            <Grid container gap={2} sx={{ px: 2, py: 4 }}>
                {filteredAchievements.map((achievement) => {
                    return (
                        <Grid key={achievement.name}>
                            <Card raised sx={{ width: 380, height: 280 }}>
                                <CardHeader
                                    title={
                                        achievement.name.length >= 30 ?
                                            <Tooltip title={achievement.name}>{achievement.name.substring(0, 30)}{achievement.name.length >= 30 ? "..." : ""}</Tooltip> :
                                            achievement.name
                                    }
                                    subheader={getAchievementValidity(achievement)} />
                                <CardContent>
                                    <Box sx={{ height: 110 }}>
                                        <Grid container spacing={1} justifyContent="space-between">
                                            <Grid item md={6}>
                                                <img src={require(`../images/${achievement.imagePath}`).default} height="110" width="170" />
                                            </Grid>
                                            <Grid item md={6}>
                                                <Grid container columnSpacing={1} justifyContent="space-around" alignItems={"center"}>
                                                    <Grid item md={12}>
                                                        <Grid container>
                                                            {
                                                                achievement.techStacks.slice(0, 3).map((achievementTechStack) => {
                                                                    const TechStackIcon = techStacks.find((techStack) => techStack.id === achievementTechStack).icon;
                                                                    return (
                                                                        <Grid item md={3} key={achievementTechStack}>
                                                                            <TechStackIcon fontSize="large" color="pink" />
                                                                        </Grid>
                                                                    )
                                                                })
                                                            }
                                                            {
                                                                achievement.techStacks.length > 3 ?
                                                                    <Grid item md={3}>
                                                                        <Avatar sx={{ width: 40, height: 40 }}>{`${'+'}${achievement.techStacks.length - 3}`}</Avatar>
                                                                    </Grid> : null
                                                            }
                                                        </Grid>
                                                    </Grid>

                                                    <Grid item md={12}>
                                                        <Grid container>
                                                            <Grid item md={6}>
                                                                {(achievement.type === "project" || achievement.validTill) ? null : null}
                                                            </Grid>
                                                            <Grid item md={6}>
                                                                {(achievement.type === "project" || achievement.validTill) ? null : null}
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>

                                                    <Grid item md={12}>
                                                        <Grid container>

                                                            <Grid item md={6}>
                                                                {(achievement.type === "project" || achievement.validTill) ? null : null}
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </CardContent>
                                <CardActions>
                                    <Grid container spacing={2} justifyContent="center">
                                        <Grid item>
                                            <Button size="medium" variant="outlined" onClick={() => { showAchievementDetails(achievement) }} startIcon={<VisibilityIcon />}>View details</Button>
                                        </Grid>
                                        <Grid item>
                                            {
                                                achievement.type === "project" ?
                                                    <Button size="medium" variant="outlined" target="_blank" href={achievement.visitUrl} endIcon={<OpenInNewIcon />}>Visit</Button> :
                                                    <Button size="medium" variant="outlined" target="_blank" href={achievement.validationUrl} endIcon={<OpenInNewIcon />}>Validate</Button>
                                            }
                                        </Grid>
                                    </Grid>
                                </CardActions>
                            </Card>
                        </Grid>
                    );
                })}
            </Grid>

            {
                selectedAchievement ?
                    <AchievementDetails
                        open={showDetails} setShowDetails={setShowDetails} showAnotherAchievement={showAchievementDetailsByIndex}
                        achievement={selectedAchievement} achievementIndex={selectedAchievementIndex} totalAchievements={filteredAchievements.length}
                    /> : null
            }
        </>
    );
}

export default AchievementsViewer;