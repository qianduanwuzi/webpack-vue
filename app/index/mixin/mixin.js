var myMixin = {
    data() {
        return {
            mx: 'mixnwenben'
        }
    },
    created: function () {
        this.hello()
    },
    methods: {
        hello: function () {
            console.log('hello from mixin!')
        }
    }
}

export default myMixin