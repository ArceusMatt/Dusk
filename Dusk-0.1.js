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
(defining this first out of everything cause i might use it below)
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

//dusk variables
const version = '0.1';
const pre = color.dkBlue() + '[' + color.gray() + 'Dusk' + color.dkBlue() + ']' + color.reset() + ' ';
var prefix = '!';
var cd = new Date;
var min = cd.getMinutes();
var text = '';
const getLang = ModPE.getLanguage();
var GUI;
var mclr = color.black();
var pList = [];
var isBool = 0;
var chnglog = '';
var itemurl = '';
var movable = false;
var ghost = false;

/*
this is the interface variables
*/
var background = android.graphics.Color.TRANSPARENT;
var btnColor = android.graphics.Color.parseColor('#93000000');
var stroke = android.graphics.Color.parseColor('#9d7ff2');
var btnText = android.graphics.Color.WHITE;
var btnTextSize = 10;
var mnuOri = 0;
var tcolor = android.graphics.Color.argb(180, 0, 255, 0);
var mclr = color.black();
var defcolor = android.graphics.Color.parseColor('#9d7ff2');
var hstroke = android.graphics.Color.parseColor('#7D65C1');

var background1 = 'transparent';
var btnColor1 = 'black';
var stroke1 = 'green';
var btnText1 = 'white';
var btnTextSize1 = 12;
var mnuOri1 = 0;
var tcolor1 = 'green';

/*settings*/
var bx1 = 0;
var by1 = 0;
var nx1 = 0;
var ny1 = 0;
/*combat*/
var bx2 = 0;
var by2 = 50;
var nx2 = 0;
var ny2 = 0;
/*movement*/
var bx3 = 0;
var by3 = 100;
var nx3 = 0;
var ny3 = 0;
/*player*/
var bx4 = 0;
var by4 = 150;
var nx4 = 0;
var ny4 = 0;
/*world*/
var bx5 = 0;
var by5 = 200;
var nx5 = 0;
var ny5 = 0;
/*other*/
var bx6 = 0;
var by6 = 250;
var nx6 = 0;
var ny6 = 0;

//module boolean(s) (defining these second cause i might use below)
//settings

//combat
var aimbot = false;
var armoresp = false;
var autoclick = false;
var autofood = false;
var autolog = false;
var autopot = false;
var autosword = false;
var blockhunt = false;
var fastEat = false;
var fightaura = false;
var grapple = false;
var hitbehind = false;
var hitbox = false;
var hitjump = false;
var hoveraura = false;
var mobaim = false;
var multiaim = false;
var sneakaura = false;
var tpaura = false;
//offline
//not yet...

//movement
var airwalk = false;
var autowalk = false;
var bunnyhop = false;
var crouch = false;
var elevator = false;
var fastbridge = false;
var fly1 = false;
var glide = false;
var highjump = false;
var jesus = false;
var jump = false;
var spider = false;
var sprint = false;
var tapjump = false;
var taptp = false;
var tower = false;
var twerk = false;
//player
var itemlist;
var autobreak = false;
var effect;
var enchant;
var fov;
var give;
var instabreak = false;
var itemlist;
var offhand;
var saddle = false;
var vel = false;
//render
var esp1 = false; //playerESP(line)
var esp2 = false; //playerESP(box)
var esp3 = false; //mobESP(box)
var esp4 = false; //customESP
var esp5 = false; //playerESP(particle)
var esp6 = false; //itemESP(box)
var esp7 = false; //customESP(particle)
//world
var bright = false;
var find = false;
var hud = false;
var nametags;
var ncoords;
var nuke = false;
var nullify1 = false;
var nullify2 = false;
var spawns;
var sspawn;
var teleport;
var xray = false;
//other
var browser;
var changelog;
var cid;
var cip;
var conn;
var devi;
var friend;
var iquery;
var msend;
var query;

