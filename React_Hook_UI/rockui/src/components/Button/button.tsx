import React from "react";
import classNames from "classnames";
export enum ButtonSize {
    Large = "lg",
    Small = "sm",
}

export enum ButtonType {
  Primary = "primary",
  Default = "default",
  Dashed = "dashed",
  Danger = "danger",
  Link = "link",
}

interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  btnType?: ButtonType;
  children: React.ReactNode;
  href?: string;
}



type NaticeButonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NaticeButonProps & AnchorButtonProps>;  // 改为可选

const Button: React.FC<ButtonProps> = (props) => {
  const { btnType,className, disabled, size, href,  children , ...restProps} = props;
  // btn , btn-lg , btn-primary
  const classes = classNames("btn", className , {
    [`btn-${btnType}`]: btnType, // btnType存在就添加上这个[`btn-${btnType}`] class
    [`btn-${size}`]: size,
    disabled: btnType === ButtonType.Link && disabled,
  });

  if (btnType === ButtonType.Link && href) {
    return (
      <a href={href} className={classes} {...restProps}>
        {children}
      </a>
    );
  } else {
    return <button className={classes} disabled={disabled}  {...restProps}>{children}</button>;
  }
};


Button.defaultProps = {
    disabled:false,
    btnType:ButtonType.Default
}

export default Button;