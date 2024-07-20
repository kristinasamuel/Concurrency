// call back function

// we are making cake
function mixIngredients(callback: () => void){
    console.log("Mixing ingredient...");
    setTimeout(()=>{
        console.log("Ingredients mixed.");
        callback()
    },3000)
}
function bakeCake(callback : () => void){
    console.log("Baking cake...");
    setTimeout(()=>{
        console.log("Cake baked.");
        callback()
    },4000)
}
function serveCake(){
    console.log("Serving the delicious cake...");
    setTimeout(()=>{
        console.log("cake served.");
    },3000)
}
// handling the call back functions
mixIngredients(()=>{
    bakeCake(()=>{
        serveCake();
    });
});

// Promise
// Now we are using Promise 
function mixed_Ingredients() {
  console.log("Mixing ingredients...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Ingredients Mixed");
    }, 3000);
  });
}
function bake_Cake() {
  console.log("Baking cake...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("cake  Baked !");
    }, 4000);
  });
}
function serve_Cake() {
  console.log("Serving the delicious cake...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("cake served !");
    }, 5000);
  });
}
mixed_Ingredients()
  .then((value) => {
    console.log(value);
    return bake_Cake();
  })
  .then((value) => {
    console.log(value);
    return serve_Cake();
  })
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });

// async await

function checkEmail() {
  return new Promise((resolve, reject) => {
    console.log("Checking Inbox...");
    setTimeout(() => {
      resolve("inbox checked.");
    }, 4000);
  });
}

function readEmail() {
  return new Promise((resolve, reject) => {
    console.log("Reading emails...");
    setTimeout(() => {
      resolve("Reading done");
    }, 5000);
  });
}

function replyToEmail() {
  return new Promise((resolve, reject) => {
    console.log("Replying emails...");
    setTimeout(() => {
      resolve("Email replied.");
    }, 6000);
  });
}

// Now we are using async await to handle function 
async function emailsChecked() {
  try {
    let result1 = await checkEmail();
    console.log(result1);
    let result2 = await readEmail();
    console.log(result2);
    let result3 = await replyToEmail();
    console.log(result3);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Email send successfully!!!");
  }
}
emailsChecked();
