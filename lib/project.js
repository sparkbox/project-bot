class Project{
  constructor(channel){
    this.channel = channel;
  }

  static findByChannel(channel){
    return new Promise(function(resolve,reject){
      let projectChannel = new Project(channel)
      resolve(projectChannel);
    });
  }
}

module.exports = Project;
