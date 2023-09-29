const { createApp } = Vue;


createApp ({

  data() {
    return {
      tasks: [
        'fare la pizza',
        'disegnare un quadro',
        'portare fuori il cane'
      ]
    }
  },

  methods: {
    addTask() {
      
    }
  }

  
}).mount('#app');


