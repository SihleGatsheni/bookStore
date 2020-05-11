const express = require('express');
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.static('public'));
const bookRoutes = require('./routes/book');


app.set('view engine', 'ejs');
app.use('/',bookRoutes);



app.listen(PORT, () =>{
	console.log('server running on PORT: ',PORT);
})