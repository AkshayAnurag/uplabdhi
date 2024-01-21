import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { update } from "../features/viewSlice";
import { roles, roleIcons } from "../constants";

const RoleSelector = () => {
    const { role } = useSelector((state) => state.view);
    const dispatch = useDispatch();

    const handleTabSwitch = (_, newIndex) => {
        dispatch(update({
            role: newIndex
        }));
    };

    return (
        <Box>
            <Tabs value={role} onChange={handleTabSwitch} variant="scrollable" scrollButtons="auto" orientation="vertical">
                {
                    roles.map((role) => {
                        let RoleIcon = roleIcons[role];
                        return <Tab icon={<RoleIcon fontSize="large"/>} label={role} wrapped key={role} />;
                    })
                }
            </Tabs>
        </Box>
    );
}

export default RoleSelector;