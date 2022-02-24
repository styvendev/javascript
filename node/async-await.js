var product = ["Headphones", "Ipad"];

async function products() {
  return new Promise((resolve, reject) => {
    resolve(
      setTimeout(function () {
        console.log(product);
      }, 1000)
    );
    reject("Error displaying products");
  });
}
async function addproduct(name) {
  return new Promise((resolve, reject) => {
    resolve(
      setTimeout(function () {
        product.push(name);
      }, 1000)
    );
    reject("Error in add product");
  });
}
async function main() {
  await products();
  await addproduct("PC");
  await addproduct("Display");
  await products();
  await addproduct("Camera");
  await products();
}

main();
