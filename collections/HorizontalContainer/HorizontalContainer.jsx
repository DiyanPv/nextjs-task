import styles from "./HorizontalContainer.module.css";
export const HorizontalContainer = ({
  title,
  descriptionbeforebold,
  descriptionafterbold,
  image,
  descriptionbold,
}) => {
  return (
    <div className={styles.horizontalcontainer}>
      <img src={image} alt="no img found" width={`9%`} />
      <div className={styles.boxtextsection}>
        <h2 className={styles.boxsectiontitle}>{title}</h2>
        <p className={styles.boxdescription}>
          {descriptionbeforebold} {<strong>{descriptionbold}</strong>}
          {descriptionafterbold}
        </p>
      </div>
    </div>
  );
};
