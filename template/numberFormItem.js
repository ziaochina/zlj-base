import { fixPath } from './internal'
import number from './number'

export default function numberFormItem(option) {
    var { name, title, required, bindPath, component, _power, _visible, ...ext } = option
    name = name || bindPath.replace('.', '&')
    return {
        name: name,
        component: 'Form.Item',
        label: title,
        required: required,
        children: number({ name, bindPath, ...ext }),
        _power,
        _visible
    }
}
