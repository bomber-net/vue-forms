'use strict';
export default function mounted ()
	{
		let {container,input}=this.$refs;
		container.style.height=input.getBoundingClientRect ().height+'px';
	}
