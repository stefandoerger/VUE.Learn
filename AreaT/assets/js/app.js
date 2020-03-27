let app = new Vue({
    el: '#app',

    data: {

        title: 'sdF',
        subtitle: 'SD Film Data Base',
        inputtext: 'Search your Shit ...',
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

            bloodlines: [],
            races: [],

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

        axios.get('https://movie-database-imdb-alternative.p.rapidapi.com/').then(response => this.bloodlines = response.data);

        // axios.get('https://esi.evetech.net/latest/universe/bloodlines/?datasource=tranquility&language=en-us').then(response => this.bloodlines = response.data);
        // axios.get('https://esi.evetech.net/latest/universe/races/?datasource=tranquility&language=en-us').then(response => this.races = response.data);
    }

});