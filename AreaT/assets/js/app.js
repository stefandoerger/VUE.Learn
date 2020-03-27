let app = new Vue({
    el: '#app',

    data: {

        title: 'sdF',
        subtitle: 'SD Film Data Base',
        inputtext: 'Find',
        topFilmTitle: 'Popular this week',
        names: ['True Detective', 'Bob & Dave', 'Halt and Catch Fire'],
        newFilm: '',
        btnTitle: 'Add a film',
        className: 'sdfGold',
        sdfGoldC: false,
        directors: [

            {name: 'Spielberg', oscar: true},
            {name: 'Nolan', oscar: false},
            {name: 'Tarantino', oscar: true},
            {name: 'Guest', oscar: false},
            {name: 'W. Anderson', oscar: false},

        ],

            onceUponaTime: [],

    },

    methods: {

        addFilm() {
            // alert('Add a name');
            this.names.push(this.newFilm);
            this.newFilm = '';
        },

        toggleClass() {
            this.sdfGoldC = true;
        },

        handleAddandToggleClick() {
        /* call two methods. */
        this.addFilm();
        this.toggleClass();
        },

        donateAnOscar (director) {
            director.oscar = true;
            // Sets the individual object value to true (over this in gotNoOscar() below)
        }

    },

    computed: {

        reversedMessage() {
            return this.names[0].split('').reverse().join('');
        },

        gotOscar() {
            return this.directors.filter(director => director.oscar);
        },

        gotNoOscar() {
            return this.directors.filter(director => ! director.oscar);
        }

    },

    mounted() {
        // const apiURL = '';

        axios.get('https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/tt7131622', { "headers": {"x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com", "x-rapidapi-key": "f506e8b5f3msh939f5126945ac27p103d2ajsn0011d85c92ab"}}).then(response => this.onceUponaTime = response.data);

        // axios.get('https://esi.evetech.net/latest/universe/bloodlines/?datasource=tranquility&language=en-us').then(response => this.bloodlines = response.data);
        // axios.get('https://esi.evetech.net/latest/universe/races/?datasource=tranquility&language=en-us').then(response => this.races = response.data);
    }

});