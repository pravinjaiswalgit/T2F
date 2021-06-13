var dataref = { 
        iszoompanorama: true,
        istilt: true,
    };
getElementByClass = classname => {
    return document.getElementsByClassName(classname);
},

setHeight = () => {
    var containerList = getElementByClass("banner__container"),
    imageList = getElementByClass("banner__fpbannerimg"),
    windowHeight = window.outerHeight;
    for (cont of containerList) {
        cont.style.height = (windowHeight - 80) + "px";
    }
    for (img of imageList) {
        img.style.height = (windowHeight- 80) + "px";
    }
},

startTiltEffect = () => {
    var counter = 10;
    var timer = setInterval(() => {
        if (this.dataref.istilt) {
            // counter++;
            // if (counter == 20) {
            //     this.infiniteTilt(0.018, -0.17);
            // } else if (counter == 40) {
            //     this.infiniteTilt(0.75, 0.17);
            // } else if (counter == 60) {
            //     this.infiniteTilt(0.36, 0.16);
            // } else if (counter == 80) {
            //     this.infiniteTilt(0.35, -0.17);
            //     counter = 20;
            // }
        } else {
            clearInterval(timer);
            var imageList = getElementByClass("banner__fpbannerimg");
            for (img of imageList) {
                applyTransition(img);
            }
           // toggleSwitch = true;
            
        }
    }, 40);
},

applyTransition = img => {
    img.style.transition = '';
    img.style.transform = '';
    img.style.webkitTransform = '';
    img.style.mozTranform = '';
    img.style.msTransform = '';
    img.style.oTransform = '';
},

infiniteTilt = (x, y) => {
    var containerList = getElementByClass("banner__container"),
    imageList = getElementByClass("banner__fpbannerimg");
    for (index in containerList) {
        applyTilt(x, y, containerList[index], imageList[index]);
    }
},

applyTilt = (x, y, cont, img) => {
    var onMouseEnterHandler = function (event) {
        update(event);
    };
    var update = function () {
        updateTransformStyle(x, y);
    };

    var updateTransformStyle = function (x, y) {
        if (img.style) {
            var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
            img.style.transform = style;
            img.style.webkitTransform = style;
            img.style.mozTranform = style;
            img.style.msTransform = style;
            img.style.oTransform = style;
            img.style.transition = "transform .5s";
        }
    };
    onMouseEnterHandler();
},

changeKeyFrames = () => {
    // Init
    var containerList = getElementByClass("banner__container"),
    imageList = getElementByClass("banner__fpbannerimg");
    for (index in containerList) {
        applyChangeKeyFrames(containerList[index], imageList[index]);
    }
},

applyChangeKeyFrames = (container, inner) => {
    // Mouse
    var mouse = {
            _x: 0,
            _y: 0,
            x: 0,
            y: 0,
            updatePosition: function (event) {
                var e = event || window.event;
                this.x = e.clientX - this._x;
                this.y = (e.clientY - this._y) * -1;
            },
            setOrigin: function (e) {
                this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
                this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
            },
            show: function () {
                return "(" + this.x + ", " + this.y + ")";
            }
        };
    
        // Track the mouse position relative to the center of the container.
        mouse.setOrigin(container);
    
        //----------------------------------------------------
    
        var counter = 0;
        var refreshRate = 10;
        var isTimeToUpdate = function () {
            return counter++ % refreshRate === 0;
        };
    
        //----------------------------------------------------
    
        var onMouseEnterHandler = function (event) {
            update(event);
        };
    
        var onMouseLeaveHandler = function () {
            //inner.style = "";
        };
    
        var onMouseMoveHandler = function (event) {
            if (isTimeToUpdate()) {
                update(event);
            }
        };
    
        //----------------------------------------------------
    
        var update = function (event) {
            mouse.updatePosition(event);
            updateTransformStyle(
                (mouse.y / inner.offsetHeight / 2).toFixed(2),
                (mouse.x / inner.offsetWidth / 2).toFixed(2)
            );
        };
    
        var updateTransformStyle = function (x, y) {
            var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
            inner.style.transform = style;
            inner.style.webkitTransform = style;
            inner.style.mozTranform = style;
            inner.style.msTransform = style;
            inner.style.oTransform = style;
            inner.style.webkitTransition = "-webkit-transform .5s !important";
            inner.style.transition = "-webkit-transform .5s !important";
            inner.style.transition = "transform .5s !important";
            inner.style.transition = "transform .5s,-webkit-transform .5s !important";
        };
    
        //--------------------------------------------------------
        if (this.dataref.istilt) {
            container.onmousemove = onMouseMoveHandler;
            container.onmouseleave = onMouseLeaveHandler;
            container.onmouseenter = onMouseEnterHandler;
        } else {
            container.onmousemove = "";
            container.onmouseleave = "";
            container.onmouseenter = "";
        }
},

