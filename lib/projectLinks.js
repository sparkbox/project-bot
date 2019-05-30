class ProjectLinks {
  constructor(){
    this.projectLinks = {}
  }

  add(label, link){
    this.projectLinks[label] = link;     
    return this.projectLinks
  }
}

module.exports = ProjectLinks;