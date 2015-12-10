import React, {Component} from 'react';
import styles from './ContentArea.css';
import CSSModules from 'react-css-modules';

import {RouteLoader} from '../../common/simpleReactRouter';

import Counter from '../Counter/Counter';
import About from '../About/About';
import UserList from '../UserList/UserList';
import StoreLoader from '../StoreLoader/StoreLoader';

class ContentArea extends Component {
	constructor(props, context) {
		super(props, context);
		this.config = {
			routes: {
				"/": Counter,
				"/about": About,
				"/counter": Counter,
				"/users/:userId": UserList,
				"/store/:storeName": StoreLoader
			}
		};
		console.log("%c ContentArea Component -> Init ", 'background: red; color: white');
	}

	render() {
		console.log("%c ContentArea Component -> Render ", 'background: black; color: pink');
		return (
				<div styleName='container'>
					<RouteLoader config={this.config}></RouteLoader>
				</div>
		);
	}
}
ContentArea.defaultProps = {};
ContentArea.propTypes = {};
export default CSSModules(ContentArea, styles);
