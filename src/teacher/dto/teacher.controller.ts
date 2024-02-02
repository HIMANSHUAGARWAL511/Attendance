import { Body, Controller, HttpException, Param, Patch, Post } from "@nestjs/common";
import { TeacherService } from "./teacher.service";
import { RegisterTeacherDto } from "./teacher.dto";
import mongoose from "mongoose";


@Controller("teacher")
export class TeacherController {


    constructor(private teacherService: TeacherService) {

    }

    @Post("register")
    registerTeacher(@Body() registerTeacher: RegisterTeacherDto) {
        return this.teacherService.registerTeacher(registerTeacher);

    }
    @Patch("update/:id")
    async updateTeacher(@Body() registerTeacher: RegisterTeacherDto, @Param("id") id: string) {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw new HttpException("Invalid Id", 400);
        const teacher = await this.teacherService.updateTeacher(id, registerTeacher);
        if (!teacher) throw new HttpException("Teacher not found", 404);
        return teacher;
    }
}