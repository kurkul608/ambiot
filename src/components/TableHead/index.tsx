import Gid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";

export const TableHead = () => {
    return <Box sx={{
        height: 52,
        borderBottom: '1px solid #E4E4E4',
        paddingLeft: '20px',
        paddingRight: '24.5px',
        display: 'flex',
        alignItems: 'center',
        '& .MuiTypography-subtitle1': {
            color: 'text.secondary',
            fontSize: 12,
            fontWeight: 'normal'
        }
    }}>
        <Gid container spacing={0}>
            <Gid item xs={3}><Typography variant={'subtitle1'}>ID</Typography></Gid>
            <Gid item xs={3}><Typography variant={'subtitle1'}>Устройство</Typography></Gid>
            <Gid item xs={3}><Typography variant={'subtitle1'}>Состояние</Typography></Gid>
            <Gid item xs={3}><Typography variant={'subtitle1'}>Значение</Typography></Gid>
        </Gid>
    </Box>
}