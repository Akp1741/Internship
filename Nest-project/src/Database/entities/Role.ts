export class Role{
    id:String;
    name:string;
    
    constructor(partial:Partial<Role>){
        Object.assign(this,partial)
    }
}