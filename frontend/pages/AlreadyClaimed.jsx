import styles from "../styles/InstructionsComponent.module.css";
import Router, { useRouter } from "next/router";
export default function InstructionsComponent() {
	const router = useRouter();
	return (
		<div className={styles.container}>
			<header className={styles.header_container}>
				<h1>
				This address already got their share.
				</h1>
			</header>
			<p>{router.query.address} has already claimed GoerliETH and is not eligible for another claim.</p>
	
		</div>
	);
}