import Ember from 'ember';

export default Ember.Component.extend({
  newServer: {
    name: null,
  },

  actions: {
    createServer() {
      let data = this.get('newServer');

      if (this.get('data') !== null)

      {
        data.server = this.get('server');
        this.sendAction('createServer', data);
        console.log(this);
      }
    }
  }
});