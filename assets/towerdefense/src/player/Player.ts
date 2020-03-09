// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;
@ccclass
class Player extends cc.Component {
    static ATTR = {
        // MAX_GOLD : 'MAX_GOLD',
        // SEARCH_TOOL : 'SEARCH_TOOL',
        // DIGGER_TOOL : 'DIGGER_TOOL',
        // TIME_TOOL : 'TIME_TOOL',
    }

    static ATTR_DEFAULT = {
        // MAX_GOLD : 0,
        // SEARCH_TOOL : 0,
        // DIGGER_TOOL : 0,
        // TIME_TOOL : 0
    }

    static ATTR_NAME = {
        // SEARCH_TOOL: "【放大镜】",
        // DIGGER_TOOL: "【铲子】",
        // TIME_TOOL: "【时间】",
    }

    static SPECIAL_ATTR = {
        // SIGN_DATA : 'SIGN_DATA',
        // MAX_SCORE_TIME : 'MAX_SCORE_TIME',
        // TURNPLATE_PLAY_TIMES : 'TURNPLATE_PLAY_TIMES',
        // FIRST_PLAY : 'FIRST_PLAY',
    }

    onLoad(){
    }
}

export = Player;
