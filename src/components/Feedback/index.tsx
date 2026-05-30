import style from "./styles.module.scss";

const Feedback: React.FC = () => {
  return (
    <div className={style.error}>
      <h3 className={style["error__text"]}>
        Não foi possível solicitar os produtos por favor tente mais tarde!
      </h3>
    </div>
  );
};

export default Feedback;
