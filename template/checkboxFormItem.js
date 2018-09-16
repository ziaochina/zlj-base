import checkbox from './checkbox'

export default function checkboxFormItem(option) {
    var { name, title, required, bindPath, disabled, component, _power, _visible, ...ext } = option
    name = name || bindPath.replace('.','&')
    return {
        name: name,
        component: 'Form.Item',
        label: title,
        required: required,
        children: checkbox({name, bindPath, ...ext}),
        _power,
        _visible
    }
}
