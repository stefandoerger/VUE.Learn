let app = new Vue({
    el: '#app',

    data: {

        title: 'sdF',
        subtitle: 'SD Film Data Base',
        inputtext: 'Find',
        topFilmTitle: 'Popular this week',
        names: ['Once Upon a Time ... in Hollywood', 'True Detective', 'Joker', 'Halt and Catch Fire'],
        newFilm: '',
        className: 'sdfGold',
        sdfGoldC: false,

        onceUponaTime: [],
        authorNameSearchString: "",
        photoFeed: null
    },

    methods: {

        toggleClass() {
            this.sdfGoldC = true;
        },

        handleAddandToggleClick() {
        /* call two methods. */
        this.addFilm();
        this.toggleClass();
        },

    },

    computed: {



    },

    mounted() {
        // const apiURL = '';

        axios.get('https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/tt7131622', { "headers": {"x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com", "x-rapidapi-key": "f506e8b5f3msh939f5126945ac27p103d2ajsn0011d85c92ab"}}).then(response => this.onceUponaTime = response.data);
    }

});