var texts = ['chat.mute', 'chat.title', 'chestScreen.header.large', 'chestScreen.header.player', 'chestScreen.header.small', 'credits.skip', 'cauldronScreen.header', 'commandBlockScreen.title', 'Blockcontainer.beacon', 'container.brewing', 'container.chest', 'container.chestDouble', 'container.crafting', 'container.creative', 'container.dispenser', 'container.dropper', 'container.enchant', 'container.enderchest', 'container.furnace', 'container.hopper', 'container.inventory', 'container.minecart', 'container.stonecutter', 'container.shulkerbox', 'createWorldScreen.action.editLocal', 'createWorldScreen.action.local', 'createWorldScreen.action.realms', 'createWorldScreen.action.realmsReset', 'createWorldScreen.create', 'createWorldScreen.delete', 'createWorldScreen.deleteWorld', 'createWorldScreen.gameMode.adventure', 'createWorldScreen.gameMode.creative', 'createWorldScreen.gameMode.survival', 'createWorldScreen.header.local', 'createWorldScreen.header.realms', 'networkWorld.join', 'networkWorld.joinByCode', 'networkWorld.add_friend', 'networkWorld.add_server', 'networkWorld.add_label', 'networkWorld.lan_label', 'networkWorld.servers_label', 'networkWorld.friends_label', 'deathScreen.deleteWorld', 'deathScreen.quit', 'deathScreen.leaveServer', 'deathScreen.message', 'deathScreen.respawn', 'addExternalServerScreen.addServer', 'addExternalServerScreen.saveButtonLabel', 'addExternalServerScreen.playButtonLabel', 'addExternalServerScreen.removeButtonLabel', 'furnaceScreen.fuel', 'furnaceScreen.header', 'gameMode.adventure', 'gameMode.changed', 'gameMode.creative', 'gameMode.hardcore', 'gameMode.spectator', 'gameMode.survival', 'globalPauseScreen.quit', 'gui.accept', 'gui.achievements', 'gui.all', 'gui.back', 'gui.cancel', 'gui.clear', 'gui.close', 'gui.confirm', 'gui.default', 'gui.decline', 'gui.deleteWorldLong', 'gui.done', 'gui.down', 'gui.error', 'gui.exit', 'gui.exportWorld', 'gui.exportWorldLong', 'gui.exportTemplate', 'gui.copyWorld', 'gui.goBack', 'gui.importWorld', 'gui.minecraftWorld', 'gui.minecraftBundle', 'gui.login', 'gui.logout', 'gui.no', 'gui.none', 'gui.ok', 'gui.store', 'gui.continue', 'gui.pickWorld', 'gui.retry', 'gui.select', 'gui.stats', 'gui.tab', 'gui.toMenu', 'gui.up', 'gui.yes', 'gui.resourcepacks', 'gui.submit', 'gui.playOffline', 'gui.signIn', 'howtoplay.next', 'howtoplay.previous', 'menu.achievements', 'menu.convertingLevel', 'menu.copyright', 'menu.disconnect', 'menu.beta', 'menu.game', 'menu.generatingLevel', 'menu.generatingTerrain', 'menu.howToPlay', 'menu.loadingLevel', 'menu.multiplayer', 'menu.online', 'menu.options', 'menu.settings', 'menu.serverStore', 'menu.serverGenericName', 'menu.play', 'menu.playdemo', 'menu.playOnRealms', 'menu.quickplay', 'menu.quit', 'menu.resetdemo', 'menu.resourcepacks', 'menu.globalpacks', 'menu.storageManagement', 'menu.behaviors', 'menu.worldtemplates', 'menu.respawning', 'menu.returnToGame', 'menu.returnToMenu', 'menu.shareToLan', 'menu.simulating', 'menu.singleplayer', 'menu.store', 'menu.skins', 'menu.start', 'menu.switchingLevel', 'menu.makingBackup', 'menu.saving', 'multiplayer.connect', 'options.goBack', 'pauseScreen.back', 'pauseScreen.currentWorld', 'pauseScreen.header', 'pauseScreen.options', 'pauseScreen.quit', 'pauseScreen.secondaryClientLeave', 'pauseScreen.feed', 'pauseScreen.invite', 'pauseScreen.ipAddress', 'pauseScreen.title', 'pauseScreen.betaFeedback', 'playscreen.header.local', 'playscreen.header.realms', 'playscreen.new', 'playscreen.realms', 'playscreen.worlds', 'progressScreen.dialog.button.join', 'progressScreen.dialog.button.leave', 'progressScreen.dialog.button.retry', 'progressScreen.dialog.button.wait', 'selectServer.add', 'selectServer.delete', 'selectServer.deleteButton', 'selectServer.edit', 'selectServer.select', 'selectServer.title', 'selectWorld.tab.worlds', 'selectWorld.tab.realms', 'selectWorld.tab.friends', 'selectWorld.tab.classmates', 'selectWorld.tab.thirdParty', 'selectWorld.title', 'selectWorld.world', 'skin.New', 'xbox.signin', 'xbox.signout', 'addServer.add', 'externalServerScreen.addServer', 'externalServerScreen.addServer', 'externalServerScreen.header'];
//defining this third cause might use something above
var dusk = {
    sortSword: function (id) {
        switch (id) {
            case 268:
            case 283:
                return 5;
                break;
            case 272:
                return 6;
                break;
            case 267:
                return 7;
                break;
            case 276:
                return 8;
                break;
        }
    },
    sortPots: function (id, dam) {
        if (id == 438) {
            switch (dam) {
                case 21:
                    return 1;
                    break;
                case 22:
                    return 2;
                    break;
            }
        }
    },
    sortFood: function (id) {
        switch (id) {
            case 394:
            case 367:
                return 1;
                break;
            case 392:
                return 2;
                break;
            case 319:
            case 363:
            case 391:
            case 357:
            case 360:
                return 3;
                break;
            case 349:
            case 460:
            case 423:
            case 411:
            case 365:
                return 4;
                break;
            case 432:
                return 5;
                break;
            case 392:
            case 297:
            case 350:
                return 6;
                break;
            case 463:
            case 412:
            case 396:
                return 7;
                break;
            case 400:
            case 260:
            case 424:
                return 8;
                break;
            case 366:
            case 320:
            case 364:
                return 9;
                break;
            case 282:
            case 459:
                return 10;
                break;
            case 354:
            case 322:
                return 11;
                break;
            case 413:
                return 12;
                break;
            case 466:
                return 13;
                break;
        }
    },
    isSlapper: function (entity) {
        var eid = Entity.getEntityTypeId(entity);
        var name = Entity.getNameTag(entity);
        if (eid == 63) {
            if (name != null && name != undefined) {
                if (typeof (name) == 'string') {
                    if (name != '') {
                        if (name.length <= 16) {
                            //todo
                        }
                    }
                }
            }
        }
    },
    yawDir: function (where, yaw) {
        /*
        -45 & 45 = +z
        -135 & -44 = +x
        131 & -134 = -z
        45 & 130 = -x
        */
        //one of these are fucked. todo: fix em
        if (where == 0) {
            if (yaw >= -45 && yaw <= 45) {
                return true;
            }
        }
        if (where == 1) {
            if (yaw >= -135 && yaw <= -44) {
                return true;
            }
        }
        if (where == 2) {
            if (yaw >= 131 && yaw >= -134 && yaw != -135) {
                return true;
            }
        }
        if (where == 3) {
            if (yaw >= 45 && yaw <= 130) {
                return true;
            }
        }
    },
    //make sure to thread this (only)
    draw: function (x, y, z, mode) {
        for (var i = 0; i <= 30; i++) {
            Level.addParticle(ParticleType.flame, x, y, z, (getPlayerX() - x) / i, mode ? 0 : ((getPlayerY() - y) / i), (getPlayerZ() - z) / i, 1);
        }
    },
    randChar: function () {
        var char = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        return char[Math.floor(Math.random() * char.length)];
    },
    clean: function (name) {
        if (name != null) {
            name = name.toLowerCase().trim();
            if (name.match('§') || name.includes('§')) {
                var allColor = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'k', 'l', 'm', 'n', 'o', 'r'];
                allColor.forEach(function (entry) {
                    name = name.replace(new RegExp('\u00A7' + entry, 'g'), '');
                });
                return name;
            }
        }
    },
    addFriend: function (name) {
        var file = new java.io.File(android.os.Environment.getExternalStorageDirectory().getAbsolutePath() + '/dusk/friends', name);
        if (file.exists()) {
            android.widget.Toast.makeText(MainActivity, 'Friend already exists.', 1)
                .show();
        } else {
            var str = '';
            file.createNewFile();
            var fos = new java.io.FileOutputStream(file);
            fos.write(new java.lang.String(str).getBytes());
            android.widget.Toast.makeText(MainActivity, 'Friend added.', 1)
                .show();
        }
    },
    removeFriend: function (name) {
        var file = new java.io.File(android.os.Environment.getExternalStorageDirectory().getAbsolutePath() + '/dusk/friends', name);
        if (file.exists()) {
            file.delete();
            android.widget.Toast.makeText(MainActivity, 'Friend removed.', 1)
                .show();
        } else {
            android.widget.Toast.makeText(MainActivity, 'Friend does not exist.', 1)
                .show();
        }
    },
    isFriend: function (name) {
        var file = new java.io.File(android.os.Environment.getExternalStorageDirectory().getAbsolutePath() + '/dusk/friends', name);
        if (file.exists()) {
            return true;
        }
        for (var i = 0; i < pList.length; i++) {
            if (pList[i].match(String(name) + '') || pList[i].includes(String(name) + '')) {
                return true;
            } else {
                return false;
            }
        }
    },
    deleteCid: function () {
        var file = new java.io.File(android.os.Environment.getExternalStorageDirectory().getAbsolutePath() + '/games/com.mojang/minecraftpe', 'clientId.txt');
        if (file.exists()) {
            file.delete();
            android.widget.Toast.makeText(MainActivity, 'Client id deleted.', 1)
                .show();
        } else {
            android.widget.Toast.makeText(MainActivity, 'Client id does not exist.\nChange storage to external.', 1)
                .show();
        }
    },
    getClient: function () {
        var file = new java.io.File(android.os.Environment.getExternalStorageDirectory().getAbsolutePath() + '/games/com.mojang/minecraftpe', 'clientId.txt');
        if (file.exists()) {
            var readed = (new java.io.BufferedReader(new java.io.FileReader(file)));
            var data = new java.lang.StringBuilder();
            var string;
            while ((string = readed.readLine()) != null) {
                data.append(string);
                data.append('\n');
            }
            var clientId = data.toString();
            return clientId;
        } else {
            return 'none';
        }
    },
    sortGive: function (id, slot) {
        switch (slot) {
            case id:
                return 1;
                break;
        }
    },
    toast: function (text) {
        try {
            MainActivity.runOnUiThread(new java.lang.Runnable({
                run: function () {
                    var toast = android.widget.Toast.makeText(MainActivity, text, android.widget.Toast.LENGTH_LONG);
                    var layout = new android.widget.LinearLayout(MainActivity);

                    var tmsg = new android.widget.TextView(MainActivity);
                    tmsg.setText(text);
                    tmsg.setTextColor(android.graphics.Color.WHITE);
                    tmsg.setGravity(android.view.Gravity.CENTER);
                    tmsg.setTextSize(15);
                    tmsg.setPadding(10, 10, 10, 10);
                    layout.addView(tmsg);

                    var bg = new android.graphics.drawable.GradientDrawable();
                    bg.setColor(android.graphics.Color.parseColor('#93000000'));
                    bg.setStroke(3, stroke);
                    layout.setBackground(bg);
                    toast.setView(layout);
                    toast.show();
                }
            }));
        } catch (error) {
            print(error);
        }
    },
    //credit to godsoft029 for setWrenchVisible(bool);
    setWrenchVisible: function (isVisible) {
        let f = MainActivity.getClass().getDeclaredField('hoverCar');
        f.setAccessible(true);
        let hoverCar = f.get(MainActivity);
        if (hoverCar != null) hoverCar.setVisible(isVisible);
    },
    panic: function (bol) {
        if (bol) {
            if (GUI != undefined) GUI.dismiss();
            dusk.setWrenchVisible(false);
            dusk.toast('Panic mode active.\n(Reopen pause screen to toggle.)');
        } else {
            showMenuBtn();
            dusk.setWrenchVisible(true);
            dusk.toast('Panic mode disabled.\n(Reopen pause screen to toggle.)');
        }
    },
    load: function () {
        var dir = new java.io.File(android.os.Environment.getExternalStorageDirectory().getAbsolutePath() + '/dusk');
        if (!dir.exists() || !dir.isDirectory()) {
            dir.mkdir();
        }
        var dir2 = new java.io.File(android.os.Environment.getExternalStorageDirectory().getAbsolutePath() + '/dusk/friends');
        if (!dir2.exists() || !dir2.isDirectory()) {
            dir2.mkdir();
        }
        pList.push('arceusmatt');
    },
    isDefined: function (str) {
        if (str != undefined) {
            if (typeof (str) != 'undefined' || str != 0 || str != null || str != '') {
                return true;
            } else {
                return false;
            }
        }
    }
}
dusk.load();

