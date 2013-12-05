/// <reference path="IRandomItem.ts"/>
class RandomList {
    private items:Array<IRandomItem> = null;
    private storageItems:Array<IRandomItem> = null;
    private currentItem:IRandomItem = null;
    private isFinished:boolean = false;
    private isStarted:boolean = true;
    public onFinish:() => void = null;


    constructor(items:Array<IRandomItem>) {
        this.items = items;
        this.storageItems = <Array<IRandomItem>>[];
//        this.onStart();
        this.next();

    }

    getItems():Array<IRandomItem> {
        if (this.isFinished) {
            this.onFinish();
            this.isFinished = false;
        }
        if (this.items.length == 0) {
            this.items = this.storageItems.map(function (i:IRandomItem) {
                i.priority = i.defaultPriority;
                return i;
            });
            this.isFinished = true;
        }
        return this.items;
    }

    getStorageItems():Array<IRandomItem> {
        return this.storageItems;
    }

    next():void {
        //var randomIndex = Math.round(Math.exp(Math.random()*Math.log(this.getItems().length)))+1;
        // reference: http://stackoverflow.com/questions/1062902/how-random-is-javascripts-math-random
        var randomItemIndex = Math.floor(Math.random() * (this.getItems().length));
        var items = this.getItems();

        this.currentItem = items[randomItemIndex];
        // TODO: build in priority
//        if(this.currentItem.priority !== 0) {
//            this.currentItem.priority = this.currentItem.priority - 1 ;
//            items[randomItemIndex] = this.currentItem ;
//        } else {
        if (!this.isStarted) {
            this.storageItems.push(this.currentItem);
            this.items.splice(randomItemIndex, 1);
        } else {
            this.isStarted = false;
        }
//        }
    }

    current():IRandomItem {
        return this.currentItem;
    }


    randomize() {

    }
}
