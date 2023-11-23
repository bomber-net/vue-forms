'use strict';
export default function change (event)
	{
		this.$emit ('update:modelValue',event.target.value.split ('_').slice (1).join ('_'));
	}
