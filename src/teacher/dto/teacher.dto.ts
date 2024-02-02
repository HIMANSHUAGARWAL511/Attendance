import { IsDate, IsDateString, IsEmpty, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength } from "class-validator";


export class RegisterTeacherDto {
    @IsString()
    @IsNotEmpty()
    name: string;
    fatherName: string;

    @IsDateString()
    @IsNotEmpty()
    dob: number;

    @IsString()
    @IsNotEmpty()
    Gender: string;
    Address: string;

    @IsNumber()
    @IsNotEmpty()
    @MaxLength(10)
    mobile: number;

    @IsString()
    @IsNotEmpty()
    subject: string;

    @IsString()
    @IsNotEmpty()
    class: string;

    @IsNumber()
    @IsNotEmpty()
    TenthMarks: number;

    @IsString()
    @IsNotEmpty()
    TenthSchool: string;

    @IsNumber()
    @IsNotEmpty()
    TwelthMarks: number;

    @IsString()
    @IsNotEmpty()
    TwelthSchool: string;

    @IsNumber()
    @IsNotEmpty()
    GraduationMark: number;

    @IsString()
    @IsNotEmpty()
    CollegeName: string;

    @IsNumber()
    @IsOptional()
    PostGraduationMark?: number;

    @IsString()
    @IsOptional()
    PostGraduationCollegeName?: string;

    @IsString()
    @IsOptional()
    OtherQualification?: string;

    @IsNumber()
    @IsNotEmpty()
    Experience: number;

    @IsString()
    @IsNotEmpty()
    PreviousCompanyName: string;

    @IsNumber()
    @IsOptional()
    salary?: number;


}