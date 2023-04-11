'use strict';

// variables and constants 

// Sidebar 
const menuItems = document.querySelectorAll('.menu-item');
// Notifications 
const notification = document.querySelector('#showAlret');
const popUp = document.querySelector('.noti_PopUp');

// messages 
const messagesEl = document.querySelector('#messageIcon');
const chatBox = document.querySelector('.messages');
const searchEl = document.querySelector('#searchEl');
const userNames = document.querySelectorAll('.message');

// themes

const themeEl = document.querySelector('#themes');
const themeModal = document.querySelector('.theme-customize');
const closeModel = document.querySelector('.close-icon');

// font size 
var root = document.querySelector(':root');
const fontSizeEl = document.querySelectorAll('.choose-size span');


// choose colors 
const chooseColors = document.querySelectorAll('.choose-color span');

// dark or dim mode 
const bg1 = document.querySelector('.bg-1');
const bg2 = document.querySelector('.bg-2');
const bg3 = document.querySelector('.bg-3');

// Like and BookMark Btn ;

const likeBtns = document.querySelectorAll('.uil-heart');
const bookMarkBtn = document.querySelectorAll('.uil-bookmark');


// When user click on the "menu-item" the button will be active 
menuItems.forEach(item => {
    // Add click listener on menuItem
    item.addEventListener('click', () => {
        removeOtherActive();
        item.classList.add('active');
    });
});

const removeOtherActive = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    });
}

// When user click on notification it's show all notifications 

notification.addEventListener('click', () => {
    popUp.classList.toggle('active');
});

// When user click on messages icons  it add the box shadow ;

messagesEl.addEventListener('click', () => {
    chatBox.style.boxShadow = '0 0 1.6rem var(--primary-color)';

    // But we want this boxShadow only for few seconds ;

    setTimeout(() => {
        chatBox.style.boxShadow = 'none';
    }, 2000);
});

// When user want search the specific person on chat 

searchEl.addEventListener('input', (e) => {
    const curValue = e.target.value.toLowerCase();

    userNames.forEach(name => {
        if (name.textContent.toLowerCase().includes(curValue)) {
            name.style.display = '';
        } else {
            name.style.display = 'none';
        }
    });
});


// When user click on themes button pop up will disappear 

themeEl.addEventListener('click', () => {
    themeModal.classList.add('active');
});

// Close the model clicking on the 'x' mark ;
closeModel.addEventListener('click', () => {
    themeModal.classList.remove('active');
});


// When user want to change the font size ;

fontSizeEl.forEach(font => {
    // console.log(font);
    let curSize;

    font.addEventListener('click', () => {
        // Remove other actives 
        fontSizeEl.forEach(font => font.classList.remove('active'));
        // active the current font size 
        font.classList.add('active');

        if (font.classList.contains('font-size-1')) {
            curSize = '8px';
        }
        else if (font.classList.contains('font-size-2')) {
            curSize = '9px';

        }
        else if (font.classList.contains('font-size-3')) {
            curSize = '10px';
        }
        else if (font.classList.contains('font-size-4')) {
            curSize = '11px';
        }


        // change the font size of root 
        document.querySelector('html').style.fontSize = curSize;
    });
});


// When user want to change favorite primary colors ;

chooseColors.forEach(color => {

    color.addEventListener('click', () => {

        // Remove other actives 
        chooseColors.forEach(color => color.classList.remove('active'));
        // active the current font size 
        color.classList.add('active');

        let primaryHue;

        if (color.classList.contains('color-1')) {
            primaryHue = 252;
        }
        else if (color.classList.contains('color-2')) {
            primaryHue = 52;
        }
        else if (color.classList.contains('color-3')) {
            primaryHue = 352;
        }
        else if (color.classList.contains('color-4')) {
            primaryHue = 152;
        }
        else if (color.classList.contains('color-5')) {
            primaryHue = 202;
        }

        root.style.setProperty('--primary-hue', primaryHue)
    });
});


// When user want to change To dark mode dim or light mode 


let darkColorLightness;
let whiteColorLightness;
let lightColorLightness;

// change Background colors 

const changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
}

bg1.addEventListener('click', () => {
    // add active class 
    bg1.classList.add('active');
    // remove all other active classes 
    bg2.classList.remove('active');
    bg3.classList.remove('active');
    // remove custom changes 
    window.location.reload();
});

bg2.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    // add active class
    bg2.classList.add('active');
    // remove all other active classes 
    bg1.classList.remove('active');
    bg3.classList.remove('active');
    changeBG();
});

bg3.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

    // add active class
    bg3.classList.add('active');
    // remove all other active classes 
    bg2.classList.remove('active');
    bg1.classList.remove('active');
    changeBG();
});


// When user like a photo 

likeBtns.forEach(like => {
    like.addEventListener('click', () => {
        like.classList.toggle('active')
    });
});

// When user save a post 

bookMarkBtn.forEach(save => {
    save.addEventListener('click', () => {
        save.classList.toggle('active')
    });
});
