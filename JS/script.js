const { createApp } = Vue;


createApp ({

  data() {
    return {

      tasks: [
        {
          text: 'fare la pizza',
        },
        {
          text: 'disegnare un quadro'
        },
        {
          text: 'portare fuori il cane'
        },
      ],

      newTask: '',
      errorMessage: false
    }
  },

  methods: {
    addTask() {
      if(this.newTask.length < 5) {
        this.errorMessage = true
      } else {
        // aggiungo classe done ad ogni task creata
        this.tasks.unshift({text: this.newTask, done: false});
        // quando inserisco la nuova task si elimina il placeholder
        this.newTask = ''
      }
    },

    removeTask(index) {
      // rimuovo il task con indice specifico nell'array
      this.tasks.splice(index, 1)
    },

    taskDone(index) {
      this.tasks[index].done = !this.tasks[index].done;
      console.log('ciao')
      
     
    }
  }


  
}).mount('#app');


