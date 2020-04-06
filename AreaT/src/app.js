let app = new Vue({
    el: '#app',

    data: {

        title: 'sdF',
        subtitle: 'SD Film Data Base',
        className: 'sdfGold',
        exampleInput: 'tt0475784',
        titleState: false,
        inputText: '',
        apiSearchTitel: '',
        apiFilm: [],
        // ID example: tt0475784
        // ID example 2: tt7286456
    },

    props: {
        // value: {
        //   type: String
        // }
      },

    methods: {
        searchMovie() {
            let apiSearchTitle = this.inputText;
            this.apiSearchTitle = this.inputText;
            this.get();


            this.titleState = true
        },

        exampleMovie() {
            let apiSearchTitle = this.exampleInput;
            this.apiSearchTitle = this.exampleInput;
            this.get();


            this.titleState = true
        },

        // updateValue (value) {
        //  this.$emit('input', value)
        // },

        get() {
            if (this.apiSearchTitle == '') return;

            const apiUrl = 'https://imdb-internet-movie-database-unofficial.p.rapidapi.com/';
            let apiSearchFilm = 'film/';

            //let apiSearchTitle = this.movie;
            let url = apiUrl + apiSearchFilm + this.apiSearchTitle;

            axios.get( url, {
                "headers": {
                "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com",
                "x-rapidapi-key": "f506e8b5f3msh939f5126945ac27p103d2ajsn0011d85c92ab"
                }
            }).then(response => {
                this.apiFilm = response.data
            });
        }
    },

    mounted() {
        // this.get();
    }

});