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
    },

    removeTask(index) {
      // rimuovo il task con indice specifico nell'array
      this.tasks.splice(index, 1)
    }
  }

  
}).mount('#app');


