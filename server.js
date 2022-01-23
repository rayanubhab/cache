import express,{urlencoded} from 'express';
import GetfromCache from './database.js';
import { database } from './database.js';
const app = express();
const cache = {}; //define a cache
app.use(express.json({extended:"true"})); //Body parser
app.use(express.urlencoded({extended:"true"})); 

//without cache

app.get('/nocache',(req,res)=>{
   GetfromCache('index.html',page=>{
       res.send(page);
   });
}
);

//with cache
app.get('/cache',(req,res)=>{
  if('index.html' in cache){
        res.send(cache['index.html']);
        return;
  }

  GetfromCache('index.html',page=>{
    cache['index.html'] = page;
    res.send(page);
});

});


app.listen(3000,()=>{

    console.log('listening on port 3000!');
}
);