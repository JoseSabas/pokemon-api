import { Request, Response, NextFunction } from "express";

// 404 handler
export const notFoundHandler = (req:Request, res:Response, next:NextFunction) => {
  res.status(404).json({error:"Not Found"});
};

// Global error handler
export const errorHandler = (err:any, req:Request, res:Response, next:NextFunction) => {
  console.error(err);
  res.status(500).json({error:"Internal Server Error"});
};