import { ICollectionType, IConfig } from "./lib/app/types";

const CONFIG: IConfig = {
    coinDenom: "uarch",
    name: "Tickets to Galaxy Tour",
    chainId: "constantine-3",
    createdDate: new Date().toISOString(),
    modifiedDate: new Date().toISOString(),
    id: "andromeda",
    collections: [
        {
            crowdfund: "archway1ya56eazgxnw5sfhe7wlqats53mcafjuxf74u3dhlcms7536dajfqgkq55x",
            cw721: "archway1q5qc99uh8rpqq0cu7w3w7jwnsmtfdu93agt6jsnaajjrfld2s5eqvjkeru",
            name: "Galaxy Ticket",
            id: "galaxy-ticket",
            type: ICollectionType.CROWDFUND
        }
    ],
};

export default CONFIG;
