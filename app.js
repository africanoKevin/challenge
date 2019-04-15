//jshint esversion:6

const express= require('express');
const bodyParser= require('body-parser');
const date= require(__dirname + '/date.js')

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs')
app.use(express.static('public'))

let items=['code', 'listen to hilsong worship', 'Eat food'];
let workItems=[];


app.get('/', function(req, res){
  let kindOfDay=date();


  res.render('list', {listTitle:kindOfDay, item:items})
});

app.post('/', function(req, res){
  let newItem= req.body.newItem;
  //console.log(req.body)

  if(req.body.list==='work'){
    workItems.push(newItem)
    res.redirect('/work')
  }else{
    //console.log(newItem);
    items.push(newItem);
    res.redirect('/')
  }
});


app.get('/work', function(req, res){
  let workList='work To do'
  res.render('list', {listTitle:workList, item:workItems })
});

app.get('/about', function(req, res){
  res.render('about')
})

app.listen(3000, function(){
  console.log('server is running on port 3000')
})
