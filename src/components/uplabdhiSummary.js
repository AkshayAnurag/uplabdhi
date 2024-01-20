import React from "react";
import { useSelector } from "react-redux";
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';

const UplabdhiSummary = () => {
    const { content } = useSelector((state) => state.data);

    const getTotalPublicProjects = () => {
        return content.filter(
            accomplishment => accomplishment.type === "project"
        ).length
    }

    const getTotalIndustryCertificates = () => {
        return content.filter(
            accomplishment => accomplishment.type === "industry_certification"
        ).length
    }

    const getTotalAssessmentCertificates = () => {
        return content.filter(
            accomplishment => accomplishment.type === "assessment_based_certification"
        ).length
    }

    const getTotalCompletionCertificates= () => {
        return content.filter(
            accomplishment => accomplishment.type === "completion_certification"
        ).length
    }

    const getTotalNonITCertificates = () => {
        return content.filter(
            accomplishment => accomplishment.type === "non_it_certification"
        ).length
    }

    const getTotalLinkedProfiles = () => {
        return content.filter(
            accomplishment => accomplishment.type === "linked_profile"
        ).length
    }

    const accomplishmentCounts = {
        "Public Projects": {
            count: getTotalPublicProjects(),
            isClickable: true,
            href: "/projects/all"
        },
        "Industry-recognized certificates": {
            count: getTotalIndustryCertificates(),
            isClickable: true,
            href: "/certificates/industry/all"
        },
        "Assessment-based certificates": {
            count: getTotalAssessmentCertificates(),
            isClickable: true,
            href: "/certificates/assessment/all"
        },
        "Course completion certificates": {
            count: getTotalCompletionCertificates(),
            isClickable: true,
            href: "/certificates/completion/all"
        },
        "Non-IT certificates": {
            count: getTotalNonITCertificates(),
            isClickable: true,
            href: "/certificates/non-it/all"
        },
        "Linked profiles": {
            count: getTotalLinkedProfiles(),
            isClickable: true,
            href: "/profiles/all"
        },
    }

    return (
        <Box sx={{
            bgcolor: 'background.paper',
            boxShadow: 10,
            borderRadius: 2,
            p: 2
        }}>
            <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    Object.entries(accomplishmentCounts).map(
                        ([accomplishmentName, accomplishmentDetails]) =>
                            <Grid item xs={2} sm={4} md={4} key={accomplishmentName}>
                                <Chip
                                    avatar={<Avatar>{accomplishmentDetails["count"]}</Avatar>}
                                    label={accomplishmentName}
                                    clickable={accomplishmentDetails["href"] ? true : false}
                                    component={accomplishmentDetails["href"] ? "a" :  null}
                                    href={accomplishmentDetails["href"] ? accomplishmentDetails["href"] :  null}
                                />
                            </Grid>
                    )
                }
            </Grid>
        </Box>
    );
}

export default UplabdhiSummary;