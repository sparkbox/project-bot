class ProjectLink {
  constructor(project, label, url) {
    this.project = project;
    this.label = label;
    this.url = url;
  }

  async save(db) {
    await db.addLink(this.project, this.label, this.url);
  }

  async list(db) {
    return db.listLink(this.project);
  }

}

module.exports = ProjectLink;
