import styles from "@/styles/Home.module.css";
import {
  Button,
  ButtonGroup,
  ButtonPagination,
} from "@financial-times/o3-button";

export default function Home() {
  const paginationProps = {
    type: "secondary",
    size: "",
    previousPager: {
      href: "#previous",
      label: "previous results",
    },
    pages: Array(10)
      .fill(null)
      .map((page, index) => {
        const number = index + 1;
        const currentPageNumber = 3;
        return {
          href: "#",
          current: number === currentPageNumber,
          number,
        };
      }),
    nextPager: {
      href: "#next",
      label: "next results",
    },
  };
  return (
    <main className={`${styles["main"]} o3-brand-core`}>
      <Button label="Primary" type="primary" />
      <div className="o3-brand-professional">
        <Button label="Secondary" type="secondary" />
        <Button label="Secondary" type="secondary" icon="arrow-left" />
      </div>
      <Button label="Secondary" type="secondary" />
      <Button label="Primary" type="primary" icon="arrow-right" />
      <Button label="Primary" type="primary" attributes={{"disabled": true}} />
      <ButtonGroup>
        <Button
          label="John"
          type="secondary"
          attributes={{ "aria-pressed": true }}
        />
        <Button label="Paul" type="secondary" />
        <Button label="George" type="secondary" />
        <Button label="Ringo" type="secondary" />
      </ButtonGroup>
      <div className="o3-brand-professional">
        <ButtonPagination {...paginationProps}></ButtonPagination>
      </div>
    </main>
  );
}
