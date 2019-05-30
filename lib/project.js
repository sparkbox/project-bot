const ProjectLinks = require('./projectLinks');

class Project{
  constructor(channel, dbDriver){
    this.channel_id = channel;
    this.dbDriver = dbDriver;
    this.links = new ProjectLinks(channel, dbDriver);
  }

  static findByChannel(channel, dbDriver){
    return new Promise(function(resolve,reject){
      let projectChannel = new Project(channel)
      resolve(projectChannel);
    });
  }

}

module.exports = Project;
