'use strict';
export default function bind ()
	{
		let disabled=this.disabled;
		return Object.assign (this.$attrs,{disabled});
	}
