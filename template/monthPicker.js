import { fixPath } from './internal'

//{component:'##monthPicker', bindPath: 'data.form.date' }
export default function monthPicker(option) {
    var { name, bindPath, disabled, component, ...ext } = option
    name = name || bindPath.replace('.', '&')
    return {
        name: name,
        component: 'DatePicker.MonthPicker',
        value: `{{${fixPath(bindPath)}}}`,
        onChange: disabled ? undefined : `{{(v)=>$sf('${bindPath}',v)}}`,
        disabled,
        ...ext
    }
}
