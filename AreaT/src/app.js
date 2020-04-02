let app = new Vue({
    el: '#app',

    data: {

        title: 'sdF',
        subtitle: 'SD Film Data Base',
        className: 'sdfGold',
        inputText: '',

        onceUponaTime: [],
    },

    props: {
        value: {
          type: String
        }
      },

    methods: {

        // searchMovie() {
        //     let apiSearchTitle = this.inputText;
        //     return apiSearchTitle;
        // }

        updateValue (value) {
            this.$emit('input', value)
          }

    },

    // computed: {



    // },

    mounted() {

        const apiUrl = 'https://imdb-internet-movie-database-unofficial.p.rapidapi.com/';
        let apiSearchFilm = 'film/';
        let apiSearchTitle = this.inputText;
        let url = apiUrl + apiSearchFilm + apiSearchTitle;

        axios.get( url, {
            "headers": {
                "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com",
                "x-rapidapi-key": "f506e8b5f3msh939f5126945ac27p103d2ajsn0011d85c92ab"
            }
        }).then(response => {
            this.onceUponaTime = response.data
        });
    }

});