import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Teacher } from "src/schema/teacher.schema";
import { RegisterTeacherDto } from "./teacher.dto";




@Injectable()
export class TeacherService {

    constructor(
        @InjectModel(Teacher.name) private teacherModel: Model<Teacher>
    ) { }

    registerTeacher(registerTeacher: RegisterTeacherDto) {
        const newTeacher = new this.teacherModel(registerTeacher);
        return newTeacher.save();
    }

    async updateTeacher(id: string, registerTeacher: RegisterTeacherDto) {
        try {
            const updatedTeacher = await this.teacherModel.findByIdAndUpdate(id, registerTeacher, { new: true });
            return updatedTeacher;
        }
        catch (err) {
            return err

        }

    }
}