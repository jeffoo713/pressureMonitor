import { v4 as uuidv4 } from 'uuid';

const selectMonth = (month) => {
  const monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const monthData = monthArr[month]
  return monthData
}

const selectCategory = (sys) => {
  if (sys <= 90 ) return ['Hypotension', 'secondary'];
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

  return { id, sys: Number(sys), dia: Number(dia), bpm: Number(bpm), category, inputDate, colorCode, dateObj };
}

export const calculateStatsFromData = dataArr => {
  const totalNumber = dataArr.length;
  
  const avgSys = dataArr.reduce((acc, cur)=> (acc + cur.sys), 0)/ totalNumber;
  const avgDia = dataArr.reduce((acc, cur)=> (acc + cur.dia), 0)/ totalNumber;
  const avgBpm = dataArr.reduce((acc, cur)=> (acc + cur.bpm), 0)/ totalNumber;
  
  const hypoPerc = dataArr.filter(data=> data.category === 'Hypotension').length/ totalNumber;
  const norPerc = dataArr.filter(data=> data.category === 'Normal').length/ totalNumber;
  const prePerc = dataArr.filter(data=> data.category === 'Prehypertension').length/ totalNumber;
  const st1Perc = dataArr.filter(data=> data.category === 'Stage1 Hypertension').length/ totalNumber;
  const st2Perc = dataArr.filter(data=> data.category === 'Stage2 Hypertension').length/ totalNumber;

  return { 
    avgSys: Math.round(avgSys), 
    avgDia: Math.round(avgDia), 
    avgBpm: Math.round(avgBpm), 
    hypoPerc, 
    norPerc, 
    prePerc, 
    st1Perc, 
    st2Perc, 
    totalNumber 
  }
}