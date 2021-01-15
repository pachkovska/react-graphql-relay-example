import React from 'react';
import { Doughnut } from 'react-chartjs-2';

function Chart({edges}) {

    const chartOptions = {
        labels: edges.map(edge => edge.node.name),
        datasets: [
            {
                backgroundColor: [
                    '#65d6ce',
                    '#654062',
                    '#fa9579',
                    '#ffe9d6',
                ],
                data: edges.map(edge => edge.size)
            }
        ]
    }

        return (
            <div className="mb-10">
                <Doughnut
                    data={chartOptions}
                    options={{
                        title:{
                            display:true,
                            fontSize:10
                        },
                        legend:{
                            display:true,
                            position:'right'
                        }
                    }}
                />
            </div>
        );
}

export default Chart;