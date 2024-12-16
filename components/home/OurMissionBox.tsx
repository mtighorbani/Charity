import React from "react";

//app
import TextBox from "../common/base/TextBox";

const OurMissionBox = () => {
  return (
    <>
      <TextBox
        title="#دیدگا ما"
        className="shadow-lg shadow-blue/40 ring-blue mt-40"
        children="در ایدنیک، ما با ارائه فرصت برنده شدن جوایز بزرگ، پول برای خیریه
        جمع‌آوری می‌کنیم. چرا؟ چون ما باور داریم که با سرگرم‌کننده کردن فرایند
        بخشش، می‌توانیم به هم وطنانمان کمک کنیم تا زمان کمتری را صرف جمع‌آوری
        کمک‌های مالی کنند و بیشتر وقت خود را صرف انجام کارهای حیاتی در جوامعی
        کنند که به آنها خدمت می‌کنند."
      />
    </>
  );
};

export default OurMissionBox;