zoomSpeedChange = () => {
    if (this.dataref.iszoompanorama) {
        var zoomS = "zoom-speed-one";
        if (this.dataref.zoomspeed == 2) {
            zoomS = "zoom-speed-two";
        } else if (this.dataref.zoomspeed == 3) {
            zoomS = "zoom-speed-three";
        } else if (this.dataref.zoomspeed == 4) {
            zoomS = "zoom-speed-four";
        } else if (this.dataref.zoomspeed == 5) {
            zoomS = "zoom-speed-five";
        }
        this.zoomInOut();
        var imageList = getElementByClass("banner__fpbannerimg");
        for (img of imageList) {
            applyZoomChangeSpeedToAll(img, zoomS);
        }
    }
},

applyZoomChangeSpeedToAll = (img, zoomS) => {
    img.classList.remove("zoom-speed-one");
    img.classList.remove("zoom-speed-two");
    img.classList.remove("zoom-speed-three");
    img.classList.remove("zoom-speed-four");
    img.classList.remove("zoom-speed-five");
    img.classList.add(zoomS);
},

zoomInOut = isFirst => {
    // inner = this.$refs.fpbannerimg;
   // var toggleSwitch = false;
    // if (this.dataref.istilt) {
    //   toggleSwitch = true;
    //   inner.style.transition = '';
    //   inner.style.transform = '';
    //   inner.style.webkitTransform = '';
    //   inner.style.mozTranform = '';
    //   inner.style.msTransform = '';
    //   inner.style.oTransform = '';
    //   this.dataref.istilt = false;
    //   this.startTiltEffect();
    // }
    if (this.dataref.iszoompanorama) {
        var zoom = "zoom-effect";
        // if (this.dataref.zoomrange == 1.2) {
        //   zoom = "zoom-effect";
        // } else if (this.dataref.zoomrange == 1.4) {
        //   zoom = "zoom-effect_steptwo";
        // } else if (this.dataref.zoomrange == 1.6) {
        //   zoom = "zoom-effect_stepthree";
        // }
        var imageList = getElementByClass("banner__fpbannerimg");
        for (img of imageList) {
            applyZoomInOutToAll(img, zoom);
        }
        // setTimeout(() => {
        //   this.$refs.fpbannerimg.classList.remove("zoom-outeffect");
        // }, this.dataref.zoomspeed * this.dataref.zoomrange * 5000);
    }
    
    setTimeout(() => {
        if (isFirst && !this.dataref.iszoompanorama) {
            if (true) {
                this.setIntervalAnimationZero(-25, false, true, 30);
            }
            setTimeout(() => {
                //this.startTiltEffect();
            }, this.dataref.panoramaspeed * 2);
        }
    }, 500);
},

applyZoomInOutToAll = (img, zoom) => {
    img.classList.remove("zoom-outeffect");
    img.classList.remove("zoom-effect");
    img.classList.remove("zoom-effect_steptwo");
    img.classList.remove("zoom-effect_stepthree");
    setTimeout(() => {
        img.classList.add(zoom);
    }, 500);
    setTimeout(() => {
        img.classList.add("zoom-outeffect");
        img.classList.remove(zoom);
        setTimeout(() => {
            //if (toggleSwitch) {
                this.dataref.istilt = true;
                //this.startTiltEffect();
           // }
        }, 1000);
    }, 11000);
    setTimeout(() => {
        img.classList.remove("zoom-outeffect");
    }, 18000);
},

setIntervalAnimationZero = (count, isFirstInt, isSecondInt, speed) => {
    if (!this.dataref.iszoompanorama) {
        var counter = count;
        var timer = "";
        var timer = setInterval(() => {
            counter = counter - 0.04;
            if (Math.round(counter) == -49) {
                // counter--;
                // if (counter == -49) {
                clearInterval(timer);
                if (isSecondInt) {
                    this.setIntervalAnimation(counter, false, true, speed);
                }
            }
            var imageList = getElementByClass("banner__fpbannerimg");
            for (img of imageList) {
                applySetIntervalAnimationZero(counter, img);
            }
        }, speed);
    }
},

applySetIntervalAnimationZero = (counter, img) =>{
    img.style.left = counter + "%";
},

setIntervalAnimation = (count, isFirstInt, isSecondInt, speed) => {
    var counter = count;
    var timer = "";
    var timer = setInterval(() => {
        counter = counter + 0.04;
        if (Math.round(counter) == -25) {
            // counter++;
            // if (counter == -25) {
            clearInterval(timer);
            if (isFirstInt) {
                this.setIntervalAnimationZero(counter, false, false, speed);
            }
        }
        var imageList = getElementByClass("banner__fpbannerimg");
        for (img of imageList) {
            applySetIntervalAnimationZero(counter, img);
        }
    }, speed);
},

startTiltEffect();
setHeight();
zoomInOut(true, 500);