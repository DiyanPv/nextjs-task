import { HorizontalContainer } from "@/collections/HorizontalContainer/HorizontalContainer";
import { briefImage, searchImage, meetingImage } from "@/resources/images";
import styles from "./List.module.css";
export const List = () => {
  return (
    <div className={styles.mainlistcontainer}>
      <HorizontalContainer
        image={briefImage.src}
        title="Brief"
        descriptionbeforebold="Complete"
        descriptionbold="brief writing or simple guidance "
        descriptionafterbold="on what to include, we've got you covered."
      />
      <HorizontalContainer
        image={searchImage.src}
        title="Search"
        descriptionbeforebold="In-depth agency search covering."
        descriptionbold="Criteria matching"
        descriptionafterbold=", door knocking and due-dilligence vetting.."
      />
      <HorizontalContainer
        image={meetingImage.src}
        title="Pitch"
        descriptionbeforebold="Comprehensive"
        descriptionbold="pitch management,"
        descriptionafterbold="including comms, diary management and pitch hosting."
      />
    </div>
  );
};
