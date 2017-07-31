var app = new Vue({
  el: '#declarative-rendering',
  data: {
    message: 'Hello Vue!'
  }
})

var app2 = new Vue({
  el: '#directive',
  data: {
    message: 'You loaded this page on ' + new Date()
  }
})

var app3 = new Vue({
  el: '#conditional',
  data: {
    seen: true
  }
})

var app4 = new Vue({
  el: '#loop',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  }
})

var app5 = new Vue({
  el: '#event-listener',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})

var app6 = new Vue({
  el: '#two-way-binding',
  data: {
    message: 'Hello Vue!'
  }
})

// Define a new component called todo-item
Vue.component('todo-item', {
  // The todo-item component accepts a
  // "prop", which is like a custom attribute.
  // This prop is called todo.
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
  el: '#components',
  data: {
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat' }
    ]
  }
})
