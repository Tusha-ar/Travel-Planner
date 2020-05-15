import { dayDiff } from './days';

const departure_date = new Date("2020-10-15");
const current_date = new Date("2020-10-1");

test('Find Diff between two dates', ()=>{
    expect(dayDiff(departure_date, current_date)).toBe(14)
})