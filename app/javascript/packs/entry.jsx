// Run this example by adding <%= javascript_pack_tag 'entry' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

document.addEventListener('DOMContentLoaded', () => {
	const element = document.createElement('div')

	ReactDOM.render(
		<BrowserRouter>
			<App />
		</BrowserRouter>,
		document.body.appendChild(element)
	);
})