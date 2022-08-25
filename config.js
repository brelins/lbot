module.exports = config = (headless, start) =>  {
    return{
        sessionId: 'session',
        headless,
        qrTimeout: 0,
        authTimeout: 0,
        skipUpdateCheck: true,
        multiDevice: true,
        cachedPatch: true,
        cacheEnabled: false,
        restartOnCrash: start,
        useChrome: true,
        stickerServerEndpoint: true,
        killProcessOnBrowserClose: true,
        throwErrorOnTosBlock: false,
    }
}

