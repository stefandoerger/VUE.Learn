Vue.component('actor-list', {

    props: ['actorTitle'],

    template: `
        <div>
            <h3> {{ actorTitle }} (via Components) </h3>
            <actor v-for="actor in actors"> {{ actor.actor }} </actor>
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


new Vue({

    el: '#app'

});