class ProjectLinks {
  constructor(channel, dbDriver){
    this.channel = channel;
    this.projectLinksList = {};
  }

  add(label, link){
    if(typeof label !== 'string' && typeof link !== 'string' ){
      return 'Cannot add item.'
    }
    this.projectLinksList[label] = link;
  }
}

module.exports = ProjectLinks;