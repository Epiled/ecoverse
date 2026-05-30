import React from "react";

import style from "./styles.module.scss";

const Feedback: React.FC = () => {
  return (
    <div className={style.feedback}>
      <h3 className={style["feedback__text"]}>
        Não foi possível solicitar os produtos por favor tente mais tarde!
      </h3>
    </div>
  );
};

export default Feedback;
