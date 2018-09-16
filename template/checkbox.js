import { fixPath } from './internal'

//{component:'##checkbox', bindPath: 'data.form.name' }
export default function checkbox(option) {
    var { name, bindPath, disabled, component, ...ext } = option
    name = name || bindPath.replace('.', '&')

    return {
        name: name,
        component: 'Checkbox',
        checked: `{{${fixPath(bindPath)}}}`,
        onChange: disabled ? undefined : `{{(e)=>$sf('${bindPath}',e.target.checked)}}`,
        disabled,
        ...ext
    }
}
