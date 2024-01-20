import React from "react";
import { useSelector } from "react-redux";
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

const RoleSelector = () => {
    const { content } = useSelector((state) => state.data);
    const roles = [
        "Python Developer",
        "Flutter Developer",
        "React Developer",
        "Front-end Developer",
        "Back-end Developer",
        "Full-Stack Developer",
        "Cloud Developer",
        "Graph Database Administrator",
        "Neo4J Developer"
    ]

    return (
        <Stack>
            <List>
                {roles.map((text) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {<VerifiedUserIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
        </Stack>
    );
}

export default RoleSelector;