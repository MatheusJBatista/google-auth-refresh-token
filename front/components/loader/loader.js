import styles from "../../styles/Global.module.css";

const Loader = ({ isLoading, children }) => {
  console.log(isLoading);
  return (
    <>
      {isLoading ? (
        <main className={styles.main}>
          <i
            className="fa fa-spinner fa-spin"
            style={{ fontSize: "70px", color: "black" }}
          />
        </main>
      ) : (
        children
      )}
    </>
  );
};

export default Loader;
