import React, { Component } from 'react'

export default function confirm(props) {
	return new Promise((resolve, reject) => {
		let handleOk = () => {
			resolve(true)
		}

		let handleCancel = () => {
			resolve(false)
		}

		props.onOk = handleOk
		props.onCancel = handleCancel

		props.cancelText = props.cancelText || '取消'
		props.okText = props.okText || '确定'

		var Modal = MK.getComponent('Modal')

		Modal.confirm(props)
	})
}
