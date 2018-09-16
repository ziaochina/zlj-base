import React from 'react'
import classNames from 'classnames'

export default function FormExComponent(props) {
	let className = classNames({
		'form-ex': true,
		'form-ex-horizontal': props.layout == 'horizontal',
		'form-ex-vertical': props.layout == 'vertical',
		[props.className]: !!props.className
	})

	return (
		<div
			{...props}
			className={className}
		/>
	)
}