for (var i = 0; i < texts.length; i++) {
    ModPE.langEdit(texts[i], mclr + ModPE.getI18n(texts[i]));
}

/*
http://github.edroidthedev.com/?repo=ModPEAddon/ModPE/getFromUrl.js
*/
ModPE.getFromUrl = function (url, errs) {
    errs = errs || 0;
    try {
        var url = new java.net.URL(url);
        var connection = url.openConnection();
        var inputStream = connection.getInputStream();
        var data = '';
        var bufferedReader = new java.io.BufferedReader(new java.io.InputStreamReader(inputStream));
        var line = '';
        while ((line = bufferedReader.readLine()) != null) {
            data += line + '\n';
        }
        var result = data.toString();
        bufferedReader.close();
    } catch (err) {
        result = (errs ? 'Getting URL Failed. Error: ' + err : 0);
        print('Error ModPE.getFromUrl(): ' + err);
    } finally {
        if (result == null || result == undefined) {
            result = (errs ? 'Result is null' : 0);
        }
    }
    return result;
};
ModPE.JSON = {
    parse: function (str) {
        return Function('return ' + str)();
    }
};

function getUpdate() {
    /*var url = 'https://github.com/ArceusMatt/Dusk/blob/master/version.json';
    var content = ModPE.getFromUrl(url);
    if (dusk.isDefined(content)) {
        var json = JSON.parse(content);
        var newupdate = json.version;
        isBool = json.isAlive;
        chnglog = json.urls.changelog;
        itemurl = json.urls.items;
        if (dusk.isDefined(newupdate)) {
            var jfile = new java.io.File(android.os.Environment.getExternalStorageDirectory().getAbsolutePath() + '/Android/data/net.zhuoweizhang.mcpelauncher/cache/http', 'journal');
            if (jfile.exists()) jfile.delete();
            if (version != newupdate) {
                //update(newupdate);
                print('New update!');
            } else {
                print('No new update.');
            }
        }
    } else {
        dusk.toast('Update failed.');
    }*/
}
getUpdate();

