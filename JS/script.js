const { createApp } = Vue;


createApp ({

  data() {
    return {

      tasks: [
        'fare la pizza',
        'disegnare un quadro',
        'portare fuori il cane'
      ],

      newTask: '',
      done: false
    }
  },

  methods: {
    addTask() {
      this.tasks.unshift(this.newTask);
      // quando inserisco la nuova task si elimina il placeholder
      this.newTask = ''
    }
  }

  
}).mount('#app');


