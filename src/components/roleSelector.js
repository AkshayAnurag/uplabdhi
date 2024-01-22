import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { update } from "../features/viewSlice";
import { roles } from "../constants";
import { Badge } from "@mui/material";

const RoleSelector = () => {
    const { achievements } = useSelector((state) => state.data);
    const { roleId } = useSelector((state) => state.view);
    const dispatch = useDispatch();

    const handleTabSwitch = (_, newId) => {
        dispatch(update({
            roleId: newId,
            achievementTypeId: "__all__"
        }));
    };

    const getAchievementCountForRole = (roleId) => {
        if (roleId === "__all__") {
            return achievements.length;
        }

        return achievements.filter(
            achievement => achievement.roles.includes(roleId)
        ).length;
    }

    return (
        <Box sx={{ display: 'flex', height: "100vh" }}>
            <Tabs value={roleId} onChange={handleTabSwitch} variant="scrollable" scrollButtons="auto" orientation="vertical">
                {
                    roles.filter((role) => getAchievementCountForRole(role.id) > 0).map((role) => {
                        return (
                            <Tab
                                icon={<Badge badgeContent={getAchievementCountForRole(role.id)} color="primary"><role.icon fontSize="large" /></Badge>}
                                label={role.name} wrapped key={role.id} sx={{ py: 3, px: 0 }} value={role.id} />
                        );
                    })
                }
            </Tabs>
        </Box>
    );
}

export default RoleSelector;