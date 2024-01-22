import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { update } from "../features/viewSlice";
import { achievementTypes } from "../constants";
import AchievementsViewer from "./achievementsViewer";
import { Badge } from "@mui/material";

const AchievementTypeSelector = () => {
    const { achievements } = useSelector((state) => state.data);
    const { achievementTypeId, roleId } = useSelector((state) => state.view);
    const dispatch = useDispatch();

    const getAchievementCountForType = (achievementTypeId) => {
        if (achievementTypeId === "__all__" && roleId === "__all__") {
            return achievements.length;
        }

        return achievements.filter(
            achievement => (achievementTypeId === "__all__" ? true : achievement.type === achievementTypeId) && (roleId === "__all__" ? true : achievement.roles.includes(roleId))
        ).length;
    }

    const handleTabSwitch = (_, newId) => {
        dispatch(update({
            achievementTypeId: newId
        }));
    };

    return (
        <Box sx={{ height: "85vh" }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={achievementTypeId} onChange={handleTabSwitch} variant="scrollable" scrollButtons="auto">
                    {
                        achievementTypes.filter((achievementType) => getAchievementCountForType(achievementType.id) > 0).map((achievementType) => {
                            return (
                                <Tab
                                    icon={<Badge badgeContent={getAchievementCountForType(achievementType.id)} color="primary"><achievementType.icon fontSize="large" /></Badge>}
                                    label={achievementType.name} key={achievementType.id} sx={{ pt: 3, width: 220 }} value={achievementType.id}/>
                            );
                        })
                    }
                </Tabs>
            </Box>

            <AchievementsViewer />
        </Box>
    );
}

export default AchievementTypeSelector;