  const accordion = () => {
    const accordinBox = document.querySelectorAll('.acardion__item-box');
    const accordinContent = document.querySelectorAll('.acardion__item-content');

    accordinBox.forEach((item, index) => {
      item.addEventListener('click', () => {


        accordinBox.forEach((box) => {
          box.classList.remove('active')
        })


        accordinContent.forEach((content) => {
          content.classList.remove('active')
        })


        item.classList.add('active');
        accordinContent[index].classList.add('active');

      });
    });
  };

  accordion();