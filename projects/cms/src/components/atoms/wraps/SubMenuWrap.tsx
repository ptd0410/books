import classNames from "classnames";
import {
  ReactNode,
  forwardRef,
  memo,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

export interface ISubMenu {
  open(): void;
  close(): void;
}

interface ISubMenuWrap {
  children: ReactNode;
  className?: string;
}
export const SubMenuWrap = memo(
  forwardRef(({ children, className }: ISubMenuWrap, ref) => {
    const [show, setShow] = useState(false);
    const elRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(
      ref,
      () => ({
        open: () => setShow(true),
        close: () => setShow(false),
      }),
      []
    );

    const handleOutsideClick = useCallback(
      (e) => {
        if (elRef.current && !elRef.current.contains(e.target) && show) {
          setShow(false);
        }
      },
      [show]
    );

    useEffect(() => {
      document.addEventListener("mousedown", handleOutsideClick);
      return () => {
        document.removeEventListener("mousedown", handleOutsideClick);
      };
    }, [handleOutsideClick]);

    return (
      <>
        {show && (
          <div ref={elRef} className={classNames("sub-menu", className)}>
            {children}
          </div>
        )}
      </>
    );
  })
);
