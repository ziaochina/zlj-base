import React, { Component } from 'react'
import classNames from 'classnames'
import Select from 'mk-rc-select'

export default class SelectExComponent extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            dataSource: []
        }
    }

    focusHandler = async () => {
        if (this.props.loadOption) {
            var ret = await this.props.loadOption()
            this.setState({ dataSource: (ret || []) })
        }
        this.props.onFocus && this.props.onFocus()
    }

    blurHandler = () => {
        this.setState({ dataSource: [] })
        this.props.onBlur && this.props.onBlur()
    }

    changeHandler = (v) => {
        var r = v || '', obj

        if (this.state.dataSource) {
            if (this.props.mode === 'multiple') {
                if(r instanceof Array){
                    obj = []
                    r.forEach(o=>obj.push(this.state.dataSource.find(o => o[this.props.idField || 'id'] == o)))
                }
            }
            else {
                obj = this.state.dataSource.find(o => o[this.props.idField || 'id'] == r)
            }
        }

        this.props.onChange && this.props.onChange(obj)
    }

    render() {
        let {
            className, notFoundContent, optionLabelProp,
            mode, combobox, tags, multiple, size,
            idField = 'id',
            codeField,
            displayField = 'name',
            ...other
        } = this.props

        let Icon = MK.getComponent('Icon')

        className = classNames({
            'ant-select': true,
            [`ant-select-lg`]: size === 'large',
            [`ant-select-sm`]: size === 'small',
            [className]: !!className
        })

        const isCombobox = mode === 'combobox' || combobox

        notFoundContent = notFoundContent || '无匹配结果'

        if (isCombobox) {
            notFoundContent = null;
            // children 带 dom 结构时，无法填入输入框
            optionLabelProp = optionLabelProp || 'value'
        }

        const modeConfig = {
            multiple: mode === 'multiple' || multiple,
            tags: mode === 'tags' || tags,
            combobox: isCombobox,
        }

        let suffix = this.props.suffix
        if (this.props.suffix) {
            suffix = React.cloneElement(this.props.suffix, { style: { float: "right" } })
        }

        const inputIcon = (
            <Icon type="down" className={`ant-select-arrow-icon`} />
        );

        const removeIcon = (
            <Icon type="close" className={`ant-select-remove-icon`} />
        );

        var val 
        if(mode === 'multiple' && this.props.value instanceof Array){

        }
        else{
            val = (this.state.dataSource && this.props.value && this.props.value[idField]) || (this.props.value && this.props.value[displayField])
        }

        return (
            <Select
                inputIcon={inputIcon}
                removeIcon={removeIcon}
                {...other}
                {...modeConfig}
                prefixCls='ant-select'
                className={className}
                optionLabelProp='title'
                optionFilterProp='filter'
                notFoundContent={notFoundContent}
                suffix={suffix}
                onFocus={this.focusHandler}
                onBlur={this.blurHandler}
                onChange={this.changeHandler}
                value={(this.state.dataSource && this.props.value && this.props.value[idField]) || (this.props.value && this.props.value[displayField])}
            >
                {
                    this.state.dataSource.map(o => (
                        <Select.Option
                            value={o[idField]}
                            title={o[displayField]}
                            filter={codeField ? o[idField] + o[codeField] + o[displayField] : o[idField] + o[displayField]}
                        >
                            {o[displayField]}
                        </Select.Option>
                    ))
                }

            </Select>
        )
    }
}