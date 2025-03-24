function removeAds() {
  //Get the span elements of the page
  let spans = document.getElementByTagName("span");
  for (let i = 0; i < spans.length; i++) {
    //see if they are "Promoted"
    if (spans[i].innerHTML === "Promoted") {
      //get the div of the ad
      let card = spans[i].closest(".fie-impression-container");

      if (card === null) {
        let j = 0;
        card = spans[i];
        while (j < 6) {
          card = card.parentNode;
          ++j;
        }
      }

      //remove ad from view
      card.setAttribute("style", "display: none !important;");
    }
  }
}

removeAds();

//continues to happen, not just on first load
setInterval(function () {
	removeAds();
}), 100
