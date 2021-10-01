
import { Compiler } from 'webpack';

// eslint-disable-next-line import/prefer-default-export
export function timefixWebpack(compiler: Compiler) {
    const timefix = 600;
    let watching: any = {};
    const onWatchRun = (_c: any, callback: any) => {
        watching.startTime += timefix;
        callback?.();
    };
    const onDone = (stats: any, callback: any) => {
        /* eslint-disable */
        stats.startTime -= timefix;
        
        callback?.();
    };
    const aspectWatch = compiler.watch;
    // eslint-disable-next-line no-param-reassign
    compiler.watch = (...args) => {
        watching = aspectWatch.apply(compiler, args);
        return watching;
    };

    compiler.hooks.watchRun.tapAsync('fastpack/timefixWebpack', onWatchRun);
    compiler.hooks.done.tapAsync('fastpack/timefixWebpack', onDone);
}
