import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Stack from '@mui/material/Stack';
import storeFileData from './storeData';
import { update } from "./features/dataSlice";
import PersonalDetails from "./components/personalDetails";
import UplabdhiSummary from "./components/uplabdhiSummary";
import AchievementsTabs from "./components/achievementsTabs";
import RoleSelector from "./components/roleSelector";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(update(storeFileData));
    }, []);

    return (
            <Stack direction="row" spacing={2}>
                <Stack>
                    <RoleSelector />
                </Stack>

                <Stack spacing={2}>
                    <Stack direction="row" spacing={1}>
                        <UplabdhiSummary />
                        <PersonalDetails />
                    </Stack>
                    <Stack>
                        <AchievementsTabs />
                    </Stack>
                </Stack>
            </Stack>
    )
}

export default App