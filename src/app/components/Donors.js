import Image from "next/image";
import styles from "../styles/Donors.module.css";

export default function Donors() {
    return (
        <div className={styles.container} id="donors">
            <h2 className={styles.title}>Donors</h2>
            <div className={styles.images}>
                <Image
                    src="/images/image (1).png"
                    alt="Child receiving aid"
                    className={styles.heroImage}
                    width={150}
                    height={300}
                />

                <Image
                    src="/images/image.png"
                    alt="Center image"
                    width={400}
                    height={200}
                    layout="responsive"
                    className={styles.heroImage2}
                />

                <Image
                    src="/images/image (11).png"
                    alt="Right image"
                    width={100}
                    height={50}
                    layout="responsive"
                    className={styles.heroImage3}
                />
            </div>
            <div className={styles.content}>
                <h3 className={styles.heading}>Register as a Donor</h3>
                <p className={styles.description}>
                    Ensuring that aid reaches those who need it the most with blockchain based humanitarian aid
                </p>
                <button className={styles.registerButton}>Register</button>
            </div>
        </div>
    );
}
