'use strict';
export default function input (event)
	{
		this.$emit ('update:modelValue',event.target.value);
	}