//decide if i should even make this many requests...
function getChangelog(url) {

}
getChangelog(chnglog);

function getItemList(url) {

}
getItemList(itemurl);

/*
func styleButton() 
func styleInput()
made by ArceusMatt & godsoft029
*/
function styleButton(mod, desc) {
    let button = new android.widget.Button(ctx);
    button.setTextColor(btnText);
    button.setTextSize(btnTextSize);
    button.setFocusableInTouchMode(false);
    button.setTransformationMethod(null);
    button.setSoundEffectsEnabled(true);
    button.setAlpha(1);
    var buttonBg = new android.graphics.drawable.GradientDrawable();
    buttonBg.setColor(btnColor);
    buttonBg.setStroke(2, stroke);
    //buttonBg.setCornerRadius(11);
    button.setBackgroundDrawable(buttonBg);
    if (typeof (mod) != 'undefined') button.setText(mod);
    button.setOnLongClickListener(new android.view.View.OnLongClickListener({
        onLongClick: function (v) {
            if (typeof (desc) != 'undefined') android.widget.Toast.makeText(MainActivity, desc, 1)
                .show();
            return true;
        }
    }));
    return button;
}

function styleInput() {
    let input = new android.widget.EditText(ctx);
    input.setTextColor(android.graphics.Color.BLACK);
    var inputBg = new android.graphics.drawable.GradientDrawable(); inputBg.setColor(android.graphics.Color.WHITE);
    inputBg.setStroke(3, stroke);
    inputBg.setCornerRadius(10);
    input.setBackgroundDrawable(inputBg);
    return input;
}

