import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';


import CardContent from '@mui/material/CardContent';

const CardCircle = ({ title, data}) => {
    return (
        <Card>
            <CardHeader title={title}/>
            <CardContent sx={{ p:2, '&:last-child': { pb: 1 }}}>
                    {data}
            </CardContent>
        </Card>
    )


}

export default CardCircle;