import { fixPath } from './internal'

export default function treeSelectFormItem(option) {
    var {
        name, title, required, bindPath, disabled = false,
        dsPath, idField = 'id', codeField = 'code', displayField = 'name',
        loopTreeSelectChildren = 'loopTreeSelectChildren', onFocus,
        treeFind = 'treeFind', childrenProp = 'children',
        component, type, ...ext
    } = option

    name = name || bindPath.replace('.','&')

    var fixIdField = fixPath(`${bindPath}.${idField}`),
        fixCodeField = fixPath(`${bindPath}.${codeField}`),
        fixDisplayField = fixPath(`${bindPath}.${displayField}`)

    var ret = {
        name: name,
        component: 'Form.Item',
        label: title,
        required: required,
        children: [{
            name: name,
            component: 'TreeSelect',
            treeDefaultExpandAll: true,
            allowClear:true,
            dropdownStyle: { maxHeight: 400, overflow: 'auto' },
            onChange: `{{(v)=>{
                $sf('${bindPath}', $fromJS($${treeFind}(${dsPath},v, '${idField}', '${childrenProp}'), null) || {id:null})
            }}}`,
            onFocus: onFocus ? `{{$${onFocus}(data)}}` : undefined,
            value: `{{{
                return (${dsPath} && ${fixIdField}) || ( (${fixCodeField}) && ('(' + (${fixCodeField}) + ')' + (${fixDisplayField}) )) || ''
            }}}`,
            children: `{{$${loopTreeSelectChildren}(${dsPath}, '${childrenProp}', '${idField}', '${displayField}', '${codeField}')}}`,
            disabled,
            ...ext
        }],
    }
    return ret
}
