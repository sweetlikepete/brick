

const task = function(name, func){

    return async function asyncTask(...args){

        await func(...args);

    };

};

export {
    task
};
