let app = new Vue({
    el: '#app',

    data: {

        title: 'sdF',
        subtitle: 'SD Film Data Base',
        className: 'sdfGold',
        exampleInput: 'tt0475784',
        titleState: false,
        inputText: '',
        apiSearchID: '',
        apiSearchTitle: '',
        ExampleSearchInput: 'The Lord of the Rings:',
        apiFilm: [],
        apiSearch: [],
        urlID: '<%= ImdBTitleVar %>',
        // ID example: tt0475784
        // ID example 2: tt7286456
    },

    props: {
        // value: {
        //   type: String
        // }
      },

    methods: {
        searchMovieTitle() {
            // let apiSearchTitle = this.inputText;
            this.getTitle(this.apiSearchTitle);

            // Title in Navbar changes from Input to film title
            this.titleState = true
        },
        ExampleSearchMovieTitle() {
            // let apiSearchTitle = this.inputText;
            this.getTitle(this.ExampleSearchInput);

            // Title in Navbar changes from Input to film title
            this.titleState = true
        },

        getTitle(apiSearchTitle) {
            // let apiSearchTitle = this.apiSearchTitle;
            // if (this.apiSearchTitle == '') return;

            const apiUrl = 'https://imdb-internet-movie-database-unofficial.p.rapidapi.com/';
            let apiSearchFilm = 'search/';

            //let apiSearchTitle = this.movie;
            let url = apiUrl + apiSearchFilm + apiSearchTitle;

            axios.get( url, {
                "headers": {
                "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com",
                "x-rapidapi-key": "f506e8b5f3msh939f5126945ac27p103d2ajsn0011d85c92ab"
                }
            }).then(response => {
                this.apiSearch = response.data
            });
        }

        // get(apiSearchTitle) {
        //     // let apiSearchTitle = this.apiSearchTitle;
        //     // if (this.apiSearchTitle == '') return;

        //     const apiUrl = 'https://imdb-internet-movie-database-unofficial.p.rapidapi.com/';
        //     let apiSearchFilm = 'film/';

        //     //let apiSearchTitle = this.movie;
        //     let url = apiUrl + apiSearchFilm + apiSearchTitle;

        //     axios.get( url, {
        //         "headers": {
        //         "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com",
        //         "x-rapidapi-key": "f506e8b5f3msh939f5126945ac27p103d2ajsn0011d85c92ab"
        //         }
        //     }).then(response => {
        //         this.apiFilm = response.data
        //     });
        // }
    },

    mounted() {
        // this.get();
    }

});