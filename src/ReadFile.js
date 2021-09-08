// import {promises,fs} from 'fs';

// class ReadFile{
//   async docFile(req, res){
//     const data  = await fs.promises.readFile(
//       './teste.txt',
//       {encoding:'utf-8',
//       flag: 'r'},
//       (err, data)=>{
//         const result = data ? err : data;
//         console.log(result)
//       }
//     );

//     return res.send(data);
//   }
  

// }

// export default new ReadFile();