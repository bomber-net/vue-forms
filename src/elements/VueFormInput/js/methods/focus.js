'use strict';
export default function focus ()
	{
		let field=this.error?'error':(this.e?'e':null);
		if (field) this.$emit (`update:${field}`,null);
	}
