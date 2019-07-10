class ProjectLink {
  constructor(project, label, url) {
    this.project = project;
    this.label = label;
    this.url = url;
  }

  async save(db) {
    await db.addLink(this.project, this.label, this.url);
  }

  async delete(db) {
    await db.deleteLink(this.project, this.label);
  }

  static async findByProject(project, db) {
    const links = await db.getAllLinksByProject(project);
    return links.map(link => new ProjectLink({ project: link.project_id }, link.label, link.url));
  }

  static async findByProjectAndLabel(project, db, label) {
    const projectLabelItemFromDb = await db.getProjectLinkByLabel(project, label);
    const projectItem = projectLabelItemFromDb[0];
    return new ProjectLink(
      { project_id: projectItem.project_id },
      projectItem.label,
      projectItem.url,
    );
  }
}

module.exports = ProjectLink;
