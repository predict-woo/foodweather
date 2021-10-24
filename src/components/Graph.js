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

    var data = {
        labels: labels,
        datasets: [
            {
                label: "Forcast",
                data: scores,
                backgroundColor: [
                    '#302E62',
                    '#302E62',
                    '#302E62',
                    '#302E62',
                    '#302E62',
                    '#302E62',
                    '#302E62',
                  ],
                  borderColor: [
                    '#302E62',
                    '#302E62',
                    '#302E62',
                    '#302E62',
                    '#302E62',
                    '#302E62',
                    '#302E62',
                  ],
                  borderWidth: 1,
                  borderRadius: 15,
                  barThickness:15,
            }
        ]
    }

    data.datasets[0].backgroundColor[choice] = "#F8C500"
    data.datasets[0].borderColor[choice] = "#F8C500"

    var options = {
        maintainAspectRatio:false,
        plugins: {
          legend: {
            display: false
          }
        }
      };

    console.log(options)

    return (
        <div className="graph" style={{height:"300px"}}>
            <Bar
            data = {data}
            options = {options}
            />
        </div>
    )
}

export default Graph
