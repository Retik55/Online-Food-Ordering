let orderList = document.getElementById("orderList");
let totalPriceElement = document.getElementById("totalPrice");
let totalPrice = 0;
let orderHistory = [];

function addToOrder(item, price) {
    const listItem = document.createElement("li");
    listItem.textContent = `${item} - ₹${price}`;
    orderList.appendChild(listItem);

    totalPrice += price;
    totalPriceElement.innerText = totalPrice;

    orderHistory.push({ x: orderHistory.length + 1, y: price });

    updateChart();
}

const ctx = document.getElementById("orderChart").getContext("2d");

let chart = new Chart(ctx, {
    type: "scatter",
    data: {
        datasets: [{
            label: "Order Price Trend",
            data: [],
            backgroundColor: "blue"
        }]
    },
    options: {
        scales: {
            x: { title: { display: true, text: "Order Number" } },
            y: { title: { display: true, text: "Price (₹)" } }
        }
    }
});

function updateChart() {
    chart.data.datasets[0].data = orderHistory;
    chart.update();
}
