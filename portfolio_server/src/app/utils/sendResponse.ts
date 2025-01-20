/* eslint-disable @typescript-eslint/no-explicit-any */
import { Response } from "express";

type TResponse<T> = {
    statusCode: number;
    success: boolean;
    message?: string;
    meta?: any;
    data: T;
}

const sendResponse = <T> (res: Response, data: TResponse<T>) =>{
    res.status(data?.statusCode).json({
        success: data.success,
        statusCode: data?.statusCode,
        message: data.message,
        meta: data?.meta,
        data: data.data,
    })
}

export default sendResponse;