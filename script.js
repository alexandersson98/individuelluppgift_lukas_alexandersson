
    var items = document.querySelectorAll(".add-to-cart");
    items.forEach(function (item) {
        item.addEventListener("click", function () {
            alert("Item added to cart!");
        });
    });

    var newsletterButton = document.querySelector(".newsletter .primary-button");
    if (newsletterButton) {
        newsletterButton.addEventListener("click", function (e) {
            e.preventDefault();
            alert("Thank you for subscribing!");
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
        });
    }

  if (window.axe) {
    axe.run().then(results => {
      console.log("axe violations:", results.violations.length);
      console.log(results.violations);
    });
  }

