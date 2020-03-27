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


// Vue.component('film-cast', {

//     template: `
//         <div>

//             <div class="table-responsive" v-if="onceUponaTime.length">
//                 <table class="table table-striped table-sm">
//                     <thead>
//                         <tr>
//                             <th>Actor Name</th>
//                             <th class="character">Role in Film</th>
//                         </tr>
//                     </thead>

//                     <tbody v-for="cast in onceUponaTime.cast">
//                         <tr>
//                             <td>{{ cast.actor }}</td>
//                             <td class="character">{{ cast.character }}</td>
//                         </tr>
//                     </tbody>

//                 </table>
//             </div>

//         </div>
//         `,

// });