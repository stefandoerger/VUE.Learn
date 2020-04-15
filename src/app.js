Vue.component('tabs', {
    props: [
        'title',
        'body'
    ],

    template: `

        <div>

            <ul class="nav nav-pills">
                <li v-for="tab in tabs" class="nav-item">
                    <a class="nav-link" :class="{ 'active': tab.isActive }" :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
                </li>
            </ul>

            <div class="tabs-details">

                <slot></slot>

            </div>

        </div>

    `,

    data() {

        return { tabs: [] }

    },

    created() {
        this.tabs = this.$children;
    },

    methods: {
        selectTab(selectedTab) {
            this.tabs.forEach(tab => {
                tab.isActive = (tab.name == selectedTab.name);
            });
        }
    }

});

Vue.component('tab', {

    template: `

        <div v-show="isActive"><slot></slot></div>

    `,

    props: {
        name: {required: true},
        selected: {default: false}
    },

    data() {

        return {
            isActive: false
        };

    },

    computed: {
        href() {
            return '#' + this.name.toLowerCase().replace(/ /g, '-');
        }
    },

    mounted() {
        this.isActive = this.selected;
    }

});

Vue.component('message', {
    props: [
        'title',
        'body'
    ],

    template: `

    <div v-show="isVisible">

        <div>
            <button @click="isVisible = false"> x </button>
            <h3> {{ title }} </h3>
        </div>


        <div>
            <p> {{ body }} </p>
            <slot></slot>
        </div>

    </div>

    `,

    data() {
        return {
            isVisible: true
        }
    },

});

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
        imdBTitle: '',
        ExampleSearchInput: 'The Lord of the Rings:',
        apiFilm: [],
        apiSearch: [],
        urlID: '',

        showModal: false
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
        },

        get(imdBTitle) {
            // let imdBTitle = this.imdBTitle;

            const apiUrl = 'https://imdb-internet-movie-database-unofficial.p.rapidapi.com/';
            let apiSearchFilm = 'film/';

            //let apiSearchTitle = this.movie;
            let url = apiUrl + apiSearchFilm + imdBTitle;

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
        this.get();
    }

});