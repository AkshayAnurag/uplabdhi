import React from "react";
import { useSelector } from "react-redux";
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import CloudIcon from '@mui/icons-material/Cloud';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import PersonalDetails from "./personalDetails";

const AchievementsViewer = () => {
    const { content } = useSelector((state) => state.data);

    const [index, setIndex] = React.useState(0);

    const handleTabSwitch = (_, newIndex) => {
        setIndex(newIndex);
    };

    return (
        <>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={index} onChange={handleTabSwitch} variant="scrollable" scrollButtons="auto">
                    <Tab icon={<CloudIcon />} label="Projects" />
                    <Tab icon={<VerifiedUserIcon />} label="Industry-Recognized Certificates" wrapped />
                    <Tab icon={<LocalPoliceIcon />} label="Assessment-Based Certificates" wrapped />
                    <Tab icon={<TaskAltIcon />} label="Course Completion Certificates" wrapped />
                </Tabs>
            </Box>

            {index === 0 && <Box>A</Box>}
            {index === 1 && <Box>B</Box>}
            {index === 2 && <Box>C</Box>}
            {index === 3 && <Box>D</Box>}
        </>
    );
}

export default AchievementsViewer;