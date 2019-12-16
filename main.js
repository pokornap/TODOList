var app = new Vue({
    el: '#app',
    data: {
        product: "Prequel Memes",
        ToDo: "Things to do:",
        tasks: null
    },
    mounted () {
        axios
          .post('https://api.coindesk.com/v1/bpi/currentprice.json')
          .then(response => (this.tasks = response))
      }
})