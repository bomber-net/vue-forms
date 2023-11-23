'use strict';
export default function popupScale (newScale,oldScale)
	{
		if (!this.viewPopup) return;
		let popup=this.popup;
		let size=this.frameSize;
		let w=size.width/2;
		let h=size.height/2;
		let padding=parseInt (this.padding)/2;
		w+=padding;
		h+=padding;
		popup.left=w-(w-popup.left)/oldScale*newScale;
		popup.top=w-(w-popup.top)/oldScale*newScale;
	}
