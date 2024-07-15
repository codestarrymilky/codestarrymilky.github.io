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
dropbar.addEventListener('click', function () {
      if (dropdown.style.display === 'none') {
        dropdown.style.display = 'block';
      } else {
        dropdown.style.display = 'none';
      }
    });
