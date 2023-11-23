'use strict';
import {isPlainObject} from 'lodash/lang';
import {pickBy}        from 'lodash/object';

export default function checkedTags ()
	{
		let tags=this.tags;
		let model=this.checked;
		if (Array.isArray (tags)) return tags.filter ((tag,i)=>model.includes (i));
		if (isPlainObject (tags)) return pickBy (tags,(tag,i)=>model.includes (i));
	}
