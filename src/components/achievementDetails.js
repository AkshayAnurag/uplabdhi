import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const AchievementDetails = (props) => {
    const { achievement } = props;
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
        props.setShowDetails(false);
    };

    useEffect(() => {
        setOpen(props.open)
    }, [props.open])

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            scroll="paper"
        >
            <DialogTitle>{props.achievement.name}</DialogTitle>
            <DialogContent dividers={scroll === 'paper'}>
                <DialogContentText
                    tabIndex={-1}
                >
                    {[...new Array(50)]
                        .map(
                            () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                        )
                        .join('\n')}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
            </DialogActions>
        </Dialog>
    );
}

export default AchievementDetails;