function dip2px(dips) {
    return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}

function headerButton(mod, layout) {
    let button = new android.widget.Button(ctx);
    button.setTextColor(android.graphics.Color.WHITE);
    button.setTextSize(btnTextSize);
    button.setFocusableInTouchMode(false);
    button.setTransformationMethod(null);
    button.setSoundEffectsEnabled(true);
    button.setWidth(dip2px(70));
    button.setHeight(dip2px(35));
    var params = android.widget.LinearLayout.LayoutParams(dip2px(70), dip2px(35), 1);
    button.setLayoutParams(params);
    button.setAlpha(100);
    var buttonBg = new android.graphics.drawable.GradientDrawable();
    buttonBg.setColor(defcolor);
    buttonBg.setStroke(2, hstroke);
    button.setBackgroundDrawable(buttonBg);
    if (typeof (mod) != 'undefined') button.setText(mod);
    return button;
}

function customHeader(bx, by, bgravity, orien) {
    let layout = new android.widget.LinearLayout(MainActivity);
    layout.setOrientation(orien);
    let pop = new android.widget.PopupWindow(layout, dip2px(70), dip2px(35));
    pop.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
    pop.showAtLocation(MainActivity.getWindow()
        .getDecorView(), bgravity, bx, by);
    return [layout, pop];
}

function customLayout(bx, by, bgravity, orien) {
    let layout = new android.widget.LinearLayout(MainActivity);
    let scroll = new android.widget.ScrollView(MainActivity);
    let layout1 = new android.widget.LinearLayout(MainActivity);
    layout.setOrientation(orien);
    layout1.setOrientation(orien);
    let pop = new android.widget.PopupWindow(layout1, dip2px(70), MainActivity.getWindowManager().getDefaultDisplay().getHeight() / 2);
    pop.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
    pop.showAtLocation(MainActivity.getWindow()
        .getDecorView(), bgravity, bx, by);
    pop.update(bx, by, -1, -1);
    return [layout, pop, layout1, scroll];
}

function settingsHeader() {
    MainActivity.runOnUiThread(new java.lang.Runnable({
        run: function () {
            var bgravity = android.view.Gravity.RIGHT || android.view.Gravity.TOP;
            var headLayout1 = new customHeader(bx1, by1, bgravity, 1);
            var isMoving = false;

            var menuBtn = new headerButton();
            if (!ghost) menuBtn.setText('Settings');
            menuBtn.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function (v) {
                    if (isMoving == false) {
                        settings_menu(parseInt(nx1) - parseInt(bx1), parseInt(ny1) - parseInt(by1), bgravity, 1);
                        headLayout1[1].dismiss();
                    }
                }
            }));
            menuBtn.setOnTouchListener(new android.view.View.OnTouchListener({
                onTouch: function (v, e) {
                    if (e.getAction() == android.view.MotionEvent.ACTION_DOWN) {
                        bx1 = e.getX();
                        by1 = e.getY();
                    }
                    if (e.getAction() == android.view.MotionEvent.ACTION_MOVE) {
                        isMoving = true;
                        nx1 = e.getRawX();
                        ny1 = e.getRawY();
                        headLayout1[1].update(parseInt(nx1) - parseInt(bx1), parseInt(ny1) - parseInt(by1), -1, -1);
                    }
                    if (e.getAction() == android.view.MotionEvent.ACTION_UP || android.view.MotionEvent.ACTION_DOWN) {
                        isMoving = false;
                    }
                    return false;
                }
            }));
            headLayout1[0].addView(menuBtn);

        }
    }))
}

