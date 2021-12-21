import {Sensor} from '../../types/sensor'
import Gid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";

export const TableElement = ({temp, model_name, status, id, model_number, is_Active}: Sensor) => {
    return <Box sx={{
        height: 51,
        paddingLeft: '20px',
        paddingRight: '24.5px',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        background: is_Active ? '#F8F8F8' : '',
        '& .MuiTypography-subtitle1': {
            color: 'primary.dark',
            fontSize: 12,
            fontWeight: 'normal',
            lineHeight: '120%'
        },
        '& .MuiTypography-subtitle2': {
            color: 'text.primary',
            fontSize: 12,
            fontWeight: 'normal',
            lineHeight: '120%'
        },
        '& .MuiGrid-root': {
            alignItems: 'center'
        },
        '&:hover': {
            background: '#F8F8F8'
        }
    }}>
        <Gid container spacing={0}>
            <Gid item xs={3}><Typography variant={'subtitle1'}>{id}</Typography></Gid>
            <Gid item xs={3}>
                <Typography variant={'subtitle2'}>{model_number}</Typography>
                <Typography variant={'subtitle1'}>{model_name}</Typography>
            </Gid>
            <Gid item xs={3}><Typography variant={'subtitle1'}>{status ? 'Вкл' : 'Выкл'}</Typography></Gid>
            <Gid item xs={3}><Typography variant={'subtitle1'}>+{temp} °C</Typography></Gid>
        </Gid>
    </Box>
}
