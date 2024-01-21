import React from "react";
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import MailIcon from '@mui/icons-material/Mail';
import Stack from '@mui/material/Stack';
import ProfileImage from '../images/avatar.jpg';

const PersonalDetails = () => {
    return (
        <Grid container spacing={1} columns={{ xs: 4, sm: 8, md: 12 }} direction="row" justifyContent={"flex-end"}>
            <Grid item xs={1} sm={3} md={3}>
                <Chip label="Akshay Anurag" color="info" variant='outlined' />
            </Grid>
            <Grid item xs={1} sm={3} md={3}>
                <Chip
                    label="akshay.california@gmail.com" color="info" icon={<MailIcon color="info" />} variant='outlined'
                    clickable component="a" href="mailto:akshay.california@gmail.com"
                />
            </Grid>
            <Grid item xs={2} sm={2} md={2}>
                <Avatar
                    alt="Akshay Anurag"
                    src={ProfileImage}
                    sx={{
                        width: 60, height: 60,
                        boxShadow: 20,
                        borderRadius: 2
                    }}
                />
            </Grid>
        </Grid>
    );
}

export default PersonalDetails;