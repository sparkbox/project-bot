class ProjectLinks {
  add(project, label, link){
    if(typeof label !== 'string' && typeof link !== 'string' ){
      return 'Cannot add item.'
    }
    project.links[label] = link;
  }
}

module.exports = ProjectLinks;