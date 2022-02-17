class Notifications {

  constructor() { }

  async all() {
    return await "All"
  }

  async findById() {
    return await "findById"
  }

  async create() {
    return await "create"
  }

  async update() {
    return await "update"
  }

  async delete() {
    return await "delete"
  }

}

module.exports = new Notifications()