function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getBanana() {
  await delay(1000);
  return 'banana';
}

async function getApple() {
  await delay(1000);
  return 'apple';
}

async function getfruits() {
  return Promise.all([getBanana(), getApple()]).then((fruits) =>
    fruits.join(' + ')
  );
}
getfruits().then(console.log);
