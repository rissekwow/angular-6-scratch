import { OnInit, Injectable } from "@angular/core";
import { LoggerService } from "./logger.service";

@Injectable()
export class CounterService {

    numberOfMovesFromInactiveToActiveUser: number = 0;
    numberOfMovesFromActiveToInactiveUser: number = 0;

    constructor(private loggerService: LoggerService) {
    }

    registerMovementOfUserFromActiveToInactive() {
        this.numberOfMovesFromActiveToInactiveUser++;
        this.loggerService.showLogInConsole("Registered movements from active to inactive users : " + 
        this.numberOfMovesFromActiveToInactiveUser.toLocaleString());

    }

    registerMovementOfUserFromInctiveToActive() {
        this.numberOfMovesFromInactiveToActiveUser++;
        this.loggerService.showLogInConsole("Registered movements from inactive to active users : " + 
        this.numberOfMovesFromInactiveToActiveUser.toLocaleString());
    }
}