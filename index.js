const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express() 

app.listen(process.env.PORT || 3000, () => console.log(`Server started at port ${process.env.PORT || 3000}`));