import { fixPath } from './internal'

//{component:'##input', bindPath: 'data.form.name' }
export default function input(option) {
    var { name, bindPath, disabled, component, ...ext } = option
    name = name || bindPath.replace('.', '&')

    return {
        name: name,
        component: 'Input',
        value: `{{${fixPath(bindPath)}}}`,
        onChange: disabled ? undefined : `{{(e)=>$sf('${bindPath}',e.target.value)}}`,
        disabled,
        ...ext
    }
}
