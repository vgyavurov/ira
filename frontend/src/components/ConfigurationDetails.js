
import { Grid } from '@mui/material';
import { useTheme, Stack } from '@mui/material';
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

//components 



const ConfigurationDetails = ({ config }) => {

    const theme = useTheme();
    //   const isMediumScreen = useMediaQuery(theme.breakpoints.up('lg'));

    function createData(name, min, max) {
        return { name, min, max };
    }

    const rowsOne = [
        createData('Very low', `$${config.oe_veryLow_low}`, `$${config.oe_veryLow_high}`),
        createData('Low', `$${config.oe_low_low}`, `$${config.oe_low_high}`),
        createData('Medium', `$${config.oe_medium_low}`, `$${config.oe_medium_high}`),
        createData('High', `$${config.oe_high_low}`, `$${config.oe_high_high}`),
        createData('Very high', `$${config.oe_veryHigh_low}`, `$${config.oe_veryHigh_high}`),
    ];

    const rowsTwo = [
        createData('Very low', config.oe_veryLow_low, config.oe_veryLow_high),
        createData('Low', config.cs_low_low, config.cs_low_high),
        createData('Medium', config.cs_medium_low, config.cs_medium_high),
        createData('High', config.cs_high_low, config.cs_high_high),
        createData('Very high', config.cs_veryHigh_low, config.cs_veryHigh_high),
    ];

    return (

        <Grid container className="home" spacing={3}>
            <Grid sx={{ marginLeft: '20px' }}>
                <h3>Operational Efficiency</h3>
            </Grid>


            <TableContainer component={Paper} sx={{ marginLeft: '20px' }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    {/* <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead> */}
                    <TableBody>
                        {rowsOne.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.min}</TableCell>
                                <TableCell align="right">{row.max}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Grid sx={{ marginLeft: '20px' }}>
                <h3>Customer Satisfaction</h3>
            </Grid>
            <TableContainer component={Paper} sx={{ marginLeft: '20px' }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    {/* <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead> */}
                    <TableBody>
                        {rowsTwo.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.min}</TableCell>
                                <TableCell align="right">{row.max}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Stack direction="row" alignItems={'center'} spacing={1} sx={{ marginLeft: '20px' }}>
                <p><strong>Updated:</strong></p>
                <p>{formatDistanceToNow(new Date(config.updatedAt), { addSuffix: true })}</p>
            </Stack>

        </Grid>

    )
}

export default ConfigurationDetails