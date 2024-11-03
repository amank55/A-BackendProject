class ApiError extends Error{
    constructor(
        statusCode,
        message = "something went wrong",
        error = [],
        stack = ""
    ){
        super(message)
        this.statuscode = this.statuscode
        this.message = message
        this.success = false;
        this.errors = this.errors

        if (stack) {
            this.stack = stack
        }else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}


export {ApiError}