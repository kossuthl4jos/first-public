import { numberOfHours } from 'src/store/getters/number-of-hours';

describe('numberOfHours', () => {
	test('returns total hours when amount is less than a day', async () => {
		const state = {};
		const getters = { totalNumberOfHoursSpent: 20 };

		expect(numberOfHours(state, getters)).toEqual(20);
	});

	test('returns zero when amount is a day', async () => {
		const state = {};
		const getters = { totalNumberOfHoursSpent: 24 };

		expect(numberOfHours(state, getters)).toEqual(0);
	});

	test('returns surplus over a day when amount more than a day but less than two', async () => {
		const state = {};
		const getters = { totalNumberOfHoursSpent: 47 };

		expect(numberOfHours(state, getters)).toEqual(23);
	});

	test('returns two when amount is two days', async () => {
		const state = {};
		const getters = { totalNumberOfHoursSpent: 48 };

		expect(numberOfHours(state, getters)).toEqual(0);
	});
});