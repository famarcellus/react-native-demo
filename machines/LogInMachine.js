import { createMachine, interpret } from "xstate";


export const LogInMachine = createMachine({
    predictableActionArguments: true,
    id: "login",
    initial: "loggedOut",
    on: {
        LOGIN: "loggedIn",
        LOGOUT: "loggedOut",
        LOADING: "loading"
    },
    states: {
        loggedOut: {},
        loading: {},
        loggedIn: {}
    }
});

export const logInService = interpret(LogInMachine)
logInService.start();

