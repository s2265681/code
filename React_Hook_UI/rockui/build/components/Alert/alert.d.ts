import React from "react";
export declare enum AlertType {
    Success = "success",
    Info = "info",
    Warning = "warning",
    Error = "error"
}
interface BaseAlertProps {
    className?: string;
    type?: AlertType;
    message?: string;
}
declare type NaticeDivProps = BaseAlertProps & React.BaseHTMLAttributes<HTMLElement>;
export declare type AlertProps = Partial<NaticeDivProps>;
declare const Alert: React.FC<AlertProps>;
export default Alert;
