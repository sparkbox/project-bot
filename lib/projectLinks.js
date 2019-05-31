class ProjectLinks {
  constructor(channel, dbDriver){
    this.channel = channel;
    this.projectLinks = {};
  }

  add(label, link){
    this.projectLinks[label] = link;    
  }
}

module.exports = ProjectLinks;