class ProjectLink {
  constructor(project, label, url) {
    this.project = project;
    this.label = label;
    this.url = url;
  }

  async save(db) {
    await db.addLink(this.project, this.label, this.url);
  }

  static async findByProject(project, db) {
    const links = await db.getAllLinksByProject(project);
    return links.map(link => new ProjectLink({ project: link.project_id }, link.label, link.url));
  }
}

module.exports = ProjectLink;
