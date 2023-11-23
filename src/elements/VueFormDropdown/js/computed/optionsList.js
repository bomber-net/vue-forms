'use strict';
import {isPlainObject} from 'lodash/lang';

export default function optionsList ()
	{
		let options=this.options;
		return Array.isArray (options) || isPlainObject (options)?options:[];
	}
