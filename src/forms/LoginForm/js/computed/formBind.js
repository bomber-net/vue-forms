'use strict';
export default function formBind ()
	{
		 let action=this.url;
		 let method='post';
		 let data=this.formData;
		 return Object.assign (this.$attrs,{action,method,data});
	}
