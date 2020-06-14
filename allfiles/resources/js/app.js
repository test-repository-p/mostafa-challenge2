require('./bootstrap');
window.Vue = require('vue');


var  attribute = Vue.component('Example', require('./components/AttributeComponent.vue').default);


new Vue({
    el: '#app',
    components: {
        'attribute-component': attribute
    }
});



// Vue.component('my-compo', {
//     template: '<span>Hello</span>',
//     data: function() {
//         return {}
//     }
// })
// new Vue({
//     el: '#app',
//     data: {
//         message: 'Hello Vue.js!'
//     }
// })