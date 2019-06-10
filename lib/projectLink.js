class ProjectLink {
  constructor(project, label, url) {
    this.project = project;
    this.label = label;
    this.url = url;
  }

  async save(db) {
    await db.addLink(this.project, this.label, this.url);
  }
}

module.exports = ProjectLink;
