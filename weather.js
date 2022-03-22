let btn=document.getElementById("btn");
btn.addEventListener('click',getTemp);
let APIkey="fbbda52b8102585e5f885c26dcc0d8e1";
async function getTemp() {
    let cityname=document.getElementById("city").value;
    let url=`https://api.openweathermap.org/data/2.5/forecast?q=${cityname}&appid=${APIkey}&units=metric`;
    let response=await fetch(url);
    let data=await response.json();
    let date=data.list.map((i)=>{
        return i.dt_txt;
    })
    let temp=data.list.map((i)=>{
        return i.main.temp;
    })

    console.log(data);
    console.log(date);
    console.log(temp);
    const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: date,
        datasets: [{
            label: 'Temperatures at different timings',
            data: temp,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
}