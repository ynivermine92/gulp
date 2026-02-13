  const accordion = () => {
    const accordinBox = document.querySelectorAll('.acardion__item-box');

    accordinBox.forEach((item, index) => {
      const mobileContent = item.querySelector('.acardion__mobile');
      const desktopContentList = document.querySelectorAll('.acardion__item-content');

      // Изначально скрываем мобильный контент, кроме активного
      if (!item.classList.contains('active')) {
        if (mobileContent) mobileContent.style.maxHeight = '0px';
      } else {
        if (mobileContent) mobileContent.style.maxHeight = mobileContent.scrollHeight + 'px';
      }

      item.addEventListener('click', () => {
        // Закрываем все мобильные блоки
        accordinBox.forEach((box, i) => {
          box.classList.remove('active');
          const mobile = box.querySelector('.acardion__mobile');
          if (mobile) mobile.style.maxHeight = '0px';

          // Закрываем все десктопные блоки
          if (desktopContentList[i]) desktopContentList[i].classList.remove('active');
        });

        // Открываем выбранный
        item.classList.add('active');
        if (mobileContent) mobileContent.style.maxHeight = mobileContent.scrollHeight + 'px';

        // Десктоп: добавляем active к соответствующему элементу
        if (desktopContentList[index]) desktopContentList[index].classList.add('active');
      });
    });
  };

  accordion();

