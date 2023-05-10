import styles from "./forms.module.css";

export function Forms({ label, children }) {
  return (
    <>
      <form data-o-component="o-forms">
        <label for="fruits" class={styles["o-forms-field"]}>
          <span class={styles["o-forms-title"]}>
            <span class={styles["o-forms-title__main"]}>{label}</span>
          </span>
          <span class={styles["o-forms-input"]}>{children}</span>
        </label>
      </form>
    </>
  );
}
