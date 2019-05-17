class Add {
  constructor(){
    this.success = false;
  }

  validator(){}

  async execute(arg, project, db = {store(){}}){ 
    this.success = false;
    project.links[arg[0]] = arg[1];
    try {
      this.success = true;
      await db.store(project)
    } catch(err) {
        this.success = false;
        console.log(err);
    }
  }
}
   

module.exports = { Add };

//   response(){
//     if(this.success){
//           // returns an object
//     } else {
//           // returns an object 
//     }
//   } 