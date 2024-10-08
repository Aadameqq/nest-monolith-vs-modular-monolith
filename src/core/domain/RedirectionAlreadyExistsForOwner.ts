import { DomainException } from './domain-exception';
import { Redirection } from './redirection';

export class RedirectionAlreadyExistsForOwner extends DomainException {
    public constructor(public readonly existingRedirection: Redirection) {
        super();
    }
}
