# Orientation Icon

```html
<div class="orientation-icon-wrapper">
    <img src="icon_orientation_mobile.svg" id="orientation-icon" alt="Turn device" class="orientation-icon">
</div>

```

```css
.orientation-icon-wrapper {
    position: fixed;
    left: auto;
    top: auto;
    right: 0%;
    bottom: 0%;
    z-index: 100;
}

.orientation-icon {
    width: 140px;
    padding-right: 20px;
    padding-bottom: 20px;
    opacity: 0;
}

@keyframes blinkIcon {
    0% {
        opacity: 0;
    }
    
    50% {
        opacity: 0.5;
    }
    
    100% {
        opacity: 0;
    }
}

.orientation-icon {
    animation-duration: 2s;
    animation-timing-function: ease-in-out;
    animation-delay: 4s;
    animation-name: blinkIcon;
    animation-iteration-count: 4;
    animation-direction: alternate-reverse;
    /* play state is set by Javascript */
    animation-play-state: paused;
}
```



```js
// only set cookies on project pages

// get icon
let icon = document.getElementById('orientation-icon');

// set a cookie if not set already
if (document.cookie.length == 0 ) {
    document.cookie = 'balkOrientation=0';
    icon.style.animationPlayState='running';
    console.log("if");
} else if (document.cookie.indexOf('balkOrientation=') == -1) {
    document.cookie = c.concat(';balkOrientation=0');
    icon.style.animationPlayState='running';
    console.log("else if");
} else {
    console.log("else");
}

function showOrientationIcon2() {
    // check the value of balkOrientation
    let i = c.indexOf('balkOrientation=');
    if (Number(c[i+16]) < 2) {
        // display icon
        icon.style.animationPlayState='running';
    }
}
```
