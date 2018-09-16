import { fixPath } from './internal'

//{component:'##number', bindPath: 'data.form.count' }
export default function input(option) {
    var { name, bindPath, disabled, component, ...ext } = option
    name = name || bindPath.replace('.', '&')

    return {
        name: name,
        component: 'InputNumberEx',
        value: `{{${fixPath(bindPath)}}}`,
        onChange: disabled ? undefined : `{{(v)=>$sf('${bindPath}',v)}}`,
        disabled,
        ...ext
    }
}
