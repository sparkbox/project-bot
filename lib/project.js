class Project {
  constructor(channel) {
    this.channel_id = channel;
  }

  static findByChannel(channel) {
    return new Promise(((resolve) => {
      const projectChannel = new Project(channel);
      resolve(projectChannel);
    }));
  }
}

module.exports = Project;
