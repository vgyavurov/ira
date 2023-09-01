import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { Typography } from '@mui/material';

import CardContent from '@mui/material/CardContent';

const CardScoreLinear = ({ title, data, dataone, date}) => {
    return (
        <Card>
            <CardHeader title={title}
                subheader={date} />
            <CardContent>
                <Typography color="primary" fontWeight={700} fontSize={40}>
                    {data}
                  
                   
                </Typography>
                <Typography color="text.secondary" fontWeight={500} fontSize={20}>
                    <br></br>
                    <br></br>
                {dataone}
                  
                   
                </Typography>
              
            </CardContent>
        </Card>
    )


}

export default CardScoreLinear;