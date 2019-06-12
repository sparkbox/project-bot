const MySQLDriver = require('./dbDriver/mysql');

class ProjectLink {
  constructor(project, label, url) {
    this.project = project;
    this.label = label;
    this.url = url;
    this.driver = new MySQLDriver();
    // i feel this is wrong ^ but I'm still thinking through how to introduce the db
    // do i create an instance within save?
    // I'd prefer to bring it in as a parameter of execute.. bring it out of here altogether
  }

  async save() {
    await this.driver.addLink(this.project.id, this.label, this.url);
  }
}

module.exports = ProjectLink;
