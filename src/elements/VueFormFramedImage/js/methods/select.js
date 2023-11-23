'use strict';
export default function select (files)
	{
		this.viewPopup=false;
		let file=files[0];
		if (!this.imageAccept.split (',').includes (file?.type)) return;
		let reader=new FileReader ();
		reader.onload=onload.bind (this);
		reader.readAsDataURL (file);

		function onload ()
			{
				let img=new Image ();
				img.onload=onload.bind (this);
				img.src=reader.result;
				this.popup.srcImg=img;

				function onload ()
					{
						let aspect=img.width/img.height;
						let previewWidth=parseInt (this.previewSize);
						let previewHeight=previewWidth/aspect;
						let canvas=document.createElement ('canvas');
						canvas.width=previewWidth;
						canvas.height=previewHeight;
						let context=canvas.getContext ('2d');
						context.drawImage (img,0,0,previewWidth,previewHeight);
						this.popup.imgDataURL=canvas.toDataURL ('image/jpeg');
						let frame=this.frameSize;
						let popup=this.popup;
						popup.scale=Math.max (frame.width/previewWidth,frame.height/previewHeight);
						let padding=parseInt (this.padding);
						popup.left=padding+(frame.width-previewWidth*popup.scale)/2;
						popup.top=padding+(frame.height-previewHeight*popup.scale)/2;
						this.$nextTick (()=>this.viewPopup=true);
					}
			}
	}
