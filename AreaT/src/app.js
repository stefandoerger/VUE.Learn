let app = new Vue({
    el: '#app',

    data: {

        title: 'sdF',
        subtitle: 'SD Film Data Base',
        className: 'sdfGold',
        inputText: '',
        apiSearchTitel: '',
        onceUponaTime: [],
        // ID example: tt0475784
        // ID example 2: tt7286456
    },

    props: {
        value: {
          type: String
        }
      },

    methods: {
        searchMovie() {
            let apiSearchTitle = this.inputText;
            this.apiSearchTitle = this.inputText;
            this.get()
        },

        // updateValue (value) {
        //  this.$emit('input', value)
        // },

        get() {
            if (this.apiSearchTitle == '') return;

<<<<<<< HEAD
            const apiUrl = 'https://imdb-internet-movie-database-unofficial.p.rapidapi.com/';
            let apiSearchFilm = 'film/';

            //let apiSearchTitle = this.movie;
            let url = apiUrl + apiSearchFilm + this.apiSearchTitle;
=======
        filteredPhotoFeed: function () {

            let photos = this.photoFeed;
            let authorNameSearchString = this.authorNameSearchString;

            if(!authorNameSearchString){
              return photos;
            }

            searchString = authorNameSearchString.trim().toLowerCase();

            photos = photos.filter(function(item){
              if(item.title.toLowerCase().indexOf(authorNameSearchString) !== -1){
                return item;
              }
            })

            return photos;
          }
>>>>>>> 0a00498c05d163fd9e1bf25493b6972315d70c8a

            axios.get( url, {
                "headers": {
                "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com",
                "x-rapidapi-key": "f506e8b5f3msh939f5126945ac27p103d2ajsn0011d85c92ab"
                }
            }).then(response => {
                this.onceUponaTime = response.data
            });
        }
    },

    mounted() {
<<<<<<< HEAD
        this.get();
=======
        axios.get('https://imdb-internet-movie-database-unofficial.p.rapidapi.com/', {
            "headers": {
                "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com",
                "x-rapidapi-key": "f506e8b5f3msh939f5126945ac27p103d2ajsn0011d85c92ab"
            },
            params: {
                film: authorNameSearchString
            }
            // Film ID for search: tt7131622
        }).then(response => {
            this.photoFeed = response.data
        });
>>>>>>> 0a00498c05d163fd9e1bf25493b6972315d70c8a
    }

});