//定义表示计分的类
const maxLevel =10;
class ScorePanel{
    score=0;
    level=1;
    scoreEl:HTMLElement;
    levelEl:HTMLElement;

    constructor(){
        this.scoreEl = document.getElementById('scores')!;
        this.levelEl = document.getElementById('level')!;

    }
    //定义加分的方法
    addScore(){
        this.scoreEl.innerHTML = 'SCORE:'+ ++this.score +'';
        //每十分升一级
        if(this.score>= maxLevel){
            if(this.score %  maxLevel ==0){
                this.addLevel()    
            }
        }
    }

    //定义等级提升的方法
    addLevel(){
        if(this.level<10){
            this.levelEl.innerHTML= 'LEVEl:'+ ++this.level +''
        }
    }
}

export default ScorePanel;