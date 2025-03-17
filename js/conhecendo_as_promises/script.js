const details = document.querySelectorAll('details');
let openDetails = [];

details.forEach(detail => {
  detail.addEventListener('toggle', () => {
    if (detail.open) {
      openDetails.push(detail);
      if (openDetails.length > 2) {
        openDetails[0].open = false;
        openDetails.shift();
      }
    } else {
      openDetails = openDetails.filter(d => d !== detail);
    }
  });
});