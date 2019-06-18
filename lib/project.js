class Project {
  constructor(channel, dbDriver) {
    this.channel_id = channel;
    this.dbDriver = dbDriver;
  }

  static findByChannel(channel, dbDriver) {
    return new Promise(((resolve) => {
      const projectChannel = new Project(channel, dbDriver);
      resolve(projectChannel);
    }));
  }
}

module.exports = Project;
