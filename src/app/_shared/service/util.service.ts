import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UtilityService {

    toTitleCase(str: string) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    checkIfAlreadyExists(list: any[], propertyToCheck: string, valueToCompare: string) {
        let isAlreadyExists: any[] = list.filter(e => e[propertyToCheck] === valueToCompare)
        console.log(isAlreadyExists);
        if (isAlreadyExists.length > 0) {
            return true;
        } else
            return false;
    }
}