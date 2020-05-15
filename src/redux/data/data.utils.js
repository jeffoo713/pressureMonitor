import { v4 as uuidv4 } from 'uuid';

const selectMonth = (month) => {
  const monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const monthData = monthArr[month]
  return monthData
}

const selectCategory = (sys) => {
  //const catArr = ['hypotension', 'Normal', 'Prehypertension', 'Stage1 Hypertension', 'Stage2 Hypertension'];
  if (sys <= 90 ) return ['hypotension', 'secondary'];
  if (sys >90 && sys <= 120) return ['Normal', 'primary'];
  if (sys >120 && sys <= 140) return ['Prehypertension', 'success'];
  if (sys >140 && sys <= 160) return ['Stage1 Hypertension', 'warning'];
  if (sys > 160 ) return ['Stage2 Hypertension', 'danger'];
}

export const returnItem = ({ sys, dia, bpm, date }) => {
  const id = uuidv4();

  const defautDate = new Date()
  const dateObj = date === undefined? defautDate: date ;
  
  const categoryArr = selectCategory(sys);
  const category = categoryArr[0];
  const colorCode = categoryArr[1];

  const inputDate = `${selectMonth(dateObj.getMonth())} ${dateObj.getDate()},${dateObj.getYear()+1900}`

  return { id, sys, dia, bpm, category, inputDate, colorCode, dateObj };
}

export const addItemToData = (dataArr, itemToAdd) => {
  dataArr.push(itemToAdd);
  return dataArr.sort(((a, b) => b.dateObj - a.dateObj));
}