import { fixPath } from './internal'
import input from './input'

//{component:'##inputFormItem', title: '名字', bindPath: 'data.form.name' }
export default function inputFormItem(option) {
    var { name, title, required, bindPath, component, _power, _visible, ...ext } = option
    name = name || bindPath.replace('.', '&')
    return {
        name: name,
        component: 'Form.Item',
        label: title,
        required: required,
        children: input({ name, bindPath, ...ext }),
        _power,
        _visible
    }
}
