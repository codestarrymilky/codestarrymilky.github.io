const dropbar = document.getElementById('dropbar');
const dropdown = document.getElementById('dropdown');


// 电脑
dropbar.addEventListener('mouseover', function () {
  dropdown.style.display = 'block';
});

dropbar.addEventListener('mouseout', function () {
      dropdown.style.display = 'none';
});

// mobile
dropbar.addEventListener('touchstart', function (e) {
      e.preventDefault();
      dropdown.style.display = 'block';
});

dropbar.addEventListener('touchend', function (e) {
      e.preventDefault();
      dropdown.style.display = 'none';
});
