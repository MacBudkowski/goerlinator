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
				</header>
				<br />
				<br />
					<p>Goerlinator sent 1 GoerliETH to {router.query.address}.</p>
			
			<p>Goerlinator would be happy if you shared the information about him with 
your friends.</p>

<br />
<br />
			<p>Hasta la vista, dev!</p>
		</div>
	);
}
