var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
/*
Grab current activity the launcher is running on.
https://github.com/zhuowei/MCPELauncher/blob/master/src/com/mojang/minecraftpe/MainActivity.java
This global variable ctx is used to run things on this activity.
Mostly will be used to display graphical user interface(s)
Since it seems more logical to name it MainActivity instead of ctx & ctx is a global variable, i will.
*/
var MainActivity = ctx;

/*
Made by ArceusMatt (c)
copyright 2019 all rights reserved.

Dusk is property of ArceusMatt & is under no open-source license...
thus; you may not re-sell, re-distribute, or claim/copy any content without permission.

Use the following link to share this software.
https://arceusmatt.github.io/dusk.html
*/

//todo decide if the client shall be premium or open-source.

/*
example:
color.black() returns §0 //black
(this code may change later on to randomize colors easier.)
*/
var color = {
    black: function () {
        return '§0';
    },
    dkBlue: function () {
        return '§1';
    },
    dkGreen: function () {
        return '§2';
    },
    dkAqua: function () {
        return '§3';
    },
    dkRed: function () {
        return '§4';
    },
    dkPurple: function () {
        return '§5';
    },
    gold: function () {
        return '§6';
    },
    gray: function () {
        return '§7';
    },
    dkGray: function () {
        return '§8';
    },
    blue: function () {
        return '§9';
    },
    green: function () {
        return '§a';
    },
    aqua: function () {
        return '§b';
    },
    red: function () {
        return '§c';
    },
    ltPurple: function () {
        return '§d';
    },
    yellow: function () {
        return '§e';
    },
    white: function () {
        return '§f';
    },
    crypt: function () {
        return '§k';
    },
    bold: function () {
        return '§l';
    },
    italic: function () {
        return '§o';
    },
    reset: function () {
        return '§r';
    },
    rand: function () {
        var colors = ['§1', '§2', '§3', '§4', '§5', '§6', '§7', '§8', '§9', '§0', '§a', '§b', '§c', '§d', '§e', '§f'];
        return colors[Math.floor(Math.random() * colors.length)];
    }
}
