import React from "react";
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import MailIcon from '@mui/icons-material/Mail';
import Stack from '@mui/material/Stack';
import ProfileImage from '../images/avatar.jpg';

const PersonalDetails = () => {
    return (
        <Grid container spacing={1} columns={{ xs: 4, sm: 8, md: 12 }} direction="row">
            <Grid item xs={2} sm={6} md={10}>
                <Stack spacing={1} sx={{
                    bgcolor: 'background.paper',
                    boxShadow: 10,
                    borderRadius: 2,
                    p: 2
                }}>
                    <Chip label="Akshay Anurag" color="info" variant='outlined' />
                    <Chip
                        label="akshay.california@gmail.com" color="info" icon={<MailIcon color="info" />} variant='outlined'
                        clickable component="a" href="mailto:akshay.california@gmail.com"
                    />
                </Stack>
            </Grid>
            <Grid item xs={2} sm={2} md={2}>
                <Avatar
                    alt="Akshay Anurag"
                    src={ProfileImage}
                    sx={{
                        width: 100, height: 102,
                        bgcolor: 'background.paper',
                        boxShadow: 20,
                        borderRadius: 2
                    }}
                />
            </Grid>
        </Grid>
    );
}

export default PersonalDetails;