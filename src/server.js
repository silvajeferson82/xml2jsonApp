import express from "express";
import routes from './routes';
import xml2js from 'xml2js';
import fs from 'fs'


const app = express();

app.use(express.json());
app.use(routes);


const parser = new xml2js.Parser();

const xmlData = fs.readFile('sitemap.xml',
{ 
  trim: true,
},(err, result)=>{
  parser.parseString(result,(err, sucess)=>{
    if(err) return console.error(err);
    console.dir(JSON.stringify({sucess}));
    // console.log('Done');
    console.log({sucess});
  })
  // console.log('XMLFile',result);
});


app.listen(3031, () => {
  return console.log('Servidor rodando em 3031.')
})
