class LVue {
    constructor(options){
        this.$options = options

        this.$data = options.data

        this.observe(this.$data)

        new Watcher(this , 'this.$data.foo')

        this.data.foo

        new Watcher(this, 'bar')

        this.data.bar.mua
    }

    observe(value){
        if (!value || typeof value !== 'object') {
            return
        }
        Object.keys(value).forEach(key => {
            this.defineReactive(value, key, value[key])
        })
    }

    defineReactive(obj, key, val){
        this.observe(val)

        const dep = new Dep()


        Object.defineProperty(obj, key, {
            get(){
                Dep.target && dep.addDep(Dep.target)
                return val
            },
            set(newValue){
                if (newValue !== val) {
                    val = newValue
                    dep.notify()
                    
                }
            }
        })
    }
}


class Dep {
    constructor(){
        this.deps = []
    }

    addDep(dep){
        this.deps.push(dep)
    }

    notify() {
        this.deps.forEach(dep => dep.update())
    }
}


class Watcher {
    constructor(vm, key) {
        Dep.target = this
        this.vm = vm
        this.key = key
    }

    update() {
        console.log(this.key + "更新了");
        
    }
}