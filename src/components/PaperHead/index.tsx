import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import React from "react";

interface Props {
    text: string
}
export const PaperHead = ({text}: Props) => {
    return <Box sx={{
        height: 61,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: '20px',
        paddingRight: '24.5px',
        borderBottom: '1px solid #E4E4E4',
        '& .MuiTypography-h1': {
            color: 'primary.dark',
            fontSize: 20,
            fontWeight: 600
        }
    }}>
        <Typography variant={'h1'}>{text}</Typography>
        <SearchIcon sx={{
            fill: '#707070',
        }} />
    </Box>
}