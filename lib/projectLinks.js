class ProjectLinks {
  constructor(channel, dbDriver){
    this.channel = channel;
    this.projectLinksList = {};
  }

  add(label, link){
    
    this.projectLinksList[label] = link;
    
  }
}

module.exports = ProjectLinks;