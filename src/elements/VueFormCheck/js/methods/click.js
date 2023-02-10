'use strict';
export default function click (event)
	{
		let field=this.error?'error':(this.e?'e':null);
		if (field) this.$emit (`update:${field}`,null);
		this.$emit ('update:modelValue',event.target.checked);
	}
