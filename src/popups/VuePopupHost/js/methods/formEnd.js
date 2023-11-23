'use strict';
export default function formEnd ()
	{
		this.preloader=false;
		this.$emit ('submitEnd');
	}
