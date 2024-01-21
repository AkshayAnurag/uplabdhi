import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import CloudIcon from '@mui/icons-material/Cloud';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { update } from "../features/viewSlice";

const AchievementsViewer = () => {
    const { typeIndex } = useSelector((state) => state.view);
    const dispatch = useDispatch();

    const handleTabSwitch = (_, newIndex) => {
        dispatch(update({
            typeIndex: newIndex
        }));
    };

    return (
        <>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={typeIndex} onChange={handleTabSwitch} variant="scrollable" scrollButtons="auto">
                    <Tab icon={<CloudIcon />} label="Projects" />
                    <Tab icon={<VerifiedUserIcon />} label="Industry-Recognized Certificates" wrapped />
                    <Tab icon={<LocalPoliceIcon />} label="Assessment-Based Certificates" wrapped />
                    <Tab icon={<TaskAltIcon />} label="Course Completion Certificates" wrapped />
                </Tabs>
            </Box>

            {typeIndex === 0 && <Box>A</Box>}
            {typeIndex === 1 && <Box>B</Box>}
            {typeIndex === 2 && <Box>C</Box>}
            {typeIndex === 3 && <Box>D</Box>}
        </>
    );
}

export default AchievementsViewer;