function removeAds() {
  //Get the span elements of the page
  let span = document.querySelectorAll("span");
  for (let i = 0; i < span.length; i++) {
    //see if they are "Promoted"
    if (span[i].innerText === "Promoted") {
      //get the div of the ad
      let card = span[i].closest(
        "ember-view"
      );

      if (card === null) {
        let j = 0;
        card = span[i];
        while (j < 10) {
          card = card.parentNode;
          j++;
        }
      }

      //remove ad from view
      card.setAttribute("style", "display: none !important;");
    }
  }
}
removeAds();

//continues to block, not just on first load
setInterval(function () {
  removeAds();
}),
  100000;
