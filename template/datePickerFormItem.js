import { fixPath } from './internal'
import datePicker from './datePicker'

export default function datePickerFormItem(option) {
    var { name, title, required, bindPath, component, _power, _visible, ...ext } = option
    name = name || bindPath.replace('.', '&')
    return {
        name: name,
        component: 'Form.Item',
        label: title,
        required: required,
        children: datePicker({ name, bindPath, ...ext }),
        _visible,
        _power
    }
}