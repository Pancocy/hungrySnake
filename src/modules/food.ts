//定义食物类
const screenBase =29;
class Food{
    //定义一个属性标识食物所在的元素
    element:HTMLElement;

    constructor(){
        this.element = document.getElementById('food')!;
    }
    //定义获取食物所在坐标的方法
    get xAxios(){
        return this.element.offsetLeft
    }

    get yAxios(){
        return this.element.offsetTop
    }
    //定义食物位置改变的方法
    change(){
        //食物的位置在上下和左右的取值范围都为0~290,且两个坐标都是10的倍数
        let top =Math.floor(Math.random()*screenBase)*10
        let left =Math.floor(Math.random()*screenBase)*10
        // console.log(top,left);
        //这里不能使用offsetleft等，因为其是只读属性
        this.element.style.left =left + 'px';
        this.element.style.top =top + 'px';

        
    }
}

export default Food;