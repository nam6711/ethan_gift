"use strict";

// global vars
const media = {};
let menu;
let frame;

function preload() {
    const menu_location = "./media";
    media.menu_overlay = loadImage(`${menu_location}/menu_overlay.jpg`);
}

function setup() {
    createCanvas(windowHeight * 1.3333, windowHeight);
    noSmooth();

    // create menu
    const menu_pos = {x: 0, y: height * .75};
    const menu_dimensions = {width: width, height: height * .25};
    menu = new Menu(media.menu_overlay, menu_pos, menu_dimensions);
    
    const frame_pos = {x: 0, y: 0};
    const frame_dimensions = {width: width, height: height * .75};
    frame = new ProvinceEntrance(frame_pos, frame_dimensions);
}

function draw() {
    background(0);
    // draw frame first
    frame.display();

    // menu next
    menu.display();
}

function mouseClicked() {
    if (frame.is_inside())
        frame.mouse_clicked();
    if (menu.is_inside())
        menu.mouse_clicked();
}