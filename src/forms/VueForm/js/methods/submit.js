'use strict';
import wrapper from 'bomber-net-axios-wrapper';

export default function ()
	{
		if (!this.action) return;
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
				if (value===undefined) continue;
				if (value===null) value='';
				formData.append (key,value);
				if (typeof (value)==='object') filesCount++;
			}
		if (filesCount) data=formData;
		let method=this.method.toLowerCase ();
		if (!['get','post','put','delete'].includes (method)) method='post';
		if (method==='put' && data instanceof FormData)
			{
				method='post';
				data.set ('_method','PUT');
			}
		let props=['post','put'].includes (method)?[this.action,data]:[this.action];
		let request=wrapper[method] (...props);
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
