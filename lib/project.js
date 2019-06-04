const ProjectLinks = require('./projectLinks');

class Project {
  constructor(channel){
    this.channel_id = channel;
    this.links = {};
  }

  static findByChannel(channel){
    return new Promise(function(resolve,reject){
      let projectChannel = new Project(channel)
      resolve(projectChannel);
    });
  }

}

module.exports = Project;
