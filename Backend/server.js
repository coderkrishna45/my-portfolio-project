// 1. Import the Express package
import express from 'express';

import cors from 'cors';

// 2. Create our Express app
const app = express();

app.use(cors());
// 3. Define a "port" for our server to listen on
const port = 3000;
//Before our server can understand the data that the form sends, we need to add a "translator." In Express, this is called middleware. It's just a couple of lines of code that helps parse the incoming information into a format we can easily use.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/submit-form',(req,res)=>{
    console.log('form data received:');
    console.log(req.body);
    res.send("Thank You . We have received your message!.");
});

// 4. Tell the app to start listening for requests on our chosen port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
