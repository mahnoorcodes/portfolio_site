import styles from "./loader.module.css";

export default function Loader({
        fadeOut = false, 
        size = 96,
        color = "#ff1a1a",
        stroke = "#111",
    }) {
    return (
            <div
            className={`${styles.loaderOverlay} ${
                fadeOut ? styles.fadeOut : ""
            }`}
            >
            <div className={styles.loaderContent}>
                <svg
                className={styles.pixelHeart}
                width={size}
                height={size}
                viewBox="0 0 14 13"
                xmlns="http://www.w3.org/2000/svg"
                shapeRendering="crispEdges"
                >
                {/* fill */}
                <path
                    d="
                    M2 0 H5 V1 H2 Z
                    M8 0 H11 V1 H8 Z

                    M1 1 H6 V2 H1 Z
                    M7 1 H12 V2 H7 Z

                    M0 2 H13 V3 H0 Z
                    M0 3 H13 V4 H0 Z

                    M1 4 H12 V5 H1 Z
                    M2 5 H11 V6 H2 Z
                    M3 6 H10 V7 H3 Z
                    M4 7 H9 V8 H4 Z
                    M5 8 H8 V9 H5 Z
                    M6 9 H7 V10 H6 Z
                    "
                    fill={color}
                />
                </svg>
                <div className={styles.loadingText}>loading</div>
            </div>
        </div>
    );
}
