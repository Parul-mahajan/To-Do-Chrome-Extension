(function () {
  var list = document.querySelector("#list"),
    form = document.querySelector("#button"),
    item = document.querySelector("#item");

  document.getElementById("Clear").addEventListener("click", function cleear() {
    console.log("hu");
    list.innerHTML = "";
    document.getElementById("text").innerText = "Hash! you did it";
    store();
  });
  document.getElementById("hi").addEventListener("click", function () {
    console.log("hi");
    var el = document.querySelector("html");
    el.classList.toggle("back-dark-mode");
    var el2 = document.getElementById("main");
    el2.classList.toggle("dark-mode");
    var el3 = document.getElementById("item");
    el3.classList.toggle("text");
    var el4 = document.getElementById("hi");
    el4.classList.toggle("mode");
  });

  form.addEventListener(
    "click",
    function (e) {
      e.preventDefault();
      list.innerHTML += "<li>" + item.value + "</li>";
      store();
      item.value = "";
      document.getElementById("text").innerText = "";
    },
    false
  );
  list.addEventListener(
    "click",
    function (e) {
      var t = e.target;
      if (t.classList.contains("checked")) {
        t.parentNode.removeChild(t);
      } else {
        t.classList.add("checked");
      }
      store();
    },
    false
  );

  function store() {
    console.log("hi");
    window.localStorage.myitems = list.innerHTML;
  }

  function getValues() {
    var storedValues = window.localStorage.myitems;
    if (!storedValues) {
      list.innerHTML = "";
    } else {
      list.innerHTML = storedValues;
      document.getElementById("text").innerText = "";
    }
  }
  getValues();
})();
