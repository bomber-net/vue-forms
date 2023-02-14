'use strict';
export default function data ()
	{
		return (
			{
				formData:
					{
						email:null,
						password:null,
						remember:this.remember,
					},
				errors:{},
			});
	}
