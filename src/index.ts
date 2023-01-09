import './style/index.less'

//注意使用ts编写代码的时候要始终保持面对对象的思想
//引入模块
// import Food from './modules/food';
// import ScorePanel from './modules/panel';
// import Snake from './modules/snake';
import GameControl from './modules/GameControl'

const start = new GameControl()
start.init()
// // 测试代码
//     const food =new Food()
//     console.log(food.xAxios,food.yAxios);
//     food.change()

// // 测试代码
//     const scoree=new ScorePanel()
//     setInterval(()=>{
//         scoree.addScore()
//     },1000);

// //测试代码
//     const snake =new Snake()
//     console.log(snake.SnakeHead);
//     snake.addSnake()


