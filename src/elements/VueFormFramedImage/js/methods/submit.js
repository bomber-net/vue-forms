'use strict';
export default function submit ()
	{
		let size=this.frameSize;
		let canvas=document.createElement ('canvas');
		canvas.width=size.width;
		canvas.height=size.height;
		let context=canvas.getContext ('2d');
		let popup=this.popup;
		let previewWidth=parseInt (this.previewSize);
		let img=popup.srcImg;
		let scale=popup.scale;
		let padding=parseInt (this.padding);
		if (this.ellipseFrame)
			{
				let rx=size.width/2;
				let ry=size.height/2;
				context.ellipse (rx,ry,rx,ry,0,0,360);
				context.clip ();
			}
		context.drawImage (img,popup.left-padding,popup.top-padding,previewWidth*scale,previewWidth/(img.width/img.height)*scale);
		let dataUrl=canvas.toDataURL ('image/png');
		this.src=dataUrl;
		let dataChunks=dataUrl.replace ('data:','').replace (';base64','').split (',');
		let src=atob (dataChunks[1]);
		let ab=new ArrayBuffer (src.length);
		let ia=new Uint8Array (ab);
		for (let i=0; i<src.length; i++) ia[i]=src.charCodeAt (i);
		let file=new File ([new Blob ([ab],{type:dataChunks[0]})],'image.png');
		this.viewPopup=false;
		this.popup={srcImg:null,imgDataURL:null,dragOn:false,top:0,left:0,scale:1};
		this.$emit ('update:modelValue',file);
	}
