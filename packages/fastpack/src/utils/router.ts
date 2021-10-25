

// eslint-disable-next-line import/prefer-default-export
export const isValidRouterPath = (path: string) => {

    if (/^\/[/a-zA-Z]/.test(path)) {
        return true
    } 

    return false
}

