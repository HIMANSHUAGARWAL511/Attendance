import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";




@Schema()
export class Teacher {

    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    FatherName: string;

    @Prop({ required: true })
    DOB: string;

    @Prop({ required: true })
    Gender: string;

    @Prop({ required: true })
    Address: string;

    @Prop({ required: true })
    mobile: number;

    @Prop({ required: true })
    subject: string;

    @Prop({ required: true })
    class: string;

    @Prop({ required: true })
    TenthMarks: number;

    @Prop({ required: true })
    TenthSchool: string;

    @Prop({ required: true })
    TwelthMarks: number;

    @Prop({ required: true })
    TwelthSchool: string;

    @Prop({ required: true })
    GraduationMark: number;

    @Prop({ required: true })
    CollegeName: string;

    @Prop({ required: false })
    PostGraduationMark: number;

    @Prop({ required: false })
    PostGraduationCollegeName: string;

    @Prop({ required: false })
    OtherQualification: string;

    @Prop({ required: true })
    Experience: number;

    @Prop({ required: true })
    PreviousCompanyName: string;

    @Prop({ required: true })
    salary: number;
}

export const TeacherSchema = SchemaFactory.createForClass(Teacher);