//游戏控制器，用于控制游戏中的操作行为
import Food from "./food";
import ScorePanel from "./panel";
import Snake from "./snake";


class GameControl{
    // 定义三个属性
    snake:Snake;
    food:Food;
    panel:ScorePanel;

    //创建一个属性储存移动方向
    direction='';

    //创建一个蛇是否存活的标识
    isLive = true;

    constructor(){
        this.snake = new Snake();
        this.food = new Food();
        this.panel = new ScorePanel()
    }

    //定义初始化游戏开始的方法
    init(){
        //绑定键盘按键事件;
        // console.log(this);;这里的this是当前对象即GameContril对象,
        document.addEventListener('keydown',this.fn.bind(this))
        this.move();

    }

    fn(event:KeyboardEvent){
            // console.log(event.key);
            //这里函数绑定的是dom的键盘事件，谁调用this指向谁，因此this指向#document，而这里需要修改GameControl的的direction,所以需要把fn的this指向修改到GameControl
            //赋值前要检测按键的合法性
            this.direction = event.key
            // console.log(this.direction);
            // console.log(this);       
    }
    //创建让蛇动起来的方法
    move(){
        //四种情况代表四种方向
        //ArrowUp  ArrowDown  ArrowDown ArrowRight
        let xAxis =this.snake.xAxis
        let yAxis =this.snake.yAxis
        switch(this.direction){
            case 'ArrowUp': 
                yAxis -=10;
                break;
            
            case 'ArrowDown': 
                yAxis +=10;
                break;
            
            case 'ArrowLeft': 
                xAxis -=10;
                break;
            
            case 'ArrowRight': 
                xAxis +=10;
                break;
        }
        //判断蛇是否得分
        if(this.isGetScore(xAxis,yAxis)){
            // console.log('!!!');
            //得分后要对分数进行+1
            this.panel.addScore()
            //同时得分后蛇的长度要加一
            this.snake.addSnake()
            //同时食物的位置也要随机修改
            this.food.change()
            // this.snake.moveBody()
            
        }
        //捕捉蛇是否撞墙
        try{
            this.snake.xAxis = xAxis;
            this.snake.yAxis = yAxis
        }catch(e:any){
            alert(e.message);
            this.isLive = false;
            
        }
        this.isLive?setTimeout(this.move.bind(this),300-(this.panel.level)*30):''
    }
    //判断蛇是否得分的方法
    isGetScore(xAxis:number,yAxis:number){
        //蛇头的坐标是否与食物的坐标相同，返回布尔值
        return xAxis === this.food.xAxios && yAxis ===this.food.yAxios

    }
}

export default GameControl;