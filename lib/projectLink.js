const MySQLDriver = require('./dbDriver/mysql');

class ProjectLink {
  constructor(project, label, url) {
    this.project = project;
    this.label = label;
    this.url = url;
  }

  save(db) {
    db.addLink(this.project, this.label, this.url);
  }
}

const project = new ProjectLink({ id: '11111' }, 'woopieeee', 'its-saving.com');
console.log(project);
const driver = new MySQLDriver(project);
console.log(driver);
project.save(driver);

module.exports = ProjectLink;
