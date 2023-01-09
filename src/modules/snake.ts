//定义蛇的类
import ScorePanel from "./panel";
const panel =new ScorePanel()
class Snake {
    //表示蛇头的元素
    Element:HTMLElement;
    SnakeHead: HTMLElement;
    SnakeBody:HTMLCollection;
    constructor() {
        this.Element = document.getElementById('snake')!;
        this.SnakeHead = document.querySelector("#snake > div")!
        this.SnakeBody = this.Element.getElementsByTagName('div');
    }

    //定义获取蛇口坐标的方法
    get xAxis() {
        return this.SnakeHead.offsetLeft
    }

    get yAxis() {
        return this.SnakeHead.offsetTop
    }

    //定义设置蛇头坐标的方法
    set xAxis(value: number) {
        if (this.xAxis === value) {
            return;
        }
        //判断蛇是否撞墙就是判断蛇的坐标是否处于合法范围0-290
        if (this.xAxis < 0 || this.xAxis>290){
            throw new Error('蛇撞墙了，游戏结束')
        }
        if(this.SnakeBody[1] && (this.SnakeBody[1] as HTMLElement).offsetLeft===value){
            if(value > this.xAxis){
                value = this.xAxis -10
            }
            else{
                value =this.xAxis +10
            }
        }
        this.moveBody()

        this.SnakeHead.style.left = value + 'px';

        this.checkCrash()

    }

    set yAxis(value: number) {
        if (this.yAxis === value) {
            return;
        }
        //判断蛇是否撞墙就是判断蛇的坐标是否处于合法范围0-290
        if (this.yAxis < 0 || this.yAxis>290){
            throw new Error('蛇撞墙了，游戏结束')
        }
        if(this.SnakeBody[1] && (this.SnakeBody[1] as HTMLElement).offsetTop===value){
            if(value > this.yAxis){
                value = this.yAxis -10
            }
            else{
                value =this.yAxis +10
            }
        }

        this.moveBody()

        this.SnakeHead.style.top = value + 'px';

        this.checkCrash()
    }

    //定义蛇得分身体变长的方法
    addSnake() {
        document.getElementById('snake')!.insertAdjacentHTML("beforeend", "<div></div>")
    }

    //定义蛇身体变长的部分跟随头部移动的方法
    moveBody(){
        //将后边块设置为前一块的坐标
        console.log(this.SnakeBody.length);  
        for(var i =this.SnakeBody.length -1 ;i >0 ;i--){

            let x =(this.SnakeBody[i-1] as HTMLElement).offsetLeft;
            let y =(this.SnakeBody[i-1] as HTMLElement).offsetTop;
            // console.log(x,y);
            (this.SnakeBody[i] as HTMLElement).style.left = x + 'px';
            (this.SnakeBody[i] as HTMLElement).style.top = y + 'px';
        }
    }
    //定义检查蛇身体自撞的方法
    checkCrash(){
        //即检查蛇头坐标与任意一截身体坐标是否相等
        for(var i =1;i<this.SnakeBody.length;i++){
            let bodyInsertion = this.SnakeBody[i] as HTMLElement;
            if(this.xAxis == bodyInsertion.offsetLeft && this.yAxis == bodyInsertion.offsetTop){
                throw new Error('哎呀，不小心撞到自己了')
            }
        }
    }
}


export default Snake


