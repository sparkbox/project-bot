class ProjectLink {
  constructor(project, label, url) {
    this.project = project;
    this.label = label;
    this.url = url;
  }

  async save(db) {
    await db.addLink(this.project, this.label, this.url);
  }

  async listOut(db) {
    return await db.listOutLinks(this.project);

  }
}

module.exports = ProjectLink;
