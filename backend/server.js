const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const assessmentRoutes = require('./routes/assessments');
const userRoutes = require('./routes/user');
const configurationRoutes = require('./routes/configurations')
const cors = require('cors');

app.use(express.json());
app.use(cors());

//connect to db
mongoose.connect(process.env.MONG_URI)
    .then((res) => {
        console.log("database is connect successfull")
    })
    .catch((err) => { console.log(err) })

    app.use((req, res, next) => {
        console.log(req.path, req.method);
    next();
})

//routes
app.use('/api/assessments',assessmentRoutes);
app.use('/api/configuration', configurationRoutes)
app.use('/api/user',userRoutes);

app.listen(process.env.PORT, () => {
    console.log("listening on port", process.env.PORT)
})