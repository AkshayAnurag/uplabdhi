import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import storeFileData from './storeData';
import { update } from "./features/dataSlice";
import PersonalDetails from "./components/personalDetails";
import UplabdhiSummary from "./components/uplabdhiSummary";

const App = () =>{
    const { content } = useSelector((state) => state.data);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(update(storeFileData));
      }, []);

    return (
        <Container sx={{ py: 1 }}>
            <Grid container spacing={8} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={2} sm={6} md={8}>
                    <UplabdhiSummary></UplabdhiSummary>
                </Grid>
                <Grid item xs={2} sm={2} md={4}>
                    <PersonalDetails></PersonalDetails>
                </Grid>

                <Grid item xs={2} sm={2} md={4}>
                </Grid>
                <Grid item xs={2} sm={6} md={8}>
                </Grid>
            </Grid>
        </Container>
    )
}

export default App