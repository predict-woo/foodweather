import { Bar } from 'react-chartjs-2';

const Graph = ({meals,choice}) => {

    const mealtimeinstr = (meal) => {
        var result = "없음"
        if (meal.time === 0) {result = "아침"}
        else if (meal.time === 1) {result = "점심"}
        else if (meal.time === 2) {result = "저녁"}
        return result
    }

    console.log(meals)

    var scores = meals.map(meal => meal.score)
    var labels = meals.map(meal => mealtimeinstr(meal))

    scores = scores.slice(0,5)
    labels = labels.slice(0,5)

    var data = {
        labels: labels,
        datasets: [
            {
                label: "Forcast",
                data: scores,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                  ],
                  borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                  ],
                  borderWidth: 1,
            }
        ]
    }

    var options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      };

    return (
        <div>
            <Bar
            data = {data}
            options = {options}
            />
        </div>
    )
}

export default Graph
