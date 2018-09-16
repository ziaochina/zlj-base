import pkgJson from './package.json'
import { actionMixin, componentFactory, templateFactory, actionFactory } from 'mk-meta-engine'
import * as components from './component'
import * as templates from './template'
import * as actions from './action'
import './style/index.less'

//注册组件
Object.keys(components).forEach(key => {
    componentFactory.registerComponent(key, components[key])
})

//注册模板组件
Object.keys(templates).forEach(key => {
    templateFactory.registerTemplate(key, templates[key])
})

//注册公共Action
Object.keys(actions).forEach(key => {
    actionFactory.registerAction(key, actions[key])
})


const meta = {
    name: 'root',
    component: '::div',
    _visible: 'false'
}
const state = { data: {} }

@actionMixin()
class action { }

export default {
    name: pkgJson.name,
    version: pkgJson.version,
    description: pkgJson.description,
    meta,
    state,
    action
}