'use strict';
import {isInteger,isString} from 'lodash/lang.js';

export default function update (value)
	{
		if (isString (value)) value=parseInt (value.replace (/[^\d\-]+/,''));
		if (!isInteger (value)) value=0;
		value=clamp (value,this.min,this.max);
		if (value===this.modelValue) return;
		this.$emit ('update:modelValue',value);
		this.$forceUpdate ();

		function clamp (number,min,max)
			{
				if (number<min) return min;
				if (number>max) return max;
				return number;
			}
	}