function combatHeader() {
    MainActivity.runOnUiThread(new java.lang.Runnable({
        run: function () {
            var bgravity = android.view.Gravity.RIGHT || android.view.Gravity.TOP;
            var headLayout2 = new customHeader(bx2, by2, bgravity, 1);
            var isMoving = false;

            var menuBtn = new headerButton();
            if (!ghost) menuBtn.setText('Combat');
            menuBtn.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function (v) {
                    if (isMoving == false) {
                        combat_menu(parseInt(nx2) - parseInt(bx2), parseInt(ny2) - parseInt(by2), bgravity, 1);
                        headLayout2[1].dismiss();
                    }
                }
            }));
            menuBtn.setOnTouchListener(new android.view.View.OnTouchListener({
                onTouch: function (v, e) {
                    if (e.getAction() == android.view.MotionEvent.ACTION_DOWN) {
                        bx2 = e.getX();
                        by2 = e.getY();
                    }
                    if (e.getAction() == android.view.MotionEvent.ACTION_MOVE) {
                        isMoving = true;
                        nx2 = e.getRawX();
                        ny2 = e.getRawY();
                        headLayout2[1].update(parseInt(nx2) - parseInt(bx2), parseInt(ny2) - parseInt(by2), -1, -1);
                    }
                    if (e.getAction() == android.view.MotionEvent.ACTION_UP || android.view.MotionEvent.ACTION_DOWN) {
                        isMoving = false;
                    }
                    return false;
                }
            }));
            headLayout2[0].addView(menuBtn);

        }
    }))
}

function movementHeader() {
    MainActivity.runOnUiThread(new java.lang.Runnable({
        run: function () {
            var bgravity = android.view.Gravity.RIGHT || android.view.Gravity.TOP;
            var headLayout3 = new customHeader(bx3, by3, bgravity, 1);
            var isMoving = false;

            var menuBtn = new headerButton();
            if (!ghost) menuBtn.setText('Movement');
            menuBtn.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function (v) {
                    if (isMoving == false) {
                        movement_menu(parseInt(nx3) - parseInt(bx3), parseInt(ny3) - parseInt(by3), bgravity, 1);
                        headLayout3[1].dismiss();
                    }
                }
            }));
            menuBtn.setOnTouchListener(new android.view.View.OnTouchListener({
                onTouch: function (v, e) {
                    if (e.getAction() == android.view.MotionEvent.ACTION_DOWN) {
                        bx3 = e.getX();
                        by3 = e.getY();
                    }
                    if (e.getAction() == android.view.MotionEvent.ACTION_MOVE) {
                        isMoving = true;
                        nx3 = e.getRawX();
                        ny3 = e.getRawY();
                        headLayout3[1].update(parseInt(nx3) - parseInt(bx3), parseInt(ny3) - parseInt(by3), -1, -1);
                    }
                    if (e.getAction() == android.view.MotionEvent.ACTION_UP || android.view.MotionEvent.ACTION_DOWN) {
                        isMoving = false;
                    }
                    return false;
                }
            }));
            headLayout3[0].addView(menuBtn);

        }
    }))
}

function playerHeader() {
    MainActivity.runOnUiThread(new java.lang.Runnable({
        run: function () {
            var bgravity = android.view.Gravity.RIGHT || android.view.Gravity.TOP;
            var headLayout4 = new customHeader(bx4, by4, bgravity, 1);
            var isMoving = false;

            var menuBtn = new headerButton();
            if (!ghost) menuBtn.setText('Player');
            menuBtn.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function (v) {
                    if (isMoving == false) {
                        player_menu(parseInt(nx4) - parseInt(bx4), parseInt(ny4) - parseInt(by4), bgravity, 1);
                        headLayout4[1].dismiss();
                    }
                }
            }));
            menuBtn.setOnTouchListener(new android.view.View.OnTouchListener({
                onTouch: function (v, e) {
                    if (e.getAction() == android.view.MotionEvent.ACTION_DOWN) {
                        bx4 = e.getX();
                        by4 = e.getY();
                    }
                    if (e.getAction() == android.view.MotionEvent.ACTION_MOVE) {
                        isMoving = true;
                        nx4 = e.getRawX();
                        ny4 = e.getRawY();
                        headLayout4[1].update(parseInt(nx4) - parseInt(bx4), parseInt(ny4) - parseInt(by4), -1, -1);
                    }
                    if (e.getAction() == android.view.MotionEvent.ACTION_UP || android.view.MotionEvent.ACTION_DOWN) {
                        isMoving = false;
                    }
                    return false;
                }
            }));
            headLayout4[0].addView(menuBtn);

        }
    }))
}

function worldHeader() {
    MainActivity.runOnUiThread(new java.lang.Runnable({
        run: function () {
            var bgravity = android.view.Gravity.RIGHT || android.view.Gravity.TOP;
            var headLayout5 = new customHeader(bx5, by5, bgravity, 1);
            var isMoving = false;

            var menuBtn = new headerButton();
            if (!ghost) menuBtn.setText('World');
            menuBtn.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function (v) {
                    if (isMoving == false) {
                        world_menu(parseInt(nx5) - parseInt(bx5), parseInt(ny5) - parseInt(by5), bgravity, 1);
                        headLayout5[1].dismiss();
                    }
                }
            }));
            menuBtn.setOnTouchListener(new android.view.View.OnTouchListener({
                onTouch: function (v, e) {
                    if (e.getAction() == android.view.MotionEvent.ACTION_DOWN) {
                        bx5 = e.getX();
                        by5 = e.getY();
                    }
                    if (e.getAction() == android.view.MotionEvent.ACTION_MOVE) {
                        isMoving = true;
                        nx5 = e.getRawX();
                        ny5 = e.getRawY();
                        headLayout5[1].update(parseInt(nx5) - parseInt(bx5), parseInt(ny5) - parseInt(by5), -1, -1);
                    }
                    if (e.getAction() == android.view.MotionEvent.ACTION_UP || android.view.MotionEvent.ACTION_DOWN) {
                        isMoving = false;
                    }
                    return false;
                }
            }));
            headLayout5[0].addView(menuBtn);

        }
    }))
}

