var WZPlugin = {}

WZPlugin.install = function (Vue, options) {
    // 1. 添加全局方法或属性
    Vue.myGlobalMethod = function () {
        // 逻辑...
    }
    // 2. 添加全局自定义指令
        //--设置背景颜色
    Vue.directive('bg', {
        bind: function (el, binding, vnode) {
            el.style.backgroundColor = binding.expression
        }
    })

    Vue.directive('showvalue', {
        bind: function (el, binding, vnode) {
            el.innerHTML =
                'value:' + binding.value
        }
    })
    // 3. 注入组件
    Vue.mixin({
        created: function () {
            // 逻辑...
        }
    })
    // 4. 添加实例方法
    Vue.prototype.$myMethod = function (options) {
        // 逻辑...
    }
}

export default WZPlugin.install

// export defa