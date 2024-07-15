const dropbar = document.getElementById('dropbar');
const dropdown = document.getElementById('dropdown');



dropbar.addEventListener('mouseover', function () {
  dropdown.style.display = 'block';
});

dropbar.addEventListener('mouseout', function () {
      dropdown.style.display = 'none';
});