function otherHeader() {
    MainActivity.runOnUiThread(new java.lang.Runnable({
        run: function () {
            var bgravity = android.view.Gravity.RIGHT || android.view.Gravity.TOP;
            var headLayout6 = new customHeader(bx6, by6, bgravity, 1);
            var isMoving = false;

            var menuBtn = new headerButton();
            if (!ghost) menuBtn.setText('Other');
            menuBtn.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function (v) {
                    if (isMoving == false) {
                        other_menu(parseInt(nx6) - parseInt(bx6), parseInt(ny6) - parseInt(by6), bgravity, 1);
                        headLayout6[1].dismiss();
                    }
                }
            }));
            menuBtn.setOnTouchListener(new android.view.View.OnTouchListener({
                onTouch: function (v, e) {
                    if (e.getAction() == android.view.MotionEvent.ACTION_DOWN) {
                        bx6 = e.getX();
                        by6 = e.getY();
                    }
                    if (e.getAction() == android.view.MotionEvent.ACTION_MOVE) {
                        isMoving = true;
                        nx6 = e.getRawX();
                        ny6 = e.getRawY();
                        headLayout6[1].update(parseInt(nx6) - parseInt(bx6), parseInt(ny6) - parseInt(by6), -1, -1);
                    }
                    if (e.getAction() == android.view.MotionEvent.ACTION_UP || android.view.MotionEvent.ACTION_DOWN) {
                        isMoving = false;
                    }
                    return false;
                }
            }));
            headLayout6[0].addView(menuBtn);

        }
    }))
}

function spawnHeaders() {
    settingsHeader();
    combatHeader();
    movementHeader();
    playerHeader();
    worldHeader();
    otherHeader();
}
spawnHeaders();

function settings_menu(bx1, by1, bgravity, orien) {
    MainActivity.runOnUiThread(new java.lang.Runnable({
        run: function () {

            var settingLayout1 = new customLayout(bx1, by1, bgravity, orien);
            var settingLayout = settingLayout1[0];
            var settings = settingLayout1[1];

            var header = settingLayout1[0];
            var exit = new headerButton('Settings', settingLayout);
            exit.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function (v) {
                    settings.dismiss();
                    settingsHeader();
                }
            }));
            header.addView(exit);
            settingLayout1[3].addView(settingLayout1[0]);
            settingLayout1[2].addView(settingLayout1[3]);

            var test1 = new styleButton('Example 1', 'Just example.');
            settingLayout.addView(test1);

            var test2 = new styleButton('Example 2', 'Just example.');
            settingLayout.addView(test2);

        }
    }));
}

function combat_menu(bx2, by2, bgravity, orien) {
    MainActivity.runOnUiThread(new java.lang.Runnable({
        run: function () {

            var cLayout1 = new customLayout(bx2, by2, bgravity, orien);
            var cLayout = cLayout1[0];
            var mods = cLayout1[1];
            var header = cLayout1[2];

            var header = cLayout1[0];
            var exit = new headerButton('Combat', cLayout);
            exit.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function (v) {
                    mods.dismiss();
                    combatHeader();
                }
            }));
            header.addView(exit);
            cLayout1[3].addView(cLayout1[0]);
            cLayout1[2].addView(cLayout1[3]);

            var test = new styleButton('Example 1', 'Just example.');
            cLayout.addView(test);

            var test1 = new styleButton('Example 2', 'Just example.');
            cLayout.addView(test1);

            var test2 = new styleButton('Example 3', 'Just example.');
            cLayout.addView(test2);

            var test3 = new styleButton('Example 4', 'Just example.');
            cLayout.addView(test3);

            var test4 = new styleButton('Example 5', 'Just example.');
            cLayout.addView(test4);

            var test5 = new styleButton('Example 6', 'Just example.');
            cLayout.addView(test5);

            var test6 = new styleButton('Example 7', 'Just example.');
            cLayout.addView(test6);

        }
    }));
}

