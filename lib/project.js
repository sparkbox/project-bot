const ProjectLinks = require('./projectLinks');

class Project{
  constructor(channel){
    this.channel_id = channel;
    this.links = new ProjectLinks();
  }

  static  findByChannel(channel, dbDriver){
    return new Promise(function(resolve,reject){
      let projectChannel = new Project(channel)
      resolve(projectChannel);
    });

  }

}

module.exports = Project;
