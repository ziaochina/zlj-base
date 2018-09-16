import { fixPath } from './internal'
import monthPicker from './monthPicker'

export default function monthPickerFormItem(option) {
    var { name, title, required, bindPath, component, _power, _visible, ...ext } = option
    name = name || bindPath.replace('.','&')
    return {
        name: name,
        component: 'Form.Item',
        label: title,
        required: required,
        children: monthPicker({name, bindPath, ...ext}),
        _power,
        _visible
    }
}