import styles from "../styles/InstructionsComponent.module.css";
import Router, { useRouter } from "next/router";

export default function InstructionsComponent() {
	const router = useRouter();
	return (
		<div className={styles.container}>
			<header className={styles.header_container}>
				<h1>
				Congrats, human.
				</h1>
		
				<container className={styles.header_container}>Goerlinator sent 1 GoerliETH to {router.query.address}.</container>
			</header>
			<p>Goerlinator would be happy if you shared the information about him with 
your friends.</p>
			<p>Hasta la vista, dev!</p>
		</div>
	);
}
