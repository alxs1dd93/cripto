const url =
  "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Ctether%2Cethereum%2Clitecoin%2Ccardano%2Cdogecoin&vs_currencies=usd&include_24hr_change=true";
const container = document.querySelector(".container");

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const priceInfo = [];
    html = "";

    for (key in data) {
      priceInfo.push({
        name: key,
        value: data[key],
      });
    }

    priceInfo.forEach((item) => {
      const cssChangeClass = item.value.usd_24h_change;
      cssChangeClass > 0 ? "up" : "down";

      html += `
        <div class="container-main">
            <h3 class="container-title"><img class="container-img" width="20" height="20" src="/images/${
              item.name
            }.png">${item.name}</h3>
            <p class="container-price">$ ${item.value.usd}</p>
            <p class="container-change ${cssChangeClass}">Changes in 24 hours: ${item.value.usd_24h_change.toFixed(
        3
      )}</p>
        </div>
        `;
    });
    container.innerHTML = html;

    const ctx = document.getElementById("myChart");

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  });
