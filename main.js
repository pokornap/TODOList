var app = new Vue({
    el: '#app',
    data: {
        product: "Prequel Memes",
        ToDo: "Things to do:",
        tasks: null
    },
    mounted () {
        axios
          .get('localhost:3000/todolist.json')
          .then(response => (this.tasks = response.data))
      }
})