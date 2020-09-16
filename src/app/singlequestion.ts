export class Question{
    q:String;
    ans:String;
    choices:String[];
    selected:String;
    constructor(que:String, ans:String){
        this.q = que;
        this.ans = ans;
    }
}