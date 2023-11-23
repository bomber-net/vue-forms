'use strict';
import {isString} from 'lodash/lang';

export default function modelValue (src)
	{
		if (isString (src) || [null,undefined].includes (src)) this.src=src;
	}
