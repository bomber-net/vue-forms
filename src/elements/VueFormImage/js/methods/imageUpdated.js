'use strict';
export default function imageUpdated (image)
	{
		if (!image)
			{
				this.src=null;
				return;
			}
		switch (typeof image)
			{
				case 'object':
					if (image.type.split ('/')[0]!=='image') return;
					let reader=new FileReader ();
					reader.readAsDataURL (image);
					let self=this;
					reader.onload=()=>self.src=reader.result;
					break;
				case 'string':
					this.src=image;
					break;
			}
	}
