'use strict';
import {isInteger,isString} from 'lodash/lang';

export default function update (value)
	{
		let num=value;
		if (isString (num)) num=parseInt (num.replace (/[^\d\-]+/,''));
		if (!isInteger (num)) num=0;
		num=clamp (num,this.min,this.max);
		if (`${num}`===`${value}` && num===this.modelValue) return;
		this.$emit ('update:modelValue',num);
		this.$forceUpdate ();

		function clamp (number,min,max)
			{
				if (number<min) return min;
				if (number>max) return max;
				return number;
			}
	}
