'use strict';
import wrapper from 'bomber-net-axios-wrapper';

export default function load ()
	{
		if (!this.src) return;
		this.preloader=true;
		this.$emit ('loadStart');
		wrapper.get (this.src)
			.success (response=>this.$emit ('loadSuccess',response))
			.error (error=>this.$emit ('loadError',error))
			.response (()=>
				{
					this.preloader=false;
					this.$emit ('loadEnd');
				});
	}
