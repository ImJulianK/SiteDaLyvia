const dataAtual = new Date();
const dataNiver = new Date(2005, 1, 25, 8, 55);
const dataNamoro = new Date(2022, 2, 8, 9, 40);
const dataDate = new Date(2021, 10, 24, 19, 30);

const resNi = document.querySelector('.res1');
const resNa = document.querySelector('.res2');
const resDa = document.querySelector('.res3');

const minNi = Math.round(Math.abs(dataAtual - dataNiver) / (1000 * 60));
const minNa = Math.round(Math.abs(dataAtual - dataNamoro) / (1000 * 60));
const minDa = Math.round(Math.abs(dataAtual - dataDate) / (1000 * 60));

const hrNi = Math.round(Math.abs(dataAtual - dataNiver) / (1000 * 60 * 60));
const hrNa = Math.round(Math.abs(dataAtual - dataNamoro) / (1000 * 60 * 60));
const hrDa = Math.round(Math.abs(dataAtual - dataDate) / (1000 * 60 * 60));

const diaNi = Math.round(Math.abs(dataAtual - dataNiver) / (1000 * 60 * 60 * 24));
const diaNa = Math.round(Math.abs(dataAtual - dataNamoro) / (1000 * 60 * 60 * 24));
const diaDa = Math.round(Math.abs(dataAtual - dataDate) / (1000 * 60 * 60 * 24));

resNi.innerHTML = `Se passaram: <br> ${diaNi} dias; <br> ${hrNi} horas; <br> ${minNi} minutos.`;
resNa.innerHTML = `Se passaram: <br> ${diaNa} dias; <br> ${hrNa} horas; <br> ${minNa} minutos.`;
resDa.innerHTML = `Se passaram: <br> ${diaDa} dias; <br> ${hrDa} horas; <br> ${minDa} minutos.`;