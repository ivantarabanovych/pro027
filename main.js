function delayedGreeting(name) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${name}`);
    }, 3000);
  });
}

delayedGreeting("Shmitt").then((greating) => {
  console.log(greating);
});
