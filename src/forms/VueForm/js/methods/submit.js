'use strict';
import wrapper from 'bomber-net-axios-wrapper';

export default function ()
	{
		this.$emit ('start');
		let data=this.data;
		let filesCount=0;
		let formData=new FormData;
		let dottedData=dotted (data);
		for (let k in dottedData)
			{
				let key=k.split ('.');
				key=key[0]+key.slice (1).map (segment=>`[${segment}]`).join ('');
				let value=dottedData[k];
				formData.append (key,value);
				if (value!==null && typeof (value)==='object') filesCount++;
			}
		if (filesCount) data=formData;
		let request=wrapper[this.method.toLowerCase ()==='put'?'put':'post'] (this.action,data);
		request.success (response=>this.$emit ('success',response)).error (error=>this.$emit ('error',error)).response (()=>this.$emit ('end'));

		function dotted (data,prefix=null)
			{
				let out={};
				for (let k in data)
					{
						let key=prefix?prefix+'.'+k:k;
						let v=data[k];
						if (v && typeof (v)==='object' && !(v.toString ()==='[object File]' && v.arrayBuffer)) Object.assign (out,dotted (v,key));
						else out[key]=v;
					}
				return out;
			}
	}
