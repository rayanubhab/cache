export const database = {

    ['index.html'] : '<html><h1> Hello World! </h1></html>'

};

const get = (key,callback)=>{
  setTimeout(()=>{
      callback(database[key]);
  },3000);
}

export default get;