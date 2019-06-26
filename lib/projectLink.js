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
    const links = await db.listOutLinks(project);
    const linksList = [];
    links.forEach((link) => {
      const linkInstances = new ProjectLink({ project: link.project_id }, link.label, link.url);
      linksList.push(linkInstances);
    });
    return linksList;
  }
}

module.exports = ProjectLink;
