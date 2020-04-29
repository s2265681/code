
interface Radio {
    switchRadio(trriger:boolean) : void | number
}

interface Battery {
     checkBattaryStatus();
}

interface WithBattery extends Battery{
    checkBattaryStatus();
}

class Car implements Radio{
    switchRadio(){}
}

class Cellphone implements Radio,Battery{
    switchRadio(){}
    checkBattaryStatus(){}
}

