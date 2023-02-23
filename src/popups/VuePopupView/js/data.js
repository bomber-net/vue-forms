'use strict';
export default function data ()
	{
		return (
			{
				errorMessage:null,
				hostEvents:
					{
						close:this.close,
						loadStart:this.loadStart,
						loadSuccess:this.loadSuccess,
						loadError:this.loadError,
						loadEnd:this.loadEnd,
					}
			});
	}
