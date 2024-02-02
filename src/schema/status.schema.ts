import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema()
export class Status {

    @Prop({ required: true })
    status: boolean;
}
export const statusSchema = SchemaFactory.createForClass(Status);