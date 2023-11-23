'use strict';
export default function scale (event)
	{
		this.popup.scale*=(1+event.wheelDelta/2000);
	}
