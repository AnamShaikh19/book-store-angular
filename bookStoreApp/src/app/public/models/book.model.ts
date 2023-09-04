import { PriceModel } from "./price.model";

export class BookModel{
   public  id:number;
   public title:string;
  public  totalPages:number;
  private  Author:string;
   public price: PriceModel;
   public isPublished:boolean;
   public PublishOn: Date;

   public set author(value:string)
{
    this.Author='Author:' +value;
}
public get author(){
    return this.Author
}

}