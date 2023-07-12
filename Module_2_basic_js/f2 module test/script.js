

function getMenu() {
  fetch('https://sandeep836.github.io/json/food.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch menu');
      }
      return response.json();
    })
    .then(data => {
      const menuDiv = document.getElementById('menu');
      let menuHtml = '<h2>Menu</h2>';
      menuHtml += '<ul>';
      data.forEach(item => {
        menuHtml += `<li>
          <img src="${item.imgSrc}" alt="${item.name}" />
          <span>${item.name} - ${item.price}</span>
        </li>`;
      });
      menuHtml += '</ul>';
      menuDiv.innerHTML = menuHtml;
    })
    .catch(error => {
      const menuDiv = document.getElementById('menu');
      menuDiv.innerHTML = '<p>Failed to fetch menu. Please try again later.</p>';
      console.log(error);
    });
}

getMenu();

function takeOrder() {
  return new Promise((resolve, reject) => {
    const order = {
      burgers: []
    };

    const randomBurgers = ['Classic Burger', 'Cheeseburger', 'Bacon Burger'];
    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * randomBurgers.length);
      order.burgers.push(randomBurgers[randomIndex]);
    }

    resolve(order);
  });
}

function orderPrep(order) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const prepStatus = {
        order_status: true,
        paid: false
      };
      resolve(prepStatus);
    }, 1500);
  });
}

function payOrder(prepStatus) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const paymentStatus = {
        order_status: prepStatus.order_status,
        paid: true
      };
      resolve(paymentStatus);
    }, 1000);
  });
}

function thankyouFnc(paymentStatus) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      alert('Thank you for eating with us today!');
      resolve();
    }, 0);
  });
}

document.getElementById('place-order-btn').addEventListener('click', () => {
  takeOrder()
    .then(order => {
      console.log('Order:', order);
      return orderPrep(order);
    })
    .then(prepStatus => {
      console.log('Preparation Status:', prepStatus);
      return payOrder(prepStatus);
    })
    .then(paymentStatus => {
      console.log('Payment Status:', paymentStatus);
      return thankyouFnc(paymentStatus);
    })
    .then(() => {
      console.log('Order process completed successfully.');
    })
    .catch(error => {
      console.log('Error:', error);
    });
});


  getMenu();