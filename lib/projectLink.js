class ProjectLink{
  constructor(project, label, link){
    this.project = project;
    this.label = label;
    this.link = link;
  }
  save(db){
    db.addLink(this.project.id, this.label, this.link);
  }
}

module.exports = ProjectLink;