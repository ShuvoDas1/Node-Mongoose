const mongoose = require('mongoose');

const dbUri = process.env.Mongo_URI;
// console.log(process.env.username);
// console.log(process.env.Mongo_URI);

// if(!dbUri){
//     console.log('Mongo url not set in env file');
// }
// else{
//     consol.log('Mongo url is set in env file');
// }

mongoose.connect('mongodb+srv://shuvodev:shuvo@1234@cluster0.vktpy.mongodb.net/ACC?retryWrites=true&w=majority',
 {  useNewUrlParser: true,
    useFindAndModify: true,
    useCreateIndex: true,
    useUnifiedTopology: true
},err =>{
    if(err){
        console.log(`failed to connect to mongoose ${err}`);
    }
    else{
        console.log('Connect to the db');
    }
});

module.exports =  mongoose;