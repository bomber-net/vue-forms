'use strict';
export default function formBind ()
	{
		 let action=this.url;
		 let method='post';
		 let data=this.formData;
		 return {action,method,data};
	}