function movement_menu(bx3, by3, bgravity, orien) {
    MainActivity.runOnUiThread(new java.lang.Runnable({
        run: function () {

            var mLayout1 = new customLayout(bx3, by3, bgravity, orien);
            var mLayout = mLayout1[0];
            var movement = mLayout1[1];
            var header = mLayout1[2];

            var header = mLayout1[0];
            var exit = new headerButton('Movement', mLayout);
            exit.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function (v) {
                    movement.dismiss();
                    movementHeader();
                }
            }));
            header.addView(exit);
            mLayout1[3].addView(mLayout1[0]);
            mLayout1[2].addView(mLayout1[3]);

            var test = new styleButton('Example 1', 'Just example.');
            mLayout.addView(test);

            var test1 = new styleButton('Example 2', 'Just example.');
            mLayout.addView(test1);

            var test2 = new styleButton('Example 3', 'Just example.');
            mLayout.addView(test2);

            var test3 = new styleButton('Example 4', 'Just example.');
            mLayout.addView(test3);

            var test4 = new styleButton('Example 5', 'Just example.');
            mLayout.addView(test4);

            var test5 = new styleButton('Example 6', 'Just example.');
            mLayout.addView(test5);

            var test6 = new styleButton('Example 7', 'Just example.');
            mLayout.addView(test6);

        }
    }));
}

function player_menu(bx4, by4, bgravity, orien) {
    MainActivity.runOnUiThread(new java.lang.Runnable({
        run: function () {

            var pLayout1 = new customLayout(bx4, by4, bgravity, orien);
            var pLayout = pLayout1[0];
            var players = pLayout1[1];
            var header = pLayout1[2];

            var header = pLayout1[0];
            var exit = new headerButton('Player', pLayout);
            exit.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function (v) {
                    players.dismiss();
                    playerHeader();
                }
            }));
            header.addView(exit);
            pLayout1[3].addView(pLayout1[0]);
            pLayout1[2].addView(pLayout1[3]);

            var test = new styleButton('Example 1', 'Just example.');
            pLayout.addView(test);

            var test1 = new styleButton('Example 2', 'Just example.');
            pLayout.addView(test1);

            var test2 = new styleButton('Example 3', 'Just example.');
            pLayout.addView(test2);

            var test3 = new styleButton('Example 4', 'Just example.');
            pLayout.addView(test3);

            var test4 = new styleButton('Example 5', 'Just example.');
            pLayout.addView(test4);

            var test5 = new styleButton('Example 6', 'Just example.');
            pLayout.addView(test5);

            var test6 = new styleButton('Example 7', 'Just example.');
            pLayout.addView(test6);

        }
    }));
}

function world_menu(bx5, by5, bgravity, orien) {
    MainActivity.runOnUiThread(new java.lang.Runnable({
        run: function () {

            var wLayout1 = new customLayout(bx5, by5, bgravity, orien);
            var wLayout = wLayout1[0];
            var worlds = wLayout1[1];
            var header = wLayout1[2];

            var header = wLayout1[0];
            var exit = new headerButton('World', wLayout);
            exit.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function (v) {
                    worlds.dismiss();
                    worldHeader();
                }
            }));
            header.addView(exit);
            wLayout1[3].addView(wLayout1[0]);
            wLayout1[2].addView(wLayout1[3]);

            var test = new styleButton('Example 1', 'Just example.');
            wLayout.addView(test);

            var test1 = new styleButton('Example 2', 'Just example.');
            wLayout.addView(test1);

            var test2 = new styleButton('Example 3', 'Just example.');
            wLayout.addView(test2);

            var test3 = new styleButton('Example 4', 'Just example.');
            wLayout.addView(test3);

            var test4 = new styleButton('Example 5', 'Just example.');
            wLayout.addView(test4);

            var test5 = new styleButton('Example 6', 'Just example.');
            wLayout.addView(test5);

            var test6 = new styleButton('Example 7', 'Just example.');
            wLayout.addView(test6);

        }
    }));
}

function other_menu(bx6, by6, bgravity, orien) {
    MainActivity.runOnUiThread(new java.lang.Runnable({
        run: function () {

            var oLayout1 = new customLayout(bx6, by6, bgravity, orien);
            var oLayout = oLayout1[0];
            var others = oLayout1[1];
            var header = oLayout1[2];

            var header = oLayout1[0];
            var exit = new headerButton('Other', oLayout);
            exit.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function (v) {
                    others.dismiss();
                    otherHeader();
                }
            }));
            header.addView(exit);
            oLayout1[3].addView(oLayout1[0]);
            oLayout1[2].addView(oLayout1[3]);

            var test = new styleButton('Example 1', 'Just example.');
            oLayout.addView(test);

            var test1 = new styleButton('Example 2', 'Just example.');
            oLayout.addView(test1);

            var test2 = new styleButton('Example 3', 'Just example.');
            oLayout.addView(test2);

            var test3 = new styleButton('Example 4', 'Just example.');
            oLayout.addView(test3);

            var test4 = new styleButton('Example 5', 'Just example.');
            oLayout.addView(test4);

            var test5 = new styleButton('Example 6', 'Just example.');
            oLayout.addView(test5);

            var test6 = new styleButton('Example 7', 'Just example.');
            oLayout.addView(test6);

        }
    }));
}
