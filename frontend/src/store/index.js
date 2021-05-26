import { createStore } from 'vuex'
const server = 'http://localhost:8000/api';
const axios = require('axios').default;

export default createStore({

  state: {
    user: {}
  },
  mutations: {
    // setUser(state, value) {
    //   state.user = {...value}
    // }
  },
  actions: {
    async addUser(context, data) {
      try {
        const response = await axios.post(`${server}/users`, data);
        
        if (response.ok) console.log('user added');
        
      } catch(error) {
        console.log(error)
      } finally {
        // console.log('finalmente');
      }
    },
    // async getUsers() {
    //   let users = await axios.get(`${server}/users`);
    //   this.user.push(users);
    // },
    // async setUser(data) {
    //   await axios.patch(`${server}/users/${data.id}`, data);
    // },
    // async removeUser(id) {
    //   await axios.delete(`${server}/users/${id}`)
    //   .then(this.users = this.users.filter(user => {
    //     return (user.id != id);
    //   }))
    //   .catch(error => console.log(error));
    // }
  },
  modules: {
  }
})
