import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { Typography } from '@mui/material';

import CardContent from '@mui/material/CardContent';

const CardScore = ({ title, data, dataone, date}) => {
    return (
        <Card>
            <CardHeader title={title}
                subheader={date} />
            <CardContent>
                <Typography color="primary" fontWeight={700} fontSize={40}>
                    {data}
                  
                    {dataone}
                </Typography>
            </CardContent>
        </Card>
    )


}

export default CardScore;