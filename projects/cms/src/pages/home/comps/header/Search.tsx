import { Input, RIcon } from "@@components";
import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { IoMenuSharp, IoSearch } from "react-icons/io5";

const Search = memo(() => {
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLInputElement>(null);

  const handleOpen = useCallback(() => {
    setShow(true);
  }, []);

  useEffect(() => {
    if (show) ref.current?.focus();
  }, [show]);

  return (
    <>
      {show ? (
        <div
          onBlur={() => {
            console.log("blurrr");
            setShow(false);
          }}
        >
          <Input ref={ref} className="h-8" right={<RIcon Icon={IoSearch} />} />
        </div>
      ) : (
        <RIcon Icon={IoSearch} onClick={handleOpen} />
      )}
    </>
  );
});

export default Search;
