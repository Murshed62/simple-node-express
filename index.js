const express = require("express");
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json())
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("WOW ! I'm excited to learning node and express with nodemon yahoo");
});

const users = [
  { id: 0, name: "ana", email: "ana@gmail.com", phone: "01068549845" },
  { id: 1, name: "Shabana", email: "Shabana@gmail.com", phone: "01668549845" },
  { id: 2, name: "asi", email: "asi@gmail.com", phone: "01768549845" },
  { id: 3, name: "gesi", email: "gesi@gmail.com", phone: "01268549845" },
  { id: 4, name: "hello", email: "hello@gmail.com", phone: "01368549845" },
  { id: 5, name: "by", email: "by@gmail.com", phone: "01468549845" },
  { id: 6, name: "see", email: "see@gmail.com", phone: "01568549845" },
  { id: 7, name: "lola", email: "lola@gmail.com", phone: "01868549845" },
  { id: 8, name: "moina", email: "moina@gmail.com", phone: "01968549845" },
];

app.get("/users", (req, res) => {
  const search = req.query.search;
  // use query parameter
  if(search){
 const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
 res.send(searchResult);
  }
  else{
    res.send(users);
  }  
});

//app.Method
app.post('/users', (req, res) =>{
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);
  console.log('hitting the post', req.body)
  res.json(newUser)
})

// dynamic api
app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users[id]
  res.send(user);
});

app.get('/fruits', (req, res) =>{
  res.send(['mangoes', 'oranges', 'bananas', 'apples'])
})

app.get('/fruits/mangoes/fazli', (req, res) =>{
  res.send('Yummy toku marka');
})

app.listen(port, () => {
  console.log("Listening to port", port);
});
