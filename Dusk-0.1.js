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

//dusk variables
const version = '0.1';
const pre = color.dkBlue() + '[' + color.gray() + 'Dusk' + color.dkBlue() + ']' + color.reset() + ' ';
var prefix = '!';
var cd = new Date;
var min = cd.getMinutes();
var text = '';
const getLang = ModPE.getLanguage();
var GUI;
var mclr = color.dkGray();

//module boolean(s)
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

var texts = ["chat.mute", "chat.title", "chestScreen.header.large", "chestScreen.header.player", "chestScreen.header.small", "credits.skip", "cauldronScreen.header", "commandBlockScreen.title", "Blockcontainer.beacon", "container.brewing", "container.chest", "container.chestDouble", "container.crafting", "container.creative", "container.dispenser", "container.dropper", "container.enchant", "container.enderchest", "container.furnace", "container.hopper", "container.inventory", "container.minecart", "container.stonecutter", "container.shulkerbox", "createWorldScreen.action.editLocal", "createWorldScreen.action.local", "createWorldScreen.action.realms", "createWorldScreen.action.realmsReset", "createWorldScreen.create", "createWorldScreen.delete", "createWorldScreen.deleteWorld", "createWorldScreen.gameMode.adventure", "createWorldScreen.gameMode.creative", "createWorldScreen.gameMode.survival", "createWorldScreen.header.local", "createWorldScreen.header.realms", "networkWorld.join", "networkWorld.joinByCode", "networkWorld.add_friend", "networkWorld.add_server", "networkWorld.add_label", "networkWorld.lan_label", "networkWorld.servers_label", "networkWorld.friends_label", "deathScreen.deleteWorld", "deathScreen.quit", "deathScreen.leaveServer", "deathScreen.message", "deathScreen.respawn", "addExternalServerScreen.addServer", "addExternalServerScreen.saveButtonLabel", "addExternalServerScreen.playButtonLabel", "addExternalServerScreen.removeButtonLabel", "furnaceScreen.fuel", "furnaceScreen.header", "gameMode.adventure", "gameMode.changed", "gameMode.creative", "gameMode.hardcore", "gameMode.spectator", "gameMode.survival", "globalPauseScreen.quit", "gui.accept", "gui.achievements", "gui.all", "gui.back", "gui.cancel", "gui.clear", "gui.close", "gui.confirm", "gui.default", "gui.decline", "gui.deleteWorldLong", "gui.done", "gui.down", "gui.error", "gui.exit", "gui.exportWorld", "gui.exportWorldLong", "gui.exportTemplate", "gui.copyWorld", "gui.goBack", "gui.importWorld", "gui.minecraftWorld", "gui.minecraftBundle", "gui.login", "gui.logout", "gui.no", "gui.none", "gui.ok", "gui.store", "gui.continue", "gui.pickWorld", "gui.retry", "gui.select", "gui.stats", "gui.tab", "gui.toMenu", "gui.up", "gui.yes", "gui.resourcepacks", "gui.submit", "gui.playOffline", "gui.signIn", "howtoplay.next", "howtoplay.previous", "menu.achievements", "menu.convertingLevel", "menu.copyright", "menu.disconnect", "menu.beta", "menu.game", "menu.generatingLevel", "menu.generatingTerrain", "menu.howToPlay", "menu.loadingLevel", "menu.multiplayer", "menu.online", "menu.options", "menu.settings", "menu.serverStore", "menu.serverGenericName", "menu.play", "menu.playdemo", "menu.playOnRealms", "menu.quickplay", "menu.quit", "menu.resetdemo", "menu.resourcepacks", "menu.globalpacks", "menu.storageManagement", "menu.behaviors", "menu.worldtemplates", "menu.respawning", "menu.returnToGame", "menu.returnToMenu", "menu.shareToLan", "menu.simulating", "menu.singleplayer", "menu.store", "menu.skins", "menu.start", "menu.switchingLevel", "menu.makingBackup", "menu.saving", "multiplayer.connect", "options.goBack", "pauseScreen.back", "pauseScreen.currentWorld", "pauseScreen.header", "pauseScreen.options", "pauseScreen.quit", "pauseScreen.secondaryClientLeave", "pauseScreen.feed", "pauseScreen.invite", "pauseScreen.ipAddress", "pauseScreen.title", "pauseScreen.betaFeedback", "playscreen.header.local", "playscreen.header.realms", "playscreen.new", "playscreen.realms", "playscreen.worlds", "progressScreen.dialog.button.join", "progressScreen.dialog.button.leave", "progressScreen.dialog.button.retry", "progressScreen.dialog.button.wait", "selectServer.add", "selectServer.delete", "selectServer.deleteButton", "selectServer.edit", "selectServer.select", "selectServer.title", "selectWorld.tab.worlds", "selectWorld.tab.realms", "selectWorld.tab.friends", "selectWorld.tab.classmates", "selectWorld.tab.thirdParty", "selectWorld.title", "selectWorld.world", "skin.New", "xbox.signin", "xbox.signout", "addServer.add", "externalServerScreen.addServer", "externalServerScreen.addServer", "externalServerScreen.header"];

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
    }
}

for (var i = 0; i < texts.length; i++) {
    ModPE.langEdit(texts[i], mclr + ModPE.getI18n(texts[i]));
}
