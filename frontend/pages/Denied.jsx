import styles from "../styles/InstructionsComponent.module.css";
import Router, { useRouter } from "next/router";
export default function InstructionsComponent() {
	const router = useRouter();
	return (
		<div className={styles.container}>
			<header className={styles.header_container}>
				<h1>
				Goerlinator denied your claim.
				</h1>
			</header>
			<p>{router.query.address} hasn’t owned any POAPs and is not eligibleto claim GoerliETH.</p>
	
		</div>
	);
}
