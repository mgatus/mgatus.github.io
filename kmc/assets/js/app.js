new Vue({
    el: '#app',
    data: {
        persons: [],
        errors: []
    },
    created() {
     axios.get(`data/data.json`)
     .then(response => {
       // JSON responses are automatically parsed.
       this.persons = response.data
     })
     .catch(e => {
       this.errors.push(e)
       alert(e);
     })
   }
});
