import Button from "@mui/material/Button";
import {ReactComponent as Plus} from "../../assets/plus.svg";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";

export const AddBlock = () => {
    return <Box sx={{
        height: 52,
        borderBottom: '1px solid #E4E4E4',
        paddingLeft: '20px',
        paddingRight: '24.5px',
        display: 'flex',
        alignItems: 'center',
    }}>
        <Button sx={{
            '& svg': {
                marginRight: '16px'
            },
            '& .MuiTypography-subtitle1': {
                color: 'text.primary',
                fontSize: 12,
                fontWeight: 'normal'
            }
        }}><Plus/><Typography variant={'subtitle1'}>Добавить датчик</Typography> </Button>
    </Box>
}