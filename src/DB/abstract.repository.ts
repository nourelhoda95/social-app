import { Model , QueryOptions , ProjectionType , RootFilterQuery } from "mongoose";
import { MongooseUpdateQueryOptions } from "mongoose";

export abstract class AbstractRepository<T> {
  constructor(protected model: Model<T>){

  }
async create(item:Partial <T>){
    //doc=createdItem
    const createdItem = new this.model(item);
    return await createdItem.save();
    
  }

  async exist(filter:RootFilterQuery<T>,
    projection?: ProjectionType<T>,
    options?: QueryOptions<T>,
  ){
    return await this.model.findOne(filter , projection, options);
  }





  async getOne(filter:RootFilterQuery<T>,
    projection?: ProjectionType<T>,
    options?: QueryOptions<T>,
  ){
    return await this.model.findOne(filter , projection, options);
  }

  async update(
    filter: RootFilterQuery<T>,
    update: Partial<T>,
    options?: MongooseUpdateQueryOptions
  ){
     await this.model.updateOne(filter, update, options);
  }

async  delete(filter:RootFilterQuery<T>){
    await this.model.deleteOne(filter);
}


}
