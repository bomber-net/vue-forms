'use strict';
import {isPlainObject} from 'lodash/lang';
import {toPairs}       from 'lodash/object';

export default function selected ()
	{
		return Array.isArray (this.modelValue) || isPlainObject (this.modelValue)?toPairs (this.modelValue).map (option=>option[1]):[];
	}
