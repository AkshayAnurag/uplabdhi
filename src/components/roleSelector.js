import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { update } from "../features/viewSlice";

const RoleSelector = () => {
    const { role } = useSelector((state) => state.view);
    const dispatch = useDispatch();

    const handleTabSwitch = (_, newIndex) => {
        dispatch(update({
            role: newIndex
        }));
    };

    const roles = [
        {
            name: "All",
            icon: <VerifiedUserIcon/>
        },
        {
            name: "Python Developer",
            icon: <VerifiedUserIcon/>
        },
        {
            name: "Flutter Developer",
            icon: <VerifiedUserIcon/>
        },
        {
            name: "React Developer",
            icon: <VerifiedUserIcon/>
        },
        {
            name: "Front-end Developer",
            icon: <VerifiedUserIcon/>
        },
        {
            name: "Back-end Developer",
            icon: <VerifiedUserIcon/>
        },
        {
            name: "Full-Stack Developer",
            icon: <VerifiedUserIcon/>
        },
        {
            name: "Cloud Developer",
            icon: <VerifiedUserIcon/>
        },
        {
            name: "Graph Database Administrator",
            icon: <VerifiedUserIcon/>
        },
        {
            name: "Neo4J Developer",
            icon: <VerifiedUserIcon/>
        },
    ]

    return (
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={role} onChange={handleTabSwitch} variant="scrollable" scrollButtons="auto" orientation="vertical">
                {roles.map((role) => (
                    <Tab icon={role.icon} label={role.name} wrapped key={role.name}/>
                ))}
            </Tabs>
        </Box>
    );
}

export default RoleSelector;