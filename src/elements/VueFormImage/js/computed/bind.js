'use strict';
export default function bind ()
	{
		let src=this.src;
		return Object.assign (this.$attrs,{src});
	}
