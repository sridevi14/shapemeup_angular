import { PhoneCode } from "./phone-code.interface";
import { TrainerProfile } from './trainer-profile.interface';

export interface User {
    certificate1?: any;
    certificate2?: any;
    certificate3?: any;
    achievement?: any;
    question1?: any;
    question2?: any;
    question3?: any;
    answer1?: any;
    answer2?: any;
    answer3?: any;
    currentPassword?: string;
    newPassword?: string;
    retypePassword?: string;
    fitness?: string;
    dateofJoining?: any;
    id?: string;
    uid?: string;
    firstName: string;
    lastName: string;
    dateofBirth: Date;
    email: string;
    gender: string;
    phoneCode: PhoneCode;
    phoneNumber: number;
    displayName?: string;
    photoURL?: string;
    emailVerified?: boolean;
    password?: string;
    nickName?: string;
    aboutMe?: string;
    experience?: string;
    acheivements?: string;
    certificates?: [];
    address?: Address;
    website?: string;
    userType?: string; // Coach/ Client
    trainerProfile?: TrainerProfile; // If userType is Coach then this field exists
    rating?: number;
    coachID?: string;
    isLoggedInFirstTimeFlag?: boolean; // if user logged in first time check
    about?: string;
    package?: string;
    imageURL?: string;
}

export interface Address {
    addressLine1?: string;
    addressLine2?: string;
    city?: string;
    state?: string;
    zipcode?: string;
}