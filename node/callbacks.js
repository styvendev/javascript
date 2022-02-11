//Asincronia o callbacks
function hello(name, callback) {
  setTimeout(function () {
    console.log("Hello " + name);
    callback(name);
  }, 1000);
}

function hablar(callback) {
  setTimeout(function () {
    console.log("Bla bla bla...");
    callback();
  }, 1000);
}

function bye(name) {
  setTimeout(function () {
    console.log("Bye " + name);
  }, 1000);
}

/*

hello("Styven", function (name) {
  hablar(function () {
    hablar(function () {
      hablar(() => {
        bye(name);
      });
    });
  });
});

*/

function conversation(name, veces) {
  if (veces > 0) {
    hablar(function () {
      conversation(name, --veces);
    });
  } else {
    bye(name);
  }
}

// ---

hello("Styven", function (name) {
  conversation(name, 3);
});
