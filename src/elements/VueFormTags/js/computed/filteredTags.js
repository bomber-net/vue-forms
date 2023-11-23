'use strict';
import {isPlainObject} from 'lodash/lang.js';
import {pickBy}        from 'lodash/object.js';

export default function filteredTags ()
	{
		let tags=this.tags??[];
		let search=this.search?.trim ();
		if (!search) return tags;
		search=new RegExp(search,'i');
		return Array.isArray (tags)?tags.filter (tag=>search.test (tag)):pickBy (tags,tag=>search.test (tag));
	}
