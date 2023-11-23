'use strict';
export default function frameStyle ()
	{
		let size=this.frameSize;
		let padding=parseInt (this.padding)*2;
		return {width:`${size.width+padding}px`,height:`${size.height+padding}px`};
	}
