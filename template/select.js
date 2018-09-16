import { fixPath } from './internal'

//{component:'##select', bindPath: 'data.form.aa', loadOption:'{{$loadOption}}' }
export default function select(option) {
    var { name, bindPath, component, ...ext } = option
    name = name || bindPath.replace('.', '&')

    return {
        name: name,
        component: 'SelectEx',
        showSearch: true,
        dropdownStyle: { maxHeight: 400, overflow: 'auto' },
        notFoundContent: ' ',
        allowClear: true,
        value: `{{${fixPath(bindPath)}}}`,
        onChange: `{{(v)=>$sf('${bindPath}',v ? $fromJS(v, null) : v)}}`,
        ...ext
    }
}
