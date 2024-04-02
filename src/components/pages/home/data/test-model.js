import { Model } from '@base-framework/base';

const BASE_URL = 'https://google.com/';

/**
 * ParentModel
 *
 * This will create a parent model.
 *
 * @class
 * @extends Model
 */
export const TestModel = Model.extend(
{
	url: BASE_URL + 'test',

	xhr:
	{
		/**
		 * This will add a test.
		 *
		 * @param {object} instanceParams
		 * @param {function} callBack
		 * @returns {object}
		 */
		add(instanceParams, callBack)
		{
			let params = 'op=addTest' +
				'&' + this.setupObjectData();

			return this.request(params, instanceParams, callBack);
		}
	}
});