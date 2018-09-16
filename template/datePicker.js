import { fixPath } from './internal'

//{component:'##datePicker', bindPath: 'data.form.date' }
export default function datePicker(option) {
    var { name, bindPath, disabled, component,format, ...ext } = option
    name = name || bindPath.replace('.', '&')
    format = format || 'YYYY-MM-DD'
    return {
        name: name,
        component: 'DatePicker',
        value: `{{$stringToMoment(${fixPath(bindPath)})}}`,
        onChange: disabled ? undefined : `{{(v)=>$sf('${bindPath}', $momentToString(v,'${format}'))}}`,
        disabled,
        format,
        ...ext
    }
}
