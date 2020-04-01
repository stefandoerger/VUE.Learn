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