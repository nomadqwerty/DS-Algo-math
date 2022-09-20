const promArr = [
  new Promise((res, rej) => {
    setTimeout(() => {
      return res("success");
    }, 1000);
  }),
  new Promise((res, rej) => {
    setTimeout(() => {
      return res("success");
    }, 2000);
  }),
  new Promise((res, rej) => {
    setTimeout(() => {
      return res("success");
    }, 3000);
  }),
];

const asyncGenny = async function* () {
  const val = await promArr[0];
  yield await val;
};

const asyncIter = asyncGenny();

// for wait loop for promises
(async () => {
  for await (const promise of promArr) {
    console.log("for await", promise);
  }
  //   or
  for (let i = 0; i < promArr.length; i++) {
    console.log("for await", await promArr[i]);
  }
})();

// vs promise.all()
(async () => {
  console.log(
    Promise.allSettled(promArr).then((res) => console.log("allSettled ", res))
  );
})();
