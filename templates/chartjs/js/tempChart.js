// <block:setup:1>
const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July'
];
const data = {
    labels: labels,
    datasets: [{
        label: 'Temperature Chart',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45],
    }]
};
// </block:setup>

// <block:config:0>
const config = {
    type: 'line',
    data,
    options: {}
};
// </block:config>

var myChart = new Chart(
document.getElementById('tempChart'),
config
);