const sentense = "hello there from lighthouse labs \n";

let delay = 0;

  for (const char of sentense) {
    setTimeout(() => {
      process.stdout.write(char);
    }, delay);
    delay += 50;
  };


