'use strict';
export default function dragMove (event)
	{
		let popup=this.popup;
		if (!popup.dragOn) return;
		popup.top+=event.movementY;
		popup.left+=event.movementX;
	}
