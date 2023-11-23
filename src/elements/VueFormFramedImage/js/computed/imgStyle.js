'use strict';
export default function imgStyle ()
	{
		let popup=this.popup;
		let top=popup.top+'px';
		let left=popup.left+'px';
		let scale=popup.scale;
		let img=popup.srcImg;
		let width=parseInt (this.previewSize)*scale;
		let height=width/(img.width/img.height);
		let cursor=popup.dragOn?'grabbing':'grab';
		return {left,top,width:width+'px',height:height+'px',cursor};
	}
