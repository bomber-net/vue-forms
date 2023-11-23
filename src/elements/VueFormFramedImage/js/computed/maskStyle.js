'use strict';
export default function maskStyle ()
	{
		let size=this.frameSize;
		let W=size.width;
		let H=size.height;
		let w=W/2;
		let h=H/2;
		let padding=parseInt (this.padding);
		let popup=this.popup;
		let clip;
		if (this.ellipseFrame) clip=`path('M 0 0 h ${padding+w} v ${padding} a ${w} ${h} 180 0 0 0 ${H} a ${w} ${h} 180 0 0 0 ${-H} V 0 h ${padding+w} v ${padding*2+W} H 0 z')`;
			else clip=`path('M 0 0 h ${padding*2+W} l ${-padding} ${padding} h ${-W} v ${H} h ${W} v ${-H} l ${padding} ${-padding} v ${padding*2+H} H 0 z')`;
		let cursor=popup.dragOn?'grabbing':'grab';
		return Object.assign ({'clip-path':clip,cursor});
	}
