import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import React from 'react'

type CardContentProps = {
    title?: string
    children: React.ReactElement
}
const CustomCard = (props: CardContentProps) => {
    return (
        <Box>
            <Card sx={{ borderTop: '1.5px solid', borderTopColor:'primary.light' }}>
                <CardHeader title={props.title} sx={{ mx:2}}/>
                <CardContent sx={{ px:2}}>
                    { props.children }
                </CardContent>
            </Card>
        </Box>
    );
}

export default CustomCard;