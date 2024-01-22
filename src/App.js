import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import storeFileData from './storeData';
import { update } from "./features/dataSlice";
import PersonalDetails from "./components/personalDetails";
import AchievementTypeSelector from "./components/achievementTypeSelector";
import RoleSelector from "./components/roleSelector";
import { Box, CssBaseline, Grid } from "@mui/material";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        storeFileData.sort((achievement1, achievement2) => {
            if (!achievement1.validFrom && !achievement2.validFrom) {
                return achievement1.name.localeCompare(achievement2.name);
            }
            if (!achievement1.validFrom) {
                return -1;
            }
            if (!achievement2.validFrom) {
                return 1;
            }

            if (new Date(achievement2.validFrom) - new Date(achievement1.validFrom) == 0) {
                return achievement1.name.localeCompare(achievement2.name);
            }
            return new Date(achievement2.validFrom) - new Date(achievement1.validFrom);
        })
        dispatch(update(storeFileData));
    }, []);

    return (
        <>
            <CssBaseline />
            <Grid container spacing={1} columns={{ xs: 2, sm: 8, md: 16 }} sx={{ px: 1 }}>
                <Grid item xs={2} sm={2} md={2}>
                    <RoleSelector />
                </Grid>
                <Grid item xs={2} sm={6} md={14}>
                    <AchievementTypeSelector />
                    <Box component="footer" sx={{ py: 3, px: 2, height: "15vh" }}>
                        <PersonalDetails />
                    </Box>
                </Grid>
            </Grid>

        </>
    )
}

export default App