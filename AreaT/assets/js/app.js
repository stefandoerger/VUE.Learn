Vue.component('actor-list', {

    props: ['actorTitle'],

    template: `
        <div>
            <h3> {{ actorTitle }} (via Components) </h3>
            <ul>
                <actor v-for="actor in actors"> {{ actor.actor }} </actor>
            </ul>
        </div>
        `,

    data() {
        return {
            actors: [
                { actor: 'Philip Seymour Hoffman', oscar: true },
                { actor: 'Joaquin Rafael Phoenix', oscar: true },
                { actor: 'Robert John Odenkirk', oscar: false }
            ]
        };
    }

});

Vue.component('actor', {

    template:
        '<li><slot></slot></li>',

});


Vue.component('filmoftheweek', {
    template: `
        <div class="row">
            <div class="col-sm-6">
                <img v-bind:src="film.poster" class="img-fluid" alt="Responsive image">
            </div>
            <div class="col-sm-6">
                <div class="table-responsive">
                    <table class="table table-striped table-sm">
                        <thead>
                            <tr>
                                <th>Actor Name</th>
                                <th class="character">Role in Film</th>
                            </tr>
                        </thead>

                        <tbody v-for="cast in film.cast">
                            <tr>
                                <td>{{ cast.actor }}</td>
                                <td class="character">{{ cast.character }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        `,

    data() {
        return {
            film: []
        }
    },

    mounted() {
        axios.get('https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/tt7131622', {
            "headers": {
                "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com",
                "x-rapidapi-key": "f506e8b5f3msh939f5126945ac27p103d2ajsn0011d85c92ab"
            }
        }).then(response => {
            this.film = response.data
        });
    }
});

let app = new Vue({
    el: '#app',

    data: {

        title: 'sdF',
        subtitle: 'SD Film Data Base',
        inputtext: 'Find',
        topFilmTitle: 'Popular this week',
        names: ['Once Upon a Time ... in Hollywood', 'True Detective', 'Joker', 'Halt and Catch Fire'],
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
            // details: [],

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