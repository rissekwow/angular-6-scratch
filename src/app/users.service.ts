import { Injectable, EventEmitter } from "@angular/core";
import { CounterService } from "./counter.service";

@Injectable()
export class UsersService {

    constructor(private counterService: CounterService){
    }

    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];

    moveUserToActiveUsers(inactiveId: number) {
        this.activeUsers.push(this.inactiveUsers[inactiveId]);
        this.inactiveUsers.splice(inactiveId, 1);
        this.counterService.registerMovementOfUserFromInctiveToActive();
    }

    moveUserToInactiveUsers(activeId: number) {
        this.inactiveUsers.push(this.activeUsers[activeId]);
        this.activeUsers.splice(activeId, 1);
        this.counterService.registerMovementOfUserFromActiveToInactive();
    }

}