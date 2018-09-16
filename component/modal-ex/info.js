import React, { Component } from 'react'

export default function info(props) {
	return new Promise((resolve, reject) => {
		let handleOk = () => {
			resolve(true)
		}

		let handleCancel = () => {
			resolve(false)
		}

		props.onOk = handleOk
		props.onCancel = handleCancel

		var Modal = MK.getComponent('Modal')
		Modal.info(props)
	})